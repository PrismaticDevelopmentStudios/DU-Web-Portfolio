function hi() {
    alert('Hi!');
    console.log('hi');
    window.scrollTo(0, 0);
}

function toTop() {
    window.scrollTo(0, 0);
    console.log('BTT')
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
    console.log('close');
}

function alertMessage() {
    alert('Close the modal without being able to submit the form because I have not added an Api.');
}