// document.getElementById('contents'); --> returns a HTML DOM Object
// var contents = $('#contents');  --> returns a jQuery Object

// In jQuery, to get the same result as document.getElementById, you can access the jQuery Object and get the first element in the object

// var contents = $('#contents')[0]; --> returns a HTML DOM Object


$("#button1")[0].onclick = function() {
    $("#box")[0].style.height = "200";
};
// document.getElementById("button2").onclick = function() {
//     document.getElementById("box").style.height= "200";
// };



$("#button2")[0].onclick = function() {
    $("#box")[0].style.backgroundColor = "blue";
}
// document.getElementById("button2").onclick = function() {
//     document.getElementById("box").style.backgroundColor = "blue";
// }



$("#button3")[0].onclick = function() {
    $("#box")[0].style.opacity = "0.5";
}
// document.getElementById("button3").onclick = function() {
//      document.getElementById("box").style.opacity = "0.5";
// }



$("#button4")[0].onclick = function() {
    $("#box")[0].style.height = "150px";
    $("#box")[0].style.backgroundColor = "orange";
    $("#box")[0].style.opacity = 1;
    $("#box")[0].style.width = "150px";
    $("#box")[0].style.margin = "25px";
    $("#demo")[0].innerHTML = "Press the buttons to change the box!";
}
// document.getElementById("button3").onclick = function() {
//      document.getElementById("box").style.height = "150";
//      document.getElementById("box").style.backgroundColor = "orange";
//      document.getElementById("box").style.opacity = "1";
// }



$("#button5")[0].onclick = function() {
    var currentWidth = $("#box")[0].style.width.replace('px', '')
    var num = parseInt(currentWidth, 10)
    if(num < 300) {
        $("#box")[0].style.width = `${num + 10}px`
    }
    $("#demo")[0].innerHTML = "Current Width: " + num + "px (will stop at 300px";
}
// document.getElementById("button5").onclick = function() {
//     var currentWidth = document.getElementById("box").style.width.replace('px', '');
//     var num = parseInt(currentWidth, 10)
//     var newNum = (num +10)+ "px"
//     if(num < 300) {
//         document.getElementById("box").style.width= newNum;
//     }
//     document.getElementById("demo").innerHTML = "Current Width: " + newNum;
// };



$("#button6")[0].onclick = function() {
    var currentWidth = $("#box")[0].style.width.replace('px', '')
    var num = parseInt(currentWidth, 10)
    if(num > 10) {
        $("#box")[0].style.width = `${num - 10}px`
    }
    $("#demo")[0].innerHTML = "Current Width: " + num + "px (will stop at 10px";
}
// document.getElementById("button6").onclick = function() {
//     var currentWidth = document.getElementById("box").style.width.replace('px', '');
//     var num = parseInt(currentWidth, 10)
//     var newNum = (num -10)+ "px"
//     if(num > 10) {
//         document.getElementById("box").style.width= newNum;
//     }
//     document.getElementById("demo").innerHTML = isNaN(newNum);
// };



$("#button7")[0].onclick = function() {
    var currentOpa = $("#box")[0].style.opacity + 1;
    if (currentOpa >= 1) {
        currentOpa = 1;
    };
    if (currentOpa > .1) {
        var NewOpa = currentOpa - .1;
        currentOpa = NewOpa;
        $("#box")[0].style.opacity = currentOpa;
    } else {
        currentOpa = $("#box")[0].style.opacity + 1;
        $("#box")[0].style.opacity = 0;
    }
    $("#demo")[0].innerHTML = "Current Opacity: " + currentOpa.toFixed(2) + "(will reset and go again)";
};
// document.getElementById("button7").onclick = function() {
//     var currentOpa = document.getElementById("box").style.opacity + 1;
//     if (currentOpa > 1) {
//         currentOpa = $("#box").style.opacity + 1;
//     }
//     if (currentOpa > .1) {
//     	var NewOpa = currentOpa - .1;
//     	currentOpa = NewOpa
//     	document.getElementById("box").style.opacity= currentOpa;
//     } else {
//     	currentOpa = document.getElementById("box").style.opacity + 1;
//         document.getElementById("box").style.opacity = 0
//  	} 
//     document.getElementById("demo").innerHTML = "Current Opacity: " + currentOpa.toFixed(2) + "(will reset and go again)";
//};



