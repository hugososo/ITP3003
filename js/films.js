function searchFunction() {
  document.querySelector(".search-container form output").style.display="block";
  var input = document.getElementById("searchBox").value; //get the user input in the search box
  var lowerCase = input.toLowerCase(); //make the input lowercase, to prevent if user input uppercase will not search anything

  var filmInf = document.querySelectorAll(".films-container li"); //store the films information in filmInf
  for (i = 0; i < filmInf.length; i++) {
    filmsStr = filmInf[i].innerText.toLowerCase(); //get the text of each element
    if (filmsStr.indexOf(lowerCase) > -1) { //it will return -1 if filmsStr don't match the user input
      filmInf[i].style.display = ""; //if >-1 means the filmsStr match the user input, then show the elements
    } else {
      filmInf[i].style.display = "none"; //hide the others
    }
    document.getElementById("searchBox").value = "";
  }
}

function showAll() { //Show all the elements
  var filmInf = document.querySelectorAll(".films-container li");
  for (i = 0; i < filmInf.length; i++) {
    filmInf[i].style.display = "";
  }
  document.querySelector(".search-container form output").value = "";
  document.querySelector(".search-container form output").style.display="";
}

function message() { //just a message to notify user the page will coming soon
  alert("Coming soon!");
}