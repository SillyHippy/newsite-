import os

def rename_files_in_repo_recursive(repo_path):
    """
    Recursively renames files in a GitHub repository directory and its subfolders
    to remove .html extension and infer correct image extensions.
    Excludes 'index.html' from renaming.

    Args:
        repo_path: The path to the root directory of your GitHub repository.
    """

    image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'] # Add more if needed

    for root, _, files in os.walk(repo_path): # os.walk for recursive traversal
        for filename in files:
            if filename == "index.html":
                continue  # Skip index.html

            if filename.endswith(".html"):
                base_name = filename[:-5]  # Remove ".html"

                # Try to infer image extension from the base name
                correct_extension = None
                for ext in image_extensions:
                    if base_name.lower().endswith(ext): # Case-insensitive check
                        correct_extension = ext
                        base_name_no_ext = base_name[:-len(ext)] # Remove the image extension part
                        break # Stop searching once we find a matching extension

                if correct_extension:
                    new_filename = base_name_no_ext + correct_extension
                    old_filepath = os.path.join(root, filename) # Full path using root and filename
                    new_filepath = os.path.join(root, new_filename) # Full path for new file

                    try:
                        os.rename(old_filepath, new_filepath)
                        print(f"Renamed '{filename}' to '{new_filename}' in '{root}'")
                    except FileNotFoundError:
                        print(f"Error: File not found: '{filename}' in '{root}'")
                    except OSError as e:
                        print(f"Error renaming '{filename}' in '{root}': {e}")
                else:
                    # If no image extension found, just remove .html
                    new_filename = base_name
                    old_filepath = os.path.join(root, filename) # Full path
                    new_filepath = os.path.join(root, new_filename) # Full path
                    try:
                        os.rename(old_filepath, new_filepath)
                        print(f"Renamed '{filename}' to '{new_filename}' (removed .html) in '{root}'")
                    except FileNotFoundError:
                        print(f"Error: File not found: '{filename}' in '{root}'")
                    except OSError as e:
                        print(f"Error renaming '{filename}' in '{root}': {e}")
            else:
                print(f"Skipping '{filename}' in '{root}' (not ending with .html)")


if __name__ == "__main__":
    repo_directory = input("Enter the path to your GitHub repository directory: ")
    if not os.path.isdir(repo_directory):
        print("Error: Invalid directory path provided.")
    else:
        print(f"Recursively renaming files in: {repo_directory}")
        rename_files_in_repo_recursive(repo_directory) # Call the recursive function
        print("Recursive file renaming process completed.")