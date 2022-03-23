 // 创建一个 "关闭 "按钮，并将其附加到每个列表项中
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// 点击关闭按钮来隐藏当前的列表项
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
//
// 增加点击添加“checked”事件
var list = document.querySelector('#doingThings');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// 增加回车添加事项
var input = document.getElementById("ListInput");
    input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("Btn").click();
    }
});
// 在点击 "添加 "按钮时创建一个新的列表项
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("ListInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("请输入事项！");
  } else {
    document.getElementById("doingThings").appendChild(li);
  }
  document.getElementById("ListInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span); 
   for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  } 
} 
function cleanAllList() { 
  var e = document.querySelector("#doingThings"); 
  var child = e.lastElementChild;  
  while (child) { 
      e.removeChild(child); 
      child = e.lastElementChild; 
  } 
} 
var btn = document.getElementById("").onclick = function() { 
  deleteChild(); 
} 