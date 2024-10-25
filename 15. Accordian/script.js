const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Toggle content visibility
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }

        // Close other open sections
        accordionHeaders.forEach(otherHeader => {
            if (otherHeader !== header) {
                otherHeader.nextElementSibling.style.display = "none";
            }
        });
    });
});
