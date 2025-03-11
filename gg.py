import os

code_blocks_to_delete = [
    """<div class="wprm-wrapper">
   <!-- Overlay Starts here -->
   <!-- Overlay Ends here -->
   <div class="wprmenu_bar normalslide right" id="wprmenu_bar">
    <div class="hamburger hamburger--slider">
     <span class="hamburger-box">
      <span class="hamburger-inner">
      </span>
     </span>
    </div>
    <div class="menu_title">
     .
     <a href="index.html">
      <img alt="logo" class="bar_logo" decoding="async" src="wp-content/uploads/2025/02/cropped-cropped-cropped-cropped-ezgif-563de8ffd5926-e1738902542904.jpg"/>
     </a>
    </div>
   </div>
   <div class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right default" id="mg-wprm-wrap">
    <ul id="wprmenu_menu_ul">
     <li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-589" id="menu-item-589">
      <a aria-current="page" href="index.html">
       Home
      </a>
     </li>
     <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-473" id="menu-item-473">
      <a href="pricing/index.html">
       Pricing
      </a>
     </li>
     <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-578" id="menu-item-578">
      <a href="index.html#Courier">
       Courier Services
      </a>
     </li>
     <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-475" id="menu-item-475">
      <a href="#contact">
       Contact
      </a>
     </li>
     <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-770" id="menu-item-770">
      <a href="payments/index.html">
       Payments
      </a>
     </li>
    </ul>
   </div>
  </div>""",
    """   <script data-two_delay_id="two_67a929174068e" data-two_delay_src="inline" id="wprmenu.js-js-extra" type="text/javascript">
  </script>""",
    """.hamburger{padding:15px 15px;display:inline-block;cursor:pointer;transition-property:opacity,filter;transition-duration:0.15s;transition-timing-function:linear;font:inherit;color:inherit;text-transform:none;background-color:#fff0;border:0;margin:0;overflow:visible}.hamburger-box{width:30px;height:24px;display:inline-block;position:relative}.hamburger-inner{display:block;top:50%;margin-top:-2px}.hamburger-inner,.hamburger-inner::before,.hamburger-inner::after{width:30px;height:4px;background-color:#000;border-radius:4px;position:absolute;transition-property:transform;transition-duration:0.15s;transition-timing-function:ease}.hamburger-inner::before,.hamburger-inner::after{content:"";display:block}.hamburger-inner::before{top:-10px}.hamburger-inner::after{bottom:-10px}.hamburger--slider .hamburger-inner{top:2px}.hamburger--slider .hamburger-inner::before{top:10px;transition-property:transform,opacity;transition-timing-function:ease;transition-duration:0.15s}.hamburger--slider .hamburger-inner::after{top:20px}#wprmenu_bar,#wprmenu_bar *{margin:0;padding:0;-moz-box-sizing:border-box!important;-webkit-box-sizing:border-box!important;box-sizing:border-box!important;font-family:inherit;text-align:left;font-size:100%;font-weight:400}html body div.wprm-wrapper{z-index:999999}#wprmenu_bar img{border:0;border:none}#wprmenu_bar{position:fixed;background:#4C656C;padding:10px 16px;cursor:pointer;overflow:hidden;height:42px;z-index:99999}#wprmenu_bar .menu_title{display:inline-block;line-height:35px;position:relative;top:-6px}#wprmenu_bar .menu_title a{display:inline-block;position:relative;top:4px}#wprmenu_bar .bar_logo{border:none;margin:0;padding:0 8px 0 0;width:auto;height:25px}#wprmenu_bar div.hamburger{margin-top:-3px}body{position:relative!important}#mg-wprm-wrap ul li{margin:0}#mg-wprm-wrap{z-index:9999}#mg-wprm-wrap ul li a{text-decoration:none;z-index:9999}#wprmenu_menu_ul{padding:0 0 50px;margin:0;overflow:hidden}#mg-wprm-wrap li.menu-item a{padding:13px 14px}.cbp-spmenu{position:fixed;overflow:auto;height:100%;z-index:9999}.cbp-spmenu a{padding:1em;display:block}#mg-wprm-wrap.cbp-spmenu-left,#mg-wprm-wrap.cbp-spmenu-right{top:42px}.cbp-spmenu-right{right:-100%}.cbp-spmenu,.cbp-spmenu-push{-webkit-transition:all .3s ease;-moz-transition:all .3s ease;transition:all .3s ease}#wprmenu_bar,#mg-wprm-wrap.custom .menu_title,#mg-wprm-wrap,.wpr_custom_menu #custom_menu_icon,.cbp-spmenu-push #mg-wprm-wrap.cbp-spmenu-top{display:none}.wprmenu_icon span:nth-child(1),#wprmenu_bar,html body .wprm-overlay.active,#mg-wprm-wrap.cbp-spmenu.custom{top:0}#wprmenu_bar,html body .wprm-overlay.active,.cbp-spmenu-push,.wprmenu_icon span{left:0}.wprmenu_icon span,#wprmenu_menu.wprmenu_levels ul li,html body div.wprm-wrapper,#wprmenu_bar,.wpr_search .wpr-search-field{width:103%}#wprmenu_menu_ul .sub-menu,#wprmenu_menu_ul,#wprmenu_bar,#wprmenu_bar *{list-style:none}@media only screen and (max-width:767px){html body div.wprm-wrapper{overflow:scroll}#mg-wprm-wrap ul li{border-top:solid 1px rgb(255 255 255 / .05);border-bottom:solid 1px rgb(255 255 255 / .05)}#wprmenu_bar{background-image:url();background-size:cover;background-repeat:repeat}#wprmenu_bar{background-color:#fff}html body div#mg-wprm-wrap .wpr_submit .icon.icon-search{color:#fff}#wprmenu_bar .menu_title,#wprmenu_bar .wprmenu_icon_menu,#wprmenu_bar .menu_title a{color:#fff}#wprmenu_bar .menu_title a{font-size:20px;font-weight:700}#mg-wprm-wrap li.menu-item a{font-size:15px;text-transform:uppercase;font-weight:bolder}#mg-wprm-wrap li.menu-item-has-children ul.sub-menu a{font-size:15px;text-transform:uppercase;font-weight:400}#mg-wprm-wrap li.current-menu-item>a{background:#0c0c0c}#mg-wprm-wrap li.current-menu-item>a,#mg-wprm-wrap li.current-menu-item span.wprmenu_icon{color:#ffffff!important}#mg-wprm-wrap{background-color:#0c0c0c}.cbp-spmenu-push-toright,.cbp-spmenu-push-toright .mm-slideout{left:80%}.cbp-spmenu-push-toleft{left:-80%}#mg-wprm-wrap.cbp-spmenu-right,#mg-wprm-wrap.cbp-spmenu-left,#mg-wprm-wrap.cbp-spmenu-right.custom,#mg-wprm-wrap.cbp-spmenu-left.custom,.cbp-spmenu-vertical{width:80%;max-width:400px}#mg-wprm-wrap ul#wprmenu_menu_ul li.menu-item a,div#mg-wprm-wrap ul li span.wprmenu_icon{color:#fff}#mg-wprm-wrap ul#wprmenu_menu_ul li.menu-item:valid~a{color:#fff}#mg-wprm-wrap ul#wprmenu_menu_ul li.menu-item a:hover{background:#0c0c0c;color:#ffffff!important}div#mg-wprm-wrap ul>li:hover>span.wprmenu_icon{color:#ffffff!important}.wprmenu_bar .hamburger-inner,.wprmenu_bar .hamburger-inner::before,.wprmenu_bar .hamburger-inner::after{background:#0c0c0c}.wprmenu_bar .hamburger:hover .hamburger-inner,.wprmenu_bar .hamburger:hover .hamburger-inner::before,.wprmenu_bar .hamburger:hover .hamburger-inner::after{background:#fff}#wprmenu_menu.left{width:80%;left:-80%;right:auto}#wprmenu_menu.right{width:80%;right:-80%;left:auto}.wprmenu_bar .hamburger{float:right}.wprmenu_bar #custom_menu_icon.hamburger{top:10px;right:10px;float:right;background-color:#fff}html body div#wprmenu_bar{height:42px}#mg-wprm-wrap.cbp-spmenu-left,#mg-wprm-wrap.cbp-spmenu-right,#mg-widgetmenu-wrap.cbp-spmenu-widget-left,#mg-widgetmenu-wrap.cbp-spmenu-widget-right{top:42px!important}.wpr_custom_menu #custom_menu_icon{display:block}html{padding-top:42px!important}#wprmenu_bar,#mg-wprm-wrap{display:block}div#wpadminbar{position:fixed}}"""
]

def delete_code_blocks_in_html(repo_path, blocks_to_delete):
    """
    Searches for and deletes a list of specific code blocks in HTML files within a repository.

    Args:
        repo_path: The path to the repository directory.
        blocks_to_delete: A list of multi-line strings, where each string is a code block to delete.
    """

    for root, _, files in os.walk(repo_path):
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(root, file)
                print(f"Processing file: {filepath}")
                try:
                    with open(filepath, 'r') as f:
                        content = f.read()

                    original_content = content
                    updated_content = content

                    for block_to_delete in blocks_to_delete: # Iterate through each block to delete
                        updated_content = updated_content.replace(block_to_delete, "") # Replace each block

                    if updated_content != original_content:
                        with open(filepath, 'w') as f:
                            f.write(updated_content)
                        print(f"  Deleted code blocks in: {filepath}")
                    else:
                        print(f"  Code blocks not found in: {filepath}")

                except Exception as e:
                    print(f"  Error processing {filepath}: {e}")

if __name__ == "__main__":
    repo_path = "."  # Current directory (repo folder)
    print(f"Searching and deleting code blocks in HTML files within repository: {repo_path}")
    delete_code_blocks_in_html(repo_path, code_blocks_to_delete)
    print("Finished processing HTML files.")