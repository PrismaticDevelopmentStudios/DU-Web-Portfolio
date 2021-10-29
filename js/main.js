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

function alertUser() {
    alert('This form is just for design practice. Your data was not saved.')
}