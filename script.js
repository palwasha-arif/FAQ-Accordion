const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item, index) => {
    const questionHeader = item.querySelector('.faq-question');
    const answerParagraph = item.querySelector('.faq-answer');
    const icon = item.querySelector('.icon');

    questionHeader.addEventListener('click', () => {
        
        answerParagraph.classList.toggle('hidden');

        const isExpanded = !answerParagraph.classList.contains('hidden');

        if (isExpanded) {
            icon.innerText = '-';
            console.log(`FAQ item ${index + 1} opened`);
        } else {
            icon.innerText = '+';
            console.log(`FAQ item ${index + 1} closed`);
        }
    });
});