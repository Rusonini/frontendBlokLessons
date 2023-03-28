window.addEventListener('DOMContentLoaded', ()=>{

//tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
            tabsContent = document.querySelectorAll('.tabheader'),
            tabsParedt = document.querySelector('.tabheader');

    function hideTabContent() {
        tabsContent.forEach(item=>{
            item.style.display = 'none';
        });

        tabs.forEach (item =>{
            item.classList.remove('tabheader_item_active');
        });
    }
    function showTabContent(i = 0){
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader_item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParedt.addEventListener('click', (event)=>{
        const target = event.target;
        if(target && target.classList.contains('tabheader_item')){
            tabs.forEach((item, i)=>{
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

//timer
    const timeEnd = '2023-11-20';
    function getTimeRemaining(endtime) {

        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor(t / (1000 * 60 * 60) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        const result = {
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds,
        };

        return result;
    }

    function setClock(selector, endtime) {
        const   timer = document.querySelector(selector),
                days = document.querySelector('#days'),
                hours = document.querySelector('#hours'),
                minutes = document.querySelector('#minutes'),
                seconds = document.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);
                
        updateClock();

        function updateClock(){
            
            const t = getTimeRemaining(endtime);
                days.innerHTML = t.days;
                hours.innerHTML = t.hours;
                minutes.innerHTML = t.minutes;
                seconds.innerHTML = t.seconds;
            if (t.total<=0){
                clearInterval(timeInterval);
            }
        }
    }
    
    setClock('.timer', timeEnd);

//modal
    const modalTriger = document.querySelectorAll('[data-modal]'),
            modal = document.querySelector('.modal'),
            modalClose = document.querySelector('[data-close]');

    modalTriger.forEach(btn =>{
        btn/addEventListener('click', ()=>{
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden'
        }); 
    });
    modalClose.addEventListener('click', ()=>{
        modal.classList.add('shide');
        modal.classList.remove('show');
        document.body.style.overflow = ''
    });

    modal.addEventListener('click', (e)=>{
        if(e.target === modal){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
    document.addEventListener('keydown', (e)=>{
        if(e.code === 'Escape'){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
    //slides

    const slides = document.querySelectorAll('.offer__slide'),
    prev = document.querySelector('.offer__prev'),
    next = document.querySelector('.offer__next'),
    total = document.querySelector('#total'),
    current = document.querySelector('#current');
    

    let slideIndex = 1;

    showSlides(slideIndex);

    if(slides.lenght < 10){
        total.textContent = `0${slides.length}`;
    }else{
        total.textContent = slides.length;
    }

    function showSlides(n){
        if(n > slides.length){
            slideIndex = 1;
        }
        if(n < 1){
            slideIndex = slides.length;
        }
        slides.forEach(item => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'block';
        if(slides.length < 10){
            current.textContent = `0${slideIndex}`;
        }else{
            current.textContent = slides.length;
        }
    }
    function plusSlides(n){
        showSlides(slideIndex += n);
    }
    prev.addEventListener('click', ()=>{
        plusSlides(-1);
    });
    next.addEventListener('click', ()=>{
        plusSlides(1);
    });
});
