const hiddenContent = document.querySelectorAll('.hide');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
})

hiddenContent.forEach((el) => observer.observe(el));