var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

ul.addEventListener("click", function(event){
	if(event.target.nodeName === "BUTTON"){
		var child = event.target.parentElement;
		event.target.parentElement.parentElement.removeChild(child);
	}
	event.target.classList.toggle("done");
});

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var delBtn = document.createElement("button");
    delBtn.appendChild(document.createTextNode(" Del "));
    li.appendChild(document.createTextNode(input.value + "   "));
    li.insertAdjacentHTML("beforeEnd", delBtn.outerHTML)
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);