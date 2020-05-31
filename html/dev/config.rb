
#Folder settings
relative_assets = true      #because we're not working from the root
css_dir = "../assets/css"          	#where the CSS will saved
sass_dir = "../assets/scss"           #where our .scss files are
images_dir = "../assets/images"    	#the folder with your images
javascripts_dir = "../assets/js"		#the folder with your js

# You can select your preferred output style here (can be overridden via the command line):
output_style = :compressed # After dev :compressed prod:expanded

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

# Obviously
preferred_syntax = :scss

# no need cache
asset_cache_buster = :none
cache = false

# source map
sourcemap = true



# note for brakepoint install
# sudo gem install breakpoint -v
