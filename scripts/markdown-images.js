// Grab all images
var text = "";
var newline = "\\n"

var openbracketa = "!["
var closebracketa= "]"

var openbracketb = "("
var closebracketb= ")"

var opentitle = " \\\""
var closetitle= "\\\""

for(i=0;i<document.images.length;i++)
{
 text += "* ";
 text += openbracketa;
 text += document.images[i].getAttribute("alt");
 text += closebracketa;
 text += openbracketb;
 text += document.images[i].getAttribute("src");
 text += opentitle;
 text += document.images[i].getAttribute("title");
 text += closetitle;
 text += closebracketb;
 text += newline;
}
with(window.open()){document.write(document.write("<textarea style=width:100%;height:100%>" + text + "</textarea>"))};document.close();
