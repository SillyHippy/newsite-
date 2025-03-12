import os

def insert_mobile_menu_html(html_filepath, mobile_menu_html):
    """
    Inserts mobile menu HTML into index.html before the 'Contact Us' link in the header.

    Args:
        html_filepath (str): Path to the index.html file.
        mobile_menu_html (str): The HTML code to insert for the mobile menu.
    """

    try:
        with open(html_filepath, "r", encoding="utf-8") as f:
            lines = f.readlines()

        insertion_index = -1
        found_contact_us = False
        header_section_ended = False

        for index, line in enumerate(lines):
            if "<div class=\"elementor elementor-183\" data-elementor-id=\"183\" data-elementor-type=\"wp-page\">" in line:
                insertion_index = index
                break  # Stop searching once we find the line before wp-page section

        if insertion_index != -1:
            updated_lines = lines[:insertion_index]  # Lines before insertion point
            updated_lines.append(mobile_menu_html)  # Insert mobile menu HTML
            updated_lines.extend(lines[insertion_index:]) # Add rest of the lines

            with open(html_filepath, "w", encoding="utf-8") as f:
                f.writelines(updated_lines)
            print(f"Successfully inserted mobile menu HTML into: {html_filepath}")

        else:
            print(f"Error: Could not find insertion point in {html_filepath}")

    except Exception as e:
        print(f"Error processing {html_filepath}: {e}")


if __name__ == "__main__":
    html_file_path = input("Enter the path to your index.html file: ")
    if not os.path.isfile(html_file_path):
        print("Error: Invalid file path. Please provide a valid path to index.html.")
    else:
        mobile_menu_code_to_insert = """
    <!-- NEW SIMPLIFIED MOBILE HEADER -->
    <div class="mobile-header elementor-hidden-desktop elementor-hidden-tablet">
        <!-- MOVED DESKTOP LOGO HERE -->
        <div class="elementor-element elementor-element-b53a816 elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-widget-tablet__width-initial elementor-widget elementor-widget-image desktop-logo" data-element_type="widget" data-id="b53a816" data-widget_type="image.default">
          <div class="elementor-widget-container">
           <a href="index.html">
            <noscript>
             <img alt="logo" decoding="async" loading="lazy" src="oPKyDQlOdjnFtEbtOfVCRpiYRmCLmZut/logo_NaQ7yBFS.webp" title=""/>
            </noscript>
            <img alt="logo" class="lazy" data-src="https://ai20-templates-prod.s3.amazonaws.com/oPKyDQlOdjnFtEbtOfVCRpiYRmCLmZut/logo_NaQ7yBFS.webp" decoding="async" loading="lazy" src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20%20%22%3E%3C/svg%3E" title=""/>
           </a>
          </div>
         </div>

        <button class="hamburger hamburger--spin" type="button">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    </div>

    <!-- NEW SIMPLIFIED MOBILE MENU -->
    <div class="mobile-menu">
        <nav class="mobile-nav-menu">
            <ul class="mobile-menu-list">
                <li class="menu-item"><a href="index.html">Home</a></li>
                <li class="menu-item"><a href="pricing/index.html">Pricing</a></li>
                <li class="menu-item"><a href="index.html#Courier">Courier Services</a></li>
                <li class="menu-item"><a href="payments/index.html">Payments</a></li>
                <li class="menu-item"><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    </div>
"""
        insert_mobile_menu_html(html_file_path, mobile_menu_code_to_insert)
        print("Script execution complete.")