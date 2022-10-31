/* Imports */

/* Get DOM Elements */
const button1 = document.getElementById('button-1');
const img1 = document.querySelector('#img-1');
const img2 = document.querySelector('#img-2');
const img3 = document.querySelector('#img-3');

/* State */

/* Events */
button1.addEventListener('click', () => {
    resetPearls();
    // generate a random location for the pearl (number between 1 and 3)
    const pearlLocation = Math.ceil(Math.random() * 3);
    console.log('pearlLocation', pearlLocation);
    // add reveal class to img that lines up with random location (if..else)
    if (pearlLocation === 1) {
        img1.classList.add('reveal');
    } else if (pearlLocation === 2) {
        img2.classList.add('reveal');
    } else {
        img3.classList.add('reveal');
    }
});

function resetPearls() {
    img1.classList.remove('reveal');
    img2.classList.remove('reveal');
    img3.classList.remove('reveal');
}
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
