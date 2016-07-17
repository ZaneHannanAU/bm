var imgs = []
var img = document.createElement("img")
var newline = document.createElement("br")
for(i=0;i<document.images.length;i++)
{
 img.src = document.images[i].getAttribute("src");
 imgs += document.appendChild(img) + document.appendChild(newline)
}
with(window.open()){document.write("<style>img{max-width:100%;height:auto}</style><center>" + imgs + "</center>")};document.close();
