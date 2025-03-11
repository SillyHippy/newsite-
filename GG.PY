import os
import re

def remove_wprmenu_code_from_html_files(repo_path):
    """
    Removes wprmenu_bar HTML, CSS, and JS code from HTML files in a repository.

    Args:
        repo_path (str): Path to the repository root directory.
    """

    # HTML regex to find and remove the wprmenu-wrapper div
    html_regex = re.compile(r'(?s)<!-- Overlay Starts here -->.*?<div class="wprm-wrapper">.*?<\/div>', re.IGNORECASE)

    # CSS regex to comment out the entire two_critical_css style block
    css_regex = re.compile(r'(?s)<style class="two_critical_css".*?>.*?<\/style>')

    # JavaScript regex to comment out wprmenu.js-js-extra and wprmenu.js-js <script> tags
    js_regex = re.compile(r'(?s) <script data-two_delay_id="two_67a929174068e" data-two_delay_src="inline" id="wprmenu\.js-js-extra".*?<\/script>\s*<script data-two_delay_id="two_67a92917406a2" data-two_delay_src="\/wp-includes\/js\/wprmenu\.js\?ver=3\.1\.8" id="wprmenu\.js-js".*?<\/script>')


    for root, _, files in os.walk(repo_path):
        for file in files:
            if file.endswith((".html", ".htm")):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        file_content = f.read()

                    modified_content = file_content

                    # Remove HTML
                    modified_content = re.sub(html_regex, '', modified_content)

                    # Comment out CSS (entire block)
                    modified_content = re.sub(css_regex, '<!-- Removed wprmenu CSS -->\n<!-- Original CSS Block Below -->\n<!-- \\0 -->\n<!-- End removed wprmenu CSS -->', modified_content)

                    # Comment out JavaScript
                    modified_content = re.sub(js_regex, '<!-- Removed wprmenu Javascript -->\n<!-- Original Javascript Block Below -->\n<!-- \\0 -->\n<!-- End removed wprmenu Javascript -->', modified_content)


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
        remove_wprmenu_code_from_html_files(repo_directory)
        print("Finished processing HTML files.")