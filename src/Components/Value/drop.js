document.addEventListener("DOMContentLoaded", function() {
    const icon = document.querySelector(".dropdown-icon");
    const dropdownContent = document.querySelector(".dropdown-content");

    icon.addEventListener("click", function() {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
});
