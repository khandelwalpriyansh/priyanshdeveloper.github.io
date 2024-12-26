
// sidebar---------------------------------------------------------------

const sidebar = document.getElementById('sidebar');
const openButton = document.getElementById('sidebarOpen');
const closeButton = document.getElementById('sidebarClose');

// Show the sidebar when the "Open" button is clicked
openButton.addEventListener('click', () => {
    sidebar.style.display = 'block'; // Show the sidebar
    openButton.style.display = 'none'; // Hide the "Open" button
});

// Hide the sidebar when the "Close" button is clicked
closeButton.addEventListener('click', () => {
    sidebar.style.display = 'none'; // Hide the sidebar
    openButton.style.display = 'block'; // Show the "Open" button again
});


// pop up message ----------------------------------------------------------------
function submitFeedback() {
    const feedbackInput = document.getElementById('feedback').value.trim();

    if (feedbackInput === "") {
        alert("Please Write Something Before Send");
    } else {
        alert("Thank you! 🤗");
        // Optionally, clear the input field after submitting
        document.getElementById('feedback').value = "";
    }
}

// Read More ----------------------------------------------------------------


const readMore = document.getElementById('readMore')

readMore.addEventListener('click', () => {
    alert("Thank You, But Nothing To Read More.")
})



// Scroll Bars-----------------------------------------------


const progressBars = document.querySelectorAll(".progress-bar");

const animateProgressBars = () => {
    progressBars.forEach((bar) => {
        const progress = bar.dataset.progress; // Get progress value
        const circle = bar.querySelector(".progress-circle");
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isVisible) {
            circle.style.background = `conic-gradient(
                cyan ${progress}%,
                #333 ${progress}%
            )`;
        }
    });
};

// Listen to scroll event
window.addEventListener("scroll", animateProgressBars);

// Trigger animation on load (in case already in view)
animateProgressBars();



function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}
