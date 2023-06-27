document.addEventListener('DOMContentLoaded', () => {

    // появление окон в шапке
    if(document.querySelector('.nav__item')) {
        let navItems = document.querySelectorAll('.nav__item');
   
        navItems.forEach(item => {
            let count = 0;
  
            // клик по пунктам меню в шапке
            item.addEventListener('click', () => {
                if (item.classList.contains('nav__item_active')) {
                    item.classList.remove('nav__item_active');
                } else {
                    navItems.forEach(item => item.classList.remove('nav__item_active'));
                    item.classList.add('nav__item_active');
                }
            })

            // ховер по пунктам меню в шапке
            item.addEventListener('mouseover', () => {
                // проверка на наличие класса active
                navItems.forEach(item => {
                    if (item.classList.contains('nav__item_active')) count += 1;
                });

                // если открырытх окон нет, ховер срабатывает
                if (count === 0) {
                    item.classList.add('nav__item_hover');

                    item.addEventListener('mouseout', () => {
                        item.classList.remove('nav__item_hover');
                    })
                } 

                count = 0;
            })
        }) 
    }

    // мобильное меню
	function toggleBurger() {
        const body = document.querySelector('.common-home');
        const cover = document.querySelector('.mob-menu-cover');
        const btnsClose = document.querySelector('.mob-menu__btn-close');
		const mobMenu = document.querySelector('.mob-menu');
		const btnMenu = document.querySelector('.toolbar-mob__item_menu');
 	
		const toggleClasses = () => {
            btnMenu.classList.toggle('toolbar-mob__item_active');
			mobMenu.classList.toggle('mob-menu_open');
			cover.classList.toggle('mob-menu-cover_active');
			body.classList.toggle('mob-menu-open');
		}

        if (btnMenu) {
            btnMenu.addEventListener('click', toggleClasses);
        }

        if (cover) {
            cover.addEventListener('click', toggleClasses);
        }

        if (btnsClose) {
            btnsClose.addEventListener('click', toggleClasses);
        }
	}  
    toggleBurger();

    // аккордион
    if(document.querySelector('.accordion')) {
        const items = Array.from(document.querySelectorAll('.accordion'));

        items.forEach((item) => {
            item.addEventListener('click', (e) => {
                let currentHead = item.querySelector('.accordion__head');
                let currentBody = item.querySelector('.accordion__body');

                if (e.target === currentHead) {
                    if (currentBody.style.maxHeight) {
                        currentHead.classList.remove('accordion__head_open');
                        currentBody.style.maxHeight = null;
                    } else {
                        items.forEach((item) => {
                            item.querySelector('.accordion__head').classList.remove('accordion__head_open');
                            item.querySelector('.accordion__body').style.maxHeight = null;
                        })

                        currentHead.classList.add('accordion__head_open');
                        currentBody.style.maxHeight = currentBody.scrollHeight + 'px';
                    }
                }
            });
        });
    }

    // Появление сообщения после отправки номера
    if(document.querySelector('.call-back')) {
        const forms = Array.from(document.querySelectorAll('.call-back'));

        forms.forEach((form) => {
            form.querySelector('.call-back__btn').addEventListener('click', () => {
                form.querySelector('.call-back__wrap').classList.add('call-back__wrap_sent');
                form.querySelector('.call-back__text').classList.add('call-back__text_sent');
            })
        });
    }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJoZWFkZXItbmV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcblxyXG4gICAgLy8g0L/QvtGP0LLQu9C10L3QuNC1INC+0LrQvtC9INCyINGI0LDQv9C60LVcclxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2l0ZW0nKSkge1xyXG4gICAgICAgIGxldCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2l0ZW0nKTtcclxuICAgXHJcbiAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICBcclxuICAgICAgICAgICAgLy8g0LrQu9C40Log0L/QviDQv9GD0L3QutGC0LDQvCDQvNC10L3RjiDQsiDRiNCw0L/QutC1XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ25hdl9faXRlbV9hY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbmF2X19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCduYXZfX2l0ZW1fYWN0aXZlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2X19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLy8g0YXQvtCy0LXRgCDQv9C+INC/0YPQvdC60YLQsNC8INC80LXQvdGOINCyINGI0LDQv9C60LVcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDQv9GA0L7QstC10YDQutCwINC90LAg0L3QsNC70LjRh9C40LUg0LrQu9Cw0YHRgdCwIGFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ25hdl9faXRlbV9hY3RpdmUnKSkgY291bnQgKz0gMTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINC10YHQu9C4INC+0YLQutGA0YvRgNGL0YLRhSDQvtC60L7QvSDQvdC10YIsINGF0L7QstC10YAg0YHRgNCw0LHQsNGC0YvQstCw0LXRglxyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCduYXZfX2l0ZW1faG92ZXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCduYXZfX2l0ZW1faG92ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkgXHJcbiAgICB9XHJcblxyXG4gICAgLy8g0LzQvtCx0LjQu9GM0L3QvtC1INC80LXQvdGOXHJcblx0ZnVuY3Rpb24gdG9nZ2xlQnVyZ2VyKCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbW9uLWhvbWUnKTtcclxuICAgICAgICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2ItbWVudS1jb3ZlcicpO1xyXG4gICAgICAgIGNvbnN0IGJ0bnNDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2ItbWVudV9fYnRuLWNsb3NlJyk7XHJcblx0XHRjb25zdCBtb2JNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYi1tZW51Jyk7XHJcblx0XHRjb25zdCBidG5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvb2xiYXItbW9iX19pdGVtX21lbnUnKTtcclxuIFx0XHJcblx0XHRjb25zdCB0b2dnbGVDbGFzc2VzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBidG5NZW51LmNsYXNzTGlzdC50b2dnbGUoJ3Rvb2xiYXItbW9iX19pdGVtX2FjdGl2ZScpO1xyXG5cdFx0XHRtb2JNZW51LmNsYXNzTGlzdC50b2dnbGUoJ21vYi1tZW51X29wZW4nKTtcclxuXHRcdFx0Y292ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbW9iLW1lbnUtY292ZXJfYWN0aXZlJyk7XHJcblx0XHRcdGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbW9iLW1lbnUtb3BlbicpO1xyXG5cdFx0fVxyXG5cclxuICAgICAgICBpZiAoYnRuTWVudSkge1xyXG4gICAgICAgICAgICBidG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQ2xhc3Nlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY292ZXIpIHtcclxuICAgICAgICAgICAgY292ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVDbGFzc2VzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChidG5zQ2xvc2UpIHtcclxuICAgICAgICAgICAgYnRuc0Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQ2xhc3Nlcyk7XHJcbiAgICAgICAgfVxyXG5cdH0gIFxyXG4gICAgdG9nZ2xlQnVyZ2VyKCk7XHJcblxyXG4gICAgLy8g0LDQutC60L7RgNC00LjQvtC9XHJcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uJykpIHtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbicpKTtcclxuXHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SGVhZCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9faGVhZCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRCb2R5ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19ib2R5Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBjdXJyZW50SGVhZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Qm9keS5zdHlsZS5tYXhIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEhlYWQuY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uX19oZWFkX29wZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEJvZHkuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2hlYWQnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb25fX2hlYWRfb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19ib2R5Jykuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRIZWFkLmNsYXNzTGlzdC5hZGQoJ2FjY29yZGlvbl9faGVhZF9vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCb2R5LnN0eWxlLm1heEhlaWdodCA9IGN1cnJlbnRCb2R5LnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQn9C+0Y/QstC70LXQvdC40LUg0YHQvtC+0LHRidC10L3QuNGPINC/0L7RgdC70LUg0L7RgtC/0YDQsNCy0LrQuCDQvdC+0LzQtdGA0LBcclxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxsLWJhY2snKSkge1xyXG4gICAgICAgIGNvbnN0IGZvcm1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsbC1iYWNrJykpO1xyXG5cclxuICAgICAgICBmb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignLmNhbGwtYmFja19fYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jYWxsLWJhY2tfX3dyYXAnKS5jbGFzc0xpc3QuYWRkKCdjYWxsLWJhY2tfX3dyYXBfc2VudCcpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCcuY2FsbC1iYWNrX190ZXh0JykuY2xhc3NMaXN0LmFkZCgnY2FsbC1iYWNrX190ZXh0X3NlbnQnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pIl0sImZpbGUiOiJoZWFkZXItbmV3LmpzIn0=