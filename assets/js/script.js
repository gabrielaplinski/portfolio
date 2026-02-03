/*show main*/
const hiddenContent = document.querySelectorAll('.hide');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
})

hiddenContent.forEach((el) => observer.observe(el));


/*dark/light mode*/
const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    let theme = 'dark';
    if (document.body.classList.contains('light-mode')) {
        theme = 'light';
    }
    localStorage.setItem('theme', theme);
});