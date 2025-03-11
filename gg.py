import os

def modify_index_html(repo_path):
    """
    Modifies index.html files in a repository to update favicon links.

    Args:
        repo_path (str): The path to the root directory of the repository.
    """

    lines_to_delete_substrings = [
        "wp-content/uploads/2025/02/cropped-cropped-cropped-cropped-ezgif-563de8ffd5926",
        "website1/oPKyDQlOdjnFtEbtOfVCRpiYRmCLmZut/favicon.html",
        "website1/oPKyDQlOdjnFtEbtOfVCRpiYRmCLmZut/favicon-2.html",
        "website1/oPKyDQlOdjnFtEbtOfVCRpiYRmCLmZut/apple-touch-icon.html",
        "website1/oPKyDQlOdjnFtEbtOfVCRpiYRmCLmZut/site.html",
        "<link rel=\"icon\" type=\"image/svg+xml\" href=\"website1/oPKyDQlOdjnFtEbtOfVCRpiYRmCLmZut/favicon.html\" />", # deleting full lines for these
        "<link rel=\"shortcut icon\" href=\"website1/oPKyDQlOdjnFtEbtOfVCRpiYRmCLmZut/favicon-2.html\" />",
        "<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"website1/oPKyDQlOdjnFtEbtOfVCRpiYRmCLmZut/apple-touch-icon.html\" />",
        "<link rel=\"manifest\" href=\"website1/oPKyDQlOdjnFtEbtOfVCRpiYRmCLmZut/site.html\" />"
    ]

    lines_to_add = """
<link rel="icon" type="image/png" href="/website1/oPKyDQlOdjnFtEbtOfVCRpiYRmCLmZut/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/website1/oPKyDQlOdjnFtEbtOfVCRpiYRmCLmZut/favicon.svg" />
<link rel="shortcut icon" href="/website1/oPKyDQlOdjnFtEbtOfVCRpiYRmCLmZut/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/website1/oPKyDQlOdjnFtEbtOfVCRpiYRmCLmZut/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="JLS" />
<link rel="manifest" href="/website1/oPKyDQlOdjnFtEbtOfVCRpiYRmCLmZut/site.webmanifest" />
"""

    for root, _, files in os.walk(repo_path):
        for file in files:
            if file == "index.html":
                filepath = os.path.join(root, file)
                print(f"Processing: {filepath}")
                try:
                    with open(filepath, "r", encoding="utf-8") as f:
                        lines = f.readlines()

                    updated_lines = []
                    head_tag_inserted = False
                    for line in lines:
                        delete_line = False
                        for substring in lines_to_delete_substrings:
                            if substring in line:
                                delete_line = True
                                break
                        if not delete_line:
                            updated_lines.append(line)
                            if "<head>" in line.lower() and not head_tag_inserted:
                                updated_lines.append(lines_to_add)
                                head_tag_inserted = True


                    with open(filepath, "w", encoding="utf-8") as f:
                        f.writelines(updated_lines)

                    print(f"Modified: {filepath}")

                except Exception as e:
                    print(f"Error processing {filepath}: {e}")

if __name__ == "__main__":
    repo_directory = input("Enter the path to your repository root directory: ")
    if not os.path.isdir(repo_directory):
        print("Error: Invalid repository path. Please provide a valid directory.")
    else:
        modify_index_html(repo_directory)
        print("Finished processing index.html files.")