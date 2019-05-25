<!--//--><![CDATA[//><!--
startList = function() { if (document.all&&document.getElementById) { theul = document.getElementById("menu").childNodes[0]; theul.setAttribute('id','menu_ul'); navRoot = document.getElementById("menu_ul"); for (i=0; i<navRoot.childNodes.length; i++) { effect(navRoot); } } }
function effect(elementId) { node = elementId.childNodes[i]; if (node.nodeName=="LI") { node.onmouseover=function() { this.className="over"; }; node.onmouseout=function() { this.className=this.className.replace("over", ""); } ; } }
window.onload=startList;