$("#button8")[0].onclick = function() {
    var color;
    var list = ["red", "orange", "yellow", "green", "blue", "pink", "black", "grey", "white"];
    color = list[Math.floor(Math.random() * list.length)];
    if (color == "white") {
        $("#box")[0].style.border = "thin solid";
    } else {
        $("#box")[0].style.border = "none";
    }
    $("#box")[0].style.backgroundColor = color;
    $("#demo")[0].innerHTML = "Random Color winner: " + color.toUpperCase();

};
// document.getElementById("button8").onclick = function() {
//     var color; 
//     var list = ["red", "orange", "yellow", "green", "blue", "pink", "black", "grey", "white"];
//     color = list[Math.floor(Math.random() * list.length)];
//      if (color == "white") {
//          document.getElementById("box")[0].style.border = "thin solid";
//      } else {
//          document.getElementById("box")[0].style.border = "none";
//      }
//     document.getElementById('box').style.backgroundColor = color;
//     document.getElementById("demo").innerHTML = "Random Color winner: " + color;
// };



$("#button9")[0].onclick = function() {
    var currentMarg = $("#box")[0].style.marginLeft.replace("px", "");
    var num = parseInt(currentMarg, 10);
    var newNum = (num + 5) + "px";
    if(num < 300) {
        $("#box")[0].style.marginLeft = newNum;
    }
    $("#demo")[0].innerHTML = "Margin-Left is now " + newNum;
}
// document.getElementById("button9").onclick = function() {
// 	var currentMarg = document.getElementById("box").style.marginLeft.replace("px", "");
//     var num = parseInt(currentMarg, 10);
//     var newNum = (num + 5) + "px";
//     if(num < 300) {
//       document.getElementById("box").style.marginLeft = newNum;
//     }
//       document.getElementById("demo").innerHTML = "Margin-left is now " + newNum;
// };



$("#button10")[0].onclick = function() {
    var currentMarg = $("#box")[0].style.marginLeft.replace("px", "");
    var num = parseInt(currentMarg, 10);
    var newNum = (num - 5) + "px";
    if(num > 25) {
        $("#box")[0].style.marginLeft = newNum;
    }
    $("#demo")[0].innerHTML = "Margin-Left is now " + newNum;
}
// document.getElementById("button10").onclick = function() {
// 	var currentMarg = document.getElementById("box").style.marginLeft.replace("px", "");
//     var num = parseInt(currentMarg, 10);
//     var newNum = (num - 5)+ "px"
//     if(num > 25) {
//       document.getElementById("box").style.marginLeft= newNum;
//     }
//       document.getElementById("demo").innerHTML = "Margin-left is now " + newNum;
// };

  

$("#button11")[0].onclick = function() {
    var currentMarg = $("#box")[0].style.marginTop.replace("px", "");
    var num = parseInt(currentMarg, 10);
    var newNum = (num + 5) + "px";
    if(num < 300) {
        $("#box")[0].style.marginTop = newNum;
    }
    $("#demo")[0].innerHTML = "Margin-Top is now " + newNum;
}
// document.getElementById("button11").onclick = function() {
// 	var currentMarg = document.getElementById("box").style.marginTop.replace("px", "");
//     var num = parseInt(currentMarg, 10);
//     var newNum = (num + 5)+ "px"
//     if(num < 300) {
//       document.getElementById("box").style.marginTop= newNum;
//     }
//       document.getElementById("demo").innerHTML = "Margin-top is now " + newNum;
// };


$("#button12")[0].onclick = function() {
    var currentMarg = $("#box")[0].style.marginTop.replace("px", "");
    var num = parseInt(currentMarg, 10);
    var newNum = (num - 5) + "px";
    if(num > 25) {
        $("#box")[0].style.marginTop = newNum;
    }
    $("#demo")[0].innerHTML = "Margin-Top is now " + newNum;
}
// document.getElementById("button12").onclick = function() {
// 	var currentMarg = document.getElementById("box").style.marginTop.replace("px", "");
//     var num = parseInt(currentMarg, 10);
//     var newNum = (num - 5)+ "px"
//     if(num > 25) {
//       document.getElementById("box").style.marginTop= newNum;
//     }
//       document.getElementById("demo").innerHTML = "Margin-top is now " + newNum;
// };
