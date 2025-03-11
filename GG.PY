import requests
from bs4 import BeautifulSoup
import os
import re
from urllib.parse import urlparse, urljoin

def is_internal_url(url, base_url):
    """Checks if a URL is internal to the base URL domain."""
    return urlparse(url).netloc == urlparse(base_url).netloc or not urlparse(url).netloc

def download_asset(url, output_dir, base_url):
    """Downloads an asset (CSS, JS, image) and saves it locally, returns relative path.
       Skips data URLs and handles 404 errors gracefully."""
    if url.startswith("data:"):
        print(f"Skipping download for data URL: {url[:50]}...") # Just print a shortened data URL
        return url # Return the data URL itself, keep it in the HTML

    try:
        asset_response = requests.get(url, stream=True)
        asset_response.raise_for_status() # Raise HTTPError for bad responses (like 404, 500)

        asset_path_parts = urlparse(url).path.split('/')
        asset_filename = asset_path_parts[-1] or "asset"
        asset_subdir = "/".join(asset_path_parts[1:-1]) if len(asset_path_parts) > 1 else ""

        local_asset_dir = os.path.join(output_dir, asset_subdir)
        os.makedirs(local_asset_dir, exist_ok=True)
        local_asset_path = os.path.join(local_asset_dir, asset_filename)

        with open(local_asset_path, 'wb') as f:
            for chunk in asset_response.iter_content(chunk_size=8192):
                f.write(chunk)
        return os.path.relpath(local_asset_path, output_dir)

    except requests.exceptions.RequestException as e:
        if isinstance(e, requests.exceptions.HTTPError) and e.response.status_code == 404:
            print(f"Asset not found (404): {url}. Skipping.")
            return None # Indicate asset not downloaded, but don't crash
        else:
            print(f"Error downloading asset {url}: {e}")
            return None

def process_html(url, output_dir, domain_to_remove="justlegalsolutions.org"):
    """Downloads, processes HTML, downloads assets, uses relative URLs, removes domain refs."""
    try:
        response = requests.get(url)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')
        base_url = url

        page_path_parts = urlparse(url).path.split('/')
        page_subdir = "/".join(page_path_parts[1:-1]) if len(page_path_parts) > 1 else ""
        local_page_dir = os.path.join(output_dir, page_subdir)
        os.makedirs(local_page_dir, exist_ok=True)
        page_filename = page_path_parts[-1] or "index"
        if not page_filename.endswith(".html"):
            page_filename += ".html"
        local_page_path = os.path.join(local_page_dir, page_filename)

        asset_tags = {'link': 'href', 'script': 'src', 'img': 'src'}

        for tag_name, attr_name in asset_tags.items():
            for tag in soup.find_all(tag_name):
                asset_url = tag.get(attr_name)
                if asset_url:
                    absolute_asset_url = urljoin(base_url, asset_url)
                    if is_internal_url(absolute_asset_url, base_url):
                        local_asset_path_rel = download_asset(absolute_asset_url, output_dir, base_url)
                        if local_asset_path_rel:
                            tag[attr_name] = local_asset_path_rel
                        elif local_asset_path_rel is None and tag_name == 'script' and attr_name == 'src' and absolute_asset_url.endswith('email-decode.min.js'):
                            # Specifically remove the <script> tag for the missing email-decode.js
                            tag.extract() # Remove the tag from the soup

        for tag in soup.find_all(string=True):
            if tag.parent.name not in ['script', 'style']:
                if domain_to_remove in tag:
                    new_text = tag.replace(domain_to_remove, "")
                    tag.replace_with(new_text)

        with open(local_page_path, 'w', encoding='utf-8') as f:
            f.write(str(soup.prettify()))

        print(f"Processed and saved: {url} to {local_page_path}")

    except requests.exceptions.RequestException as e:
        print(f"Error processing {url}: {e}")

def main():
    urls_to_process = [
        "https://justlegalsolutions.org/terms-and-conditions/",
        "https://justlegalsolutions.org/privacy-policy/",
        "https://justlegalsolutions.org/faq/",
        "https://justlegalsolutions.org/",
        "https://justlegalsolutions.org/payments/",
        "https://justlegalsolutions.org/pricing/"
    ]
    output_directory = "github_pages_site"

    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    for url in urls_to_process:
        process_html(url, output_directory)

    print(f"\nFinished processing URLs. Output saved to '{output_directory}' directory.")
    print("To use on GitHub Pages:")
    print("1. Upload the contents of the '{}' directory to your GitHub repository.".format(output_directory))
    print("2. Ensure your GitHub Pages is configured to serve from the repository.")
    print("3. Open the HTML files in the '{}' directory locally to verify they work offline.".format(output_directory))
    print("\nImportant Notes:")
    print("- Domain references are removed from text content (outside <script>, <style>).")
    print("- URLs inside JavaScript or CSS files are NOT modified in this basic script.")
    print("- Dynamic content heavily reliant on JavaScript might not be fully captured.")
    print("- Test the output thoroughly before deploying to GitHub Pages.")

if __name__ == "__main__":
    main()