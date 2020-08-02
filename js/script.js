window.addEventListener('DOMContentLoaded', function () {

    'use strict'
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    let deadline = '2020-09-01';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / 1000 / 60 / 60);
        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById('timer');

        let hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000);


        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = formatClock(t.hours);
            minutes.textContent = formatClock(t.minutes);
            seconds.textContent = formatClock(t.seconds);

            if (t.total <= 0) {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval);
            }
        }

        function formatClock(number) {
            if (number <=9 && number >= 0){
                return '0' + number;
            }else {
                return number;
            }
        }

    }

    setClock('timer', deadline);
})
;
