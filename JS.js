

// ORDER SYSTEM


document.addEventListener("DOMContentLoaded", () => {


const buttons = document.querySelectorAll(".btn a");


buttons.forEach((button, index) => {


button.addEventListener("click", (event) => {


event.preventDefault();


alert("Order Confirmed Successfully");


});


});


});




// BOOK TABLE SYSTEM



document

.getElementById("bookTableButton")

.addEventListener("click", () => {


const name =

document.getElementById("name").value;


const email =

document.getElementById("email").value;


const phone =

document.getElementById("phone").value;


if(name && email && phone)


{


alert("Booking Successful");


}


else


{


alert("Fill all fields");


}


});




// VIDEO SPEED


document.getElementById("video").playbackRate = 0.25;
