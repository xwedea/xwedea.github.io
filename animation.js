function goToContainer(){
    const image = document.querySelector('.coffee');
    const personalInfo = document.querySelector('#container');
    image.addEventListener('click', () => {
        personalInfo.scrollIntoView();
    })
};


function goToHeader(){
    const goUp = document.querySelector('.go-up');
    const header = document.querySelector('header');

    goUp.addEventListener('click', () => {
        header.scrollIntoView();
    });
};

function slider(){
    const aboutMeButton = document.querySelector('.about-me');
    const portfolioButton = document.querySelector('.portfolio');
    const aboutMePage = document.querySelector('#personal-info');
    const portfolioPage = document.querySelector('#portfolio');

    aboutMeButton.addEventListener('click', () => {
        aboutMePage.setAttribute('style',"transform: translateX(0)");
        portfolioPage.setAttribute('style',"transform: translateX(100%)");
    });
    portfolioButton.addEventListener('click', () => {
        aboutMePage.setAttribute('style',"transform: translateX(-100%)");
        portfolioPage.setAttribute('style',"transform: translateX(-100%)");
    });
};




function scrollEvents(){
    goToContainer();
    goToHeader();
    slider();
};


scrollEvents();

// const image = document.querySelector('.coffee');
// const personalInfo = document.querySelector('#personal-info');
// image.addEventListener('click', () => {
// personalInfo.scrollIntoView();
// });