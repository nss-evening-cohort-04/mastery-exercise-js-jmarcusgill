var myTree = {
  height : document.getElementById("height"),
  character : document.getElementById("character")
};

var myButton = document.getElementById("growIt");

function makeTreeGrow () {
  var heightEntered = myTree.height.value;
  var charEntered = myTree.character.value;

  if (heightEntered === "" || charEntered === "") {
    alert("Please provide both a number and a character");
  } else {
      console.log("Here be ye tree")
      for (var i = 0; i < heightEntered; i++) {

        var math = i*2+1;
        var treeWidth = charEntered.repeat(math);

        var spaceMath = ((heightEntered*2-1) - math)/2;
        var spaceWidth = " ".repeat(spaceMath);

        console.log(spaceWidth + treeWidth);
      }
    }
};

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        makeTreeGrow();
    }
});

myButton.addEventListener("click", makeTreeGrow);