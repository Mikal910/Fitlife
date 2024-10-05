// You can add interactive features here
console.log("Welcome to FitLife Gym!");
// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Accordion for classes
const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Modal functionality for membership details
const modal = document.getElementById("modal");
const modalDetails = document.getElementById("modal-details");
const closeButton = document.querySelector(".close-button");

document.querySelectorAll('.membership ul li').forEach(item => {
    item.addEventListener('click', function () {
        const membershipType = this.textContent;
        // Replace this with actual details
        modalDetails.textContent = `Details for ${membershipType} membership.`;
        modal.style.display = "block";
    });
});

// Close the modal when the close button is clicked
closeButton.addEventListener("click", function () {
    modal.style.display = "none";
});

// Close the modal when clicking outside of the modal content
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
