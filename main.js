const para = document.getElementById("home").firstElementChild;
const words = para.innerHTML.split(" ");
para.innerHTML = '';

words.forEach((word, index) => {
    const wordElement = document.createElement('span');
    wordElement.className = 'word';
    wordElement.textContent = word + ' ';
    para.appendChild(wordElement);

    setTimeout(() => {
        wordElement.classList.add('visible');
    }, index * 200);
});

const sels = document.querySelectorAll('.head');
sels.forEach(sel => {
    sel.addEventListener('click', () => {
        const content = sel.nextElementSibling;
        const isDisplayed = content.style.display === "block";

        content.style.opacity = isDisplayed ? '0' : '1';
        content.style.display = isDisplayed ? "none" : "block";
        if (!isDisplayed) {
            content.classList.add('active');
            setTimeout(() => {
                content.classList.remove('active');
            }, 500);
            content.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                content.style.transform = 'translateY(0)';
            }, 10);
        }
    });
});

// For Google Form
const contactButton = document.getElementById('contact-button');
const contactForm = document.getElementById('contact-form');

contactButton.addEventListener('click', () => {
    const isDisplayed = contactForm.style.display === 'block';
    contactForm.style.display = isDisplayed ? 'none' : 'block';
    if (!isDisplayed) {
        contactForm.style.opacity = '0';
        contactForm.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            contactForm.style.opacity = '1';
        }, 10); 
    }
});

