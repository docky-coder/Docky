var dragging = false;
var resizing = false;
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  dragging = true;
  if (resizing) return;
  elmnt.onmousedown = dragMouseDown;
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    dragging = false;
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// CREATOR
var Squarelist = [];
function makeid(length) {
  var result = '',
  characters= 'abcdefghijklmnopqrstuvwxyz',
  charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
  result += characters.charAt(Math.floor(Math.random()*charactersLength));
  }
  return result;
}
var editing  = false;

if (document.getElementById && document.createElement) {
	var butt = document.createElement('BUTTON');
	var buttext = document.createTextNode('Ready!');
	butt.appendChild(buttext);
	butt.onclick = saveEdit;
}

function catchIt(e) {
	if (editing) return;
  if (dragging) return;
	if (!document.getElementById || !document.createElement) return;
	if (!e) var obj = window.event.srcElement;
	else var obj = e.target;
	while (obj.nodeType != 1) {
		obj = obj.parentNode;
	}
	if (obj.tagName == 'TEXTAREA' || obj.tagName == 'A') return;
	while (obj.nodeName != 'P' && obj.nodeName != 'HTML') {
		obj = obj.parentNode;
	}
	if (obj.nodeName == 'HTML') return;
	var x = obj.innerHTML;
	var y = document.createElement('TEXTAREA');
	var z = obj.parentNode;
	z.insertBefore(y,obj);
	z.insertBefore(butt,obj);
	z.removeChild(obj);
	y.value = x;
	y.focus();
	editing = true;
}

function saveEdit() {
	var area = document.getElementsByTagName('TEXTAREA')[0];
	var y = document.createElement('P');
	var z = area.parentNode;
	y.innerHTML = area.value;
	z.insertBefore(y,area);
	z.removeChild(area);
  var els = document.getElementsByTagName('button');
  for (var i = 0;i < els.length;i++){
    if (els[i].innerText == "Ready!"){
      els[i].remove();
    }
  }
	editing = false;
}
document.onclick = catchIt;
function insertAfter(newElement, referenceElement) {
    referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
}
function creator (){
  var size = prompt("What size you want to set to your square?");
  var random = Math.floor(Math.random() * (16 - 6 + 1)) + 6;
  var classik = makeid(random);
  let div = document.createElement("div");
  div.classList.add(classik);
  div.style.width = size;
  div.setAttribute("draggable","true");
  let header = document.createElement("header");
  header.appendChild(document.createTextNode(classik + " Div"));
  div.appendChild(header);
  let content = document.createElement("div");
  content.classList.add("content");
  div.appendChild(content);
  let icon = document.createElement("div");
  icon.classList.add("icon");
  let i = document.createElement("i");
  i.classList.add("bx");
  i.classList.add("bx-move");
  icon.appendChild(i);
  content.appendChild(icon);
  let title = document.createElement("div");
  title.classList.add("title");
  title.appendChild(document.createTextNode(classik + " Div"));
  content.appendChild(title);
  let p = document.createElement("p");
  p.appendChild(document.createTextNode("This is a draggable div which is created using HTML & CSS & Javascript"))
  content.appendChild(p);
  document.querySelector(".blocks").appendChild(div);
  Squarelist.push("." + classik);
  Squarelist.forEach(item => {
    dragElement(document.querySelector(item));
  });
}
