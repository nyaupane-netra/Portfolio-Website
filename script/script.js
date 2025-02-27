// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})
function downloadResume() {
    window.open('Files/Netra-Resume.pdf', '_blank');
}

document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(this);

    fetch("/", {
        method: "POST",
        body: formData,
    })
    .then(() => {
        window.location.href = "Success_Page.html"; // Redirect manually
    })
    .catch((error) => console.error("Error:", error));
});