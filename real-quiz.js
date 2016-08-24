var height = document.getElementById("height");
var character = document.getElementById("character");
var myButton = document.getElementById("growIt");

function validation () {
  var myTree = {
    height: height.value,
    character: character.value
  };
    if (myTree.height === "" || myTree.character === "") {
      alert("Please provide both a number and a character");
    } else {
        console.log("Here be ye tree");
        makeTreeGrow(myTree);
    }
};

function makeTreeGrow (myTree) {
      for (var i = 0; i < myTree.height; i++) {

        var math = i*2+1;
        var treeWidth = myTree.character.repeat(math);

        var spaceMath = ((myTree.height*2-1) - math)/2;
        var spaceWidth = " ".repeat(spaceMath);

        console.log(spaceWidth + treeWidth);
      }
};

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        validation();
    }
});

myButton.addEventListener("click", validation);

