// Grab all images
for(i=0;i<document.images.length;i++)
{
 // if document.images[i].getAttribute("data-src"){ // If there's a "data-src" attribute on them
  document.images[i].src = document.images[i].getAttribute("data-src");  // Set the src value to that of the data-src value
  document.images[i].style.visibility = "visible";
  document.images[i].style.opacity = 1;
 // }
}
// Based on https://gist.github.com/ZaneHannanAU/2a46aa6fd659cd091592c66606fc05c1
