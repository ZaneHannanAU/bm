// Grab all links
var text = "";
var newline = "\\n"

var openbracketa = "["
var closebracketa= "]"

var openbracketb = "("
var closebracketb= ")"

var opentitle = " \\\""
var closetitle= "\\\""

for(i=0;i<document.links.length;i++)
{
 text += "* ";
 text += openbracketa;
 text += document.links[i].innerHTML;
 text += closebracketa;
 text += openbracketb;
 text += document.links[i].getAttribute("href");
 text += opentitle;
 text += document.links[i].getAttribute("title");
 text += closetitle;
 text += closebracketb;
 text += newline;
}
with(window.open()){document.write("<textarea style=width:100%;height:100%>" + text + "</textarea>")};document.close();
