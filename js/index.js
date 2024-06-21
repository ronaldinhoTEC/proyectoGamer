const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ga');
            
        }
    });
});

const animationElement = document.querySelector('.animar');
observer.observe(animationElement);






const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ge');
            
        }
    });
});

const animationElement2 = document.querySelector('.image');
observer2.observe(animationElement2);





const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('game1');
            
        }
    });
});

const animationElement3 = document.querySelector('.uno');
observer3.observe(animationElement3);

const observer4 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('game2');
            
        }
    });
});

const animationElement4 = document.querySelector('.dos');
observer4.observe(animationElement4);


const observer5 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('game3');
            
        }
    });
});

const animationElement5 = document.querySelector('.tres');
observer5.observe(animationElement5);


const observer6 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('game4');
            
        }
    });
});

const animationElement6 = document.querySelector('.cuatro');
observer6.observe(animationElement6);




const observer7 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('arriba');
            
        }
    });
});

const animationElement7 = document.querySelector('.hood2');
const animationElement77= document.querySelector('.hood')
observer7.observe(animationElement7);
observer7.observe(animationElement77);



const observer8 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('abajo');
            
        }
    });
});

const animationElement8 = document.querySelector('.txt2');
const animationElement88= document.querySelector('.txt3')
observer8.observe(animationElement8);
observer8.observe(animationElement88);



const observer9 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('footerF');
            
        }
    });
});

const animationElement9 = document.querySelector('.CA');
const animationElement99 = document.querySelector('.CA1');
const animationElement999 = document.querySelector('.CA2');
const animationElement9999 = document.querySelector('.CA3');
observer9.observe(animationElement9);
observer9.observe(animationElement99);
observer9.observe(animationElement999);
observer9.observe(animationElement9999);

