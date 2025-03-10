import os

def fix_file_extensions(download_folder):
    """
    Recursively scans a directory and its subfolders, and renames files that have a double
    extension (like .webp.html, .jpg.html, etc.) to remove the extra .html.
    It skips renaming files named 'index.html'.

    Args:
        download_folder: The path to the root download folder
                         (e.g., 'justlegalsolutions-static-copy').
    """

    image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico'] # Add more if needed
    font_extensions = ['.woff', '.woff2', '.ttf', '.otf', '.eot', '.sfnt'] # Add more if needed

    all_extensions_to_fix = image_extensions + font_extensions

    for root, _, files in os.walk(download_folder):
        for filename in files:
            if filename.lower() == "index.html": # Skip index.html files
                continue

            if filename.endswith(".html"):
                for correct_ext in all_extensions_to_fix:
                    if filename.lower().endswith(correct_ext.lower() + ".html"): # Case-insensitive check
                        old_filepath = os.path.join(root, filename)
                        new_filename = filename[:-len(".html")] # Remove the extra .html
                        new_filepath = os.path.join(root, new_filename)

                        try:
                            os.rename(old_filepath, new_filepath)
                            print(f"Renamed '{filename}' to '{new_filename}'")
                        except FileNotFoundError:
                            print(f"Error: File not found: '{filename}'")
                        except OSError as e:
                            print(f"Error renaming '{filename}': {e}")
                        break # Stop checking other extensions once renamed

if __name__ == "__main__":
    download_directory = input("Enter the path to your 'justlegalsolutions-static-copy' folder: ")
    if not os.path.isdir(download_directory):
        print("Error: Invalid directory path provided.")
    else:
        print(f"Fixing file extensions in: {download_directory}")
        fix_file_extensions(download_directory)
        print("File extension fixing process completed.")