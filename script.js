const navItems = document.querySelectorAll('.header__nav-item');
const dotList = document.querySelectorAll('.slider-dot');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');


const cityElement = document.getElementById('city');
const descriptionElement = document.getElementById('description');
const imageElement = document.getElementById('projectimage');
const areaElement = document.getElementById('area');
const timeElement = document.getElementById('time');

// Первый элемент имеет активный класс при загрузке
if (navItems.length > 0 && dotList.length > 0) {
    navItems[0].classList.add('active');
    dotList[0].classList.add('dot-active');
}

// Функция для удаления активных классов
function removeActiveClasses() {
    navItems.forEach(item => item.classList.remove('active'));
    dotList.forEach(dot => dot.classList.remove('dot-active'));
}

// Добавление обработчиков событий для меню
navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        removeActiveClasses();
        item.classList.add('active');
        dotList[index].classList.add('dot-active');
        updateDetails();
    });
});

// Добавление обработчиков событий для точек
dotList.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        removeActiveClasses();
        navItems[index].classList.add('active');
        dot.classList.add('dot-active');
        updateDetails();
    });
});

// Добавление обработчиков событий для стрелок
arrowLeft.addEventListener('click', () => {
    const activeIndex = Array.from(navItems).findIndex(item => item.classList.contains('active'));
    const nextIndex = activeIndex === 0 ? navItems.length - 1 : activeIndex - 1;
    
    removeActiveClasses();
    navItems[nextIndex].classList.add('active');
    dotList[nextIndex].classList.add('dot-active');
    updateDetails();
});

arrowRight.addEventListener('click', () => {
    const activeIndex = Array.from(navItems).findIndex(item => item.classList.contains('active'));
    const nextIndex = activeIndex === navItems.length - 1 ? 0 : activeIndex + 1;
    
    removeActiveClasses();
    navItems[nextIndex].classList.add('active');
    dotList[nextIndex].classList.add('dot-active');
    updateDetails();
});


function updateDetails() {
    const activeIndex = Array.from(navItems).findIndex(item => item.classList.contains('active'));
    const project = Details[activeIndex];
    cityElement.textContent = project.city;
    descriptionElement.textContent = project.description;
    imageElement.src = project.projectimage;
    areaElement.textContent = project.area;
    timeElement.textContent = project.time;
}


 