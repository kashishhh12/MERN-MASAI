document.addEventListener('DOMContentLoaded', function () {

    const mainHeading = document.getElementById('main-heading');
    mainHeading.textContent = 'Updated Heading Text';

    const textContentParagraphs = document.getElementsByClassName('text-content');
    for (let paragraph of textContentParagraphs) {
        paragraph.style.color = 'blue'; 
    }

    const containerDiv = document.querySelector('.container');
    containerDiv.style.backgroundColor = '#f0f0f0'; 


    const containerParagraphs = containerDiv.querySelectorAll('p');
    for (let paragraph of containerParagraphs) {
        paragraph.textContent = 'Updated paragraph inside container.'; 
    }

    const mainImage = document.getElementById('main-image');
    mainImage.src = 'https://via.placeholder.com/300'; 
});
