document.addEventListener('DOMContentLoaded', () => {

// waiyan

    const menuLinks = document.querySelectorAll('.menu-link');
    const menus = document.querySelectorAll('.menu');
    const questItems = document.querySelectorAll('.quest-item');
    const imageSecs = document.querySelectorAll('.image-sec');
    const depList = document.getElementById('dep-list');
    const personInfos = document.getElementById('person-infos');
    const dots = document.querySelectorAll('.dot');

    for(let i=0; i<menuLinks.length; i++) {

            menuLinks[i].addEventListener('click', (e) => {
            e.preventDefault();
            
            for(let j=0; j<menus.length; j++) {
                if(i === j) {
                    menus[j].classList.remove('hidden');
                    menuLinks[j].classList.add('text-2xl');
                    menuLinks[j].classList.remove('text-gray');
                    menuLinks[j].classList.add('text-blue');
                    imageSecs[j].classList.remove('hidden');
                    depList.classList.add(`active${j}`);
                } else {
                    menus[j].classList.add('hidden');
                    menuLinks[j].classList.remove('text-2xl');
                    menuLinks[j].classList.remove('text-blue');
                    menuLinks[j].classList.add('text-gray');
                    imageSecs[j].classList.add('hidden');
                    depList.classList.remove(`active${j}`);
                }
            }
        })
    }

    for(let i=0; i<questItems.length; i++) {

        let title = questItems[i].getElementsByClassName('title')[0];
        let text = questItems[i].getElementsByClassName('text')[0];

        title.addEventListener('click', (e) => {
            e.preventDefault();

            if(text.classList.contains('hidden')) {
                text.classList.remove('hidden');
                questItems[i].classList.add('bg-blue');
                title.classList.remove('text-deepBlue');
                title.classList.add('text-white');
                title.classList.remove('hover:text-blue')
            } else {
                text.classList.add('hidden');
                questItems[i].classList.remove('bg-blue');
                title.classList.remove('text-white');
                title.classList.add('text-deepBlue');
                title.classList.add('hover:text-blue');
            }
        })
    }

    const allInfos = personInfos.children.length;
    let currentIndex = 0;

    dots[currentIndex].classList.add('bg-blue');

    function slideShow(index) {
        personInfos.style.transform = `translateX(-${index * 100}%)`;
        dots[index].classList.add('bg-blue');
    }

    setInterval(() => {
        dots[currentIndex].classList.remove('bg-blue');
        currentIndex = (currentIndex + 1) % allInfos;
        slideShow(currentIndex);
    }, 4000);

    for(let i=0; i<dots.length; i++) {
        dots[i].addEventListener('click', (e) => {
            e.preventDefault();
            dots[currentIndex].classList.remove('bg-blue');
            currentIndex = i;
            slideShow(currentIndex);
            setInterval;
        })
    }

// waiyan

})

