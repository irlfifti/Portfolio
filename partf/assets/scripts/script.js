function toggleAccordion(event) {
    const header = event.currentTarget;
    const content = header.nextElementSibling;
    const button = header.querySelector('.accordion__button');

    content.classList.toggle('active');

    if (content.classList.contains('active')) {
        button.textContent = '✖';
    } else {
        button.textContent = '✔';
    }
}