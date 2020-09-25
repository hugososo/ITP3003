//This file stylise register.html

//click the 2 header outside the form will let user focus on UserID field
function startform() {
  document.getElementById("userId").focus();
}

//show name when submit
function hi() {
  lName = document.getElementById("lName").value;
  fName = document.getElementById("fName").value;
  alert("Hello!\n" + lName + " " + fName);
}

//check the length and pattern of userid, password fields
function checkPattern(caller) {
  var remind = "";
  remind = caller.id + "reminder";
  if (caller.value.length < 8 ||
    caller.value.length >= 30 ||
    !caller.value.match(caller.pattern)) {
    caller.focus();
    document.getElementById(remind).style.display = "block";
  } else {
    document.getElementById(remind).style.display = "none";
  }
}

//check the re-enter password same or not--------------------------------
function checkpw() {
  var reenter = document.getElementById("rePw");
  if (document.getElementById("pw").value != reenter.value)
    document.getElementById("isSame").style.display = "block";
  else
    document.getElementById("isSame").style.display = "none";
}

//function to show collapse checkbox---------------------------------
function showBox() {
  var loop = document.getElementById("checkboxlist");
  if (loop.style.display == "none" || loop.style.display == "")
    loop.style.display = "block";
  else
    loop.style.display = "none";
}