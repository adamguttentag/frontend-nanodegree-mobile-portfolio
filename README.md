# Website Performance Optimization portfolio project

## Description
A small collection of optimized sample Web pages

## Installation
1. Visit [the project on GitHub](https://github.com/adamguttentag/frontend-nanodegree-mobile-portfolio), and use one of the following methods to download the files:

  * **If you just want to view the pages,** click the "Download ZIP" button on the right side of the page, then unzip the downloaded file.
  * **If you are familiar with version control software and wish to download a copy for development purposes,** use the "HTTPS clone URL" on the right side of the page.

2. Open the build/index.html file in a modern Web browser to see the optimized pages. Open the source/index.html file in a modern Web browser to see the original pages.

## Purpose
Developed as part of the Udactiy Front-End Nanodegree program to demonstrate proficiency performance optimizations. Key areas of study for this project are:
  * Minification of assets via [Grunt](http://gruntjs.com/)
  * Jank prevention in the [Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/rendering/?hl=en) (JavaScript > Style > Layout > Paint > Composite)
  * [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) testing in a development environment
The assignment rubric can be viewed [here](https://www.udacity.com/course/viewer#!/c-nd001/l-2735848561/m-2686388535).

##Rubric Notes

###Critical Rendering Path for index.html
####Optimizations Performed
* Minified /js/perfmatters.js using grunt-contrib-uglify
* Minified /css/print.css and /css/style.css using grunt-contrib-cssmin and inlined them
* Minified /index.html using grunt-minify-html
* Created thumbnail of /views/images/pizzeria.jpg in /img/ using grunt-resize-crop
* Moved analytics.js call to after content renders
* Replaced Google font stylesheet call with CSS that calls the font directly

####PageSpeed Scores Achieved
Tested by running "python -m SimpleHTTPServer 8080" in the build folder and "ngrok http 8080" to serve pages to PageSpeed
* Mobile: 96
* Desktop: 97

###Framerate for pizza.html
####Optimizations Performed
* Replaced switches with arrays "pizzaContainerWidth" and "pizzaSizeLabels" containing the values that would have been returned by the switch. The slider value indicates the index within the array. This method requires less code than the switch and probably less logic for the browser to handle.
* Replaced all instances of "querySelector" with "getElementById" to double performance. For performance comparison, see: http://jsperf.com/getelementbyid-vs-queryselector
* Deleted unnecessary functions determineDx() and sizeSwitcher()
* In function changePizzaSizes(), moved DOM query out of the for loop and stored the results in array randomPizzaContainers
* Deleted dx and width calculations
* In function updatePositions(), moved phase value calculation outside the existing for loop and into its own loop that generates an array of the five possible values. As the loop iterates through the moving pizzas, it iterates through the calculated array of phase values.
* On DOMContentLoaded, I added code to calculate the maximum number of pizzas needed to cover the window. A column of pizzas is generated for each 233 pixels of width, and a row of pizzas is generated for each 200 pixels of height.
* Rounded moving pizza width from 73.333 pixels to 73 because there's no need to tell the browser to do extra work to render them with that level of detail.

####Ghost Bars
In the Chrome timeline I still see red triangles indicating jank, but when I click on them the black triangles point to tall "ghost bars" like the ones in [this forum posting](https://discussions.udacity.com/t/ive-achieved-60fps-mostly-but-still-have-jank-any-clues/37267/7).

My understanding is that this means there are things going on in the background (housekeeping, GPU issues, etc.) outside the developer's control, but the bars indicating scripting, rendering, and painting are below the 60 fps line. The forum post seems to indicate that this is acceptable for the purposes of this project.

###Computation Efficiency for pizza.html
####Console Reports
Time to resize pizzas: 0.4599999999918509ms

###Build Tools
* grunt-resize-crop used to create a thumbnail of pizzeria.jpg
* grunt-resize-crop used to reduce full-size pizzeria.jpg to a more reasonable size
* grunt-contrib-imagemin used to compress all images
* grunt-contrib-uglify used to minify JavaScript files
* grunt-minify-html used to minify HTML files
* grunt-contrib-cssmin used to minify CSS
* moved development code into "source" directory and grunt output production code in "build" directory

###Comments
source/views/js/main.js is commented with the following conventions to explain changes I made to the code:
* // EDIT: indicates changes I made to the default project code
* // NOTE: indicates a brief discussion about why I made a change to the code

## Authors
* Original files by [durant-udacity](https://github.com/durant-udacity), [Mrk-Nguyen](https://github.com/Mrk-Nguyen), [nicolasartman](https://github.com/nicolasartman), [Safadurimo](https://github.com/Safadurimo) and [susansmith](https://github.com/susansmith).
* This version contains custom code by [adamguttentag](https://github.com/adamguttentag).

## Fork History
Forked from https://github.com/udacity/frontend-nanodegree-mobile-portfolio November 2015.
