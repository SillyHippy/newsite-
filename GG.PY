import os
import re

def remove_code_blocks_from_html_files(repo_path):
    """
    Removes specific HTML, CSS, and JavaScript code blocks from all HTML files
    within the given repository path and its subfolders.

    Args:
        repo_path (str): The path to the root directory of your repository.
    """

    html_block_markers = (
        r"--- START DELETE HTML ---.*?--- END DELETE HTML ---",
        re.DOTALL | re.IGNORECASE  # re.DOTALL to match across lines, re.IGNORECASE for case-insensitive matching
    )
    css_block_markers = (
        r"/\* START DELETE CSS \*/.*?/\* END DELETE CSS \*/",
        re.DOTALL | re.IGNORECASE
    )
    js_block_markers = (
        r"--- START DELETE JAVASCRIPT ---.*?--- END DELETE JAVASCRIPT ---",
        re.DOTALL | re.IGNORECASE
    )

    block_markers_list = [html_block_markers, css_block_markers, js_block_markers]

    for root, _, files in os.walk(repo_path):
        for file in files:
            if file.endswith((".html", ".htm")):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        file_content = f.read()

                    modified_content = file_content

                    for markers in block_markers_list:
                        block_regex, flags = markers
                        modified_content = re.sub(block_regex, '', modified_content, flags=flags)

                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(modified_content)
                    print(f"Processed and updated: {filepath}")

                except Exception as e:
                    print(f"Error processing {filepath}: {e}")

if __name__ == "__main__":
    repo_directory = input("Enter the path to your repository root directory: ")
    if not os.path.isdir(repo_directory):
        print(f"Error: '{repo_directory}' is not a valid directory.")
    else:
        remove_code_blocks_from_html_files(repo_directory)
        print("Finished processing HTML files.")