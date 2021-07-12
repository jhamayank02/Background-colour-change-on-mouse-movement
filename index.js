let body = document.getElementsByTagName('body')[0];

document.addEventListener('mousemove', (e) => {
    // rgb(255, 255, 255) --> In rgb() we can give values in between 0 to 255
    // so in third field you can give any constant value or you can give random value with Math.random()
    // If you give random value in third field then the colour change takes place more quickly.
    // In order to see slow colour change you can give the third field a constant value
    
    // let randomVal = Math.floor(Math.random() * 255);

    let valX = e.clientX;
    let valY = e.clientY;

    body.style.background = `rgb(${valX}, ${valY}, 100`;
    // body.style.background = `rgb(${valX}, ${valY}, ${randomVal}`;
});