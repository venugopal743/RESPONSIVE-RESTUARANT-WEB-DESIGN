document.addEventListener("DOMContentLoaded", () => {
    const dishes = [
        {
            name: "Grilled chicken with potatoes",
            ingredients: "Chicken, Garlic, Potatoes, Tomatoes",
            price: "₹2000"
        },
        {
            name: "Fried chicken Wings",
            ingredients: "Chicken, Garlic, Potatoes, Cornstarch",
            price: "₹1000"
        },
        {
            name: "Paneer Tikka",
            ingredients: "Paneer, Garlic, Yogurt, Tomatoes",
            price: "₹750"
        },
        {
            name: "Chicken Shawarma with potatoes",
            ingredients: "Chicken, Garlic, Potatoes, Tomatoes",
            price: "₹500"
        }
    ];

    const orderButtons = document.querySelectorAll(".menu-card .btn a");

    orderButtons.forEach((button, index) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            const dish = dishes[index];

            alert(
                `Order Confirmed!

Dish: ${dish.name}
Price: ${dish.price}`
            );
        });
    });
});



const ratingInputs = document.querySelectorAll('.rating input[type="radio"]');

ratingInputs.forEach(input => {
    input.addEventListener('click', function() {

        const ratingResult =
        input.closest('.product-item')
        .querySelector('.rating-result');

        const starsGiven = parseInt(input.value);

        let feedback = "";

        switch (starsGiven) {

            case 1:
                feedback = "Bad";
                break;

            case 2:
                feedback = "Average";
                break;

            case 3:
                feedback = "Good";
                break;

            case 4:
                feedback = "Excellent";
                break;

            case 5:
                feedback = "Outstanding";
                break;
        }

        ratingResult.textContent =
        `You rated this as: ${feedback}`;
    });
});



document.getElementById("bookTableButton")
.addEventListener("click", () => {

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const phone =
document.getElementById("phone").value;

const date =
document.getElementById("date").value;

const time =
document.getElementById("time").value;

const persons =
document.getElementById("persons").value;


if (name && email && phone && date && time && persons) {

document.getElementById("contact").style.display="none";

document.getElementById("bookingSummary").style.display="block";

}
else {

alert("Please fill all fields");

}

});
