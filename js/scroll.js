// To examine if user had scroll the browser, if so, show up back to top button///////////////////////////////

// if user had scroll action, call scroll function
window.onscroll = scroll;

function scroll() {
    /*if the distance which user scroll through from the very top exceed 80x
    , the button showup.*/
    if (window.scrollY > 80)
        document.getElementById("backToTop").style.display = "block";
    else
        document.getElementById("backToTop").style.display = "none";
}
/////////////////////////////////////////////////////////////////////////////////////////////////////