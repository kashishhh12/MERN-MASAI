document.addEventListener('DOMContentLoaded', function () {

    const buttons = document.querySelectorAll('.button');
    const messages = document.querySelectorAll('.message');

    function changeColor(event) {
        event.target.style.backgroundColor = 'lightblue';
    }

    function showMessage(event) {
        const buttonId = event.target.id;
        const messageDiv = document.getElementById(`message${buttonId.charAt(buttonId.length - 1)}`);
        messageDiv.style.display = 'block';
    }

    function hideMessage(event) {
        const buttonId = event.target.id;
        const messageDiv = document.getElementById(`message${buttonId.charAt(buttonId.length - 1)}`);
        messageDiv.style.display = 'none';
    }

    function hideButton(event) {
        event.target.style.display = 'none';
    }

    buttons.forEach(button => {
        button.addEventListener('click', changeColor);
        button.addEventListener('mouseover', showMessage);
        button.addEventListener('mouseout', hideMessage);
        button.addEventListener('dblclick', hideButton);
    });
});
