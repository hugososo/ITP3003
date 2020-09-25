//This file handle comment functions and gallery functions of 
//akira.html, spiritedaway.html, yourname.html, paprika.html

//to store the div element id="a"
var newContent;

//to store the textarea element id = "comment"
var text;

//to store the IDs of divs relating to the user comment functions
var review_classname = ["invisible", "authorA", "review-titleA"];

//to store the elements with id = "invisible", "authorA", "review-titleA"
var review_container = new Array(3);

//assign the element responsible of comment functions to variable and array.
function initializeCommentDiv() {
  for (var i = 0; i < review_container.length; i++) {
    //store div elements to array.
    review_container[i] = document.getElementById(review_classname[i]);
  }

  newContent = document.getElementById("a");
}

//copy text of textarea to div#a
function copy() {
  text = document.getElementById("comment");
  newContent.innerText = text.value;
}

//Show the invisible comment box for user and anchor user to that when submit successfully
function submit() {

  //  This store the id of the input field related to
  //  Name of commentor and title of comment
  var inputID;

  //  This for loop check the content of name and title field
  //  and assign the value to the div#authorA and div#review-titleA
  for (var j = 1; j < review_container.length; j++) {
    inputID = "input";
    inputID += j;

    //if the input field is empty, show alert message and anchor user to page top
    if (document.getElementById(inputID).value === "") {
      alert("Please fill in the Blank input field");
      location.href = "#";
      return;
    }

    //    assign the value of input field to the div#authorA and div#review-titleA
    review_container[j].innerText = document.getElementById(inputID).value;

    //    reset the value of input field after submit
    document.getElementById(inputID).value = "";
  }

  //    reset the value of textarea after submit  
  document.getElementById("comment").value = "";

  // Disable comment function and submit button after submited once.
  // Without that, user can modify the submitted comment
  // Due to limitation of our knowledge, we can only let user comment once
  document.getElementById("comment").readOnly = true;
  document.getElementById("Submit_button").disabled = true;

  //  show the invisible div when submited
  document.getElementById("invisible").style.display = "block";

  //reset style of text in textarea
  document.getElementById("comment").style.color = "white";
  document.getElementById("comment").style.fontSize = "20px";

  //remind user they can only comment once unless refresh
  document.getElementById("comment").value = "Please refresh to comment again";

  //direct the commentor to the comment they just submited
  location.href = "#invisible";
}

//The below functions stylise text in the textarea and the text in the div#a

//stylise font weight in the textarea and div#a
function bold() {
  var fontw = document.getElementById("comment");
  if (fontw.style.fontWeight == "normal" ||
    fontw.style.fontWeight == "") {
    fontw.style.fontWeight = "bolder";
    newContent.style.fontWeight = "bolder";
  } else {
    fontw.style.fontWeight = "normal";
    newContent.style.fontWeight = "normal";
  }

}

//stylise font style in the textarea and div#a
function italic() {
  var fStyle = document.getElementById("comment");
  if (fStyle.style.fontStyle == "normal" ||
    fStyle.style.fontStyle == "") {
    fStyle.style.fontStyle = "italic";
    newContent.style.fontStyle = "italic";
  } else {
    fStyle.style.fontStyle = "normal";
    newContent.style.fontStyle = "normal";
  }

}

//Alignment text to right in the textarea and div#a
function right() {
  document.getElementById("comment").style.textAlign = "right";
  newContent.style.textAlign = "right";
}

//Alignment text to left in the textarea and div#a
function left() {
  document.getElementById("comment").style.textAlign = "left";
  newContent.style.textAlign = "left";
}

//Alignment text to middle in the textarea and div#a
function middle() {
  document.getElementById("comment").style.textAlign = "center";
  newContent.style.textAlign = "center";
}

//stylise font color in the textarea and div#a
function change() {
  document.getElementById("comment").style.color = document.getElementById("color-panel").value;
  newContent.style.color = document.getElementById("color-panel").value;
}

//stylise font size in the textarea and div#a
function fontsize() {
  document.getElementById("comment").style.fontSize =
    document.getElementById("font-chooser").value + "px";

  newContent.style.fontSize =
    document.getElementById("font-chooser").value + "px";
}

//Below are the functions about image gallery

//scroll the window of gallery to left by 100px
function pre() {
  document.getElementById("image-box").scrollLeft -= 100;
}

//scroll the window of gallery to right by 100px
function next() {
  document.getElementById("image-box").scrollLeft += 100;
}

//replace the source of image and show the enlarged image to user
function enlarge(img) {
  document.getElementById("cover").style.display = "block";
  var largeimg = document.getElementById("large");
  largeimg.src = img.src;
}

//cancel the enlarge image when user click 'x'
function disappear() {
  document.getElementById("cover").style.display = "none";
}