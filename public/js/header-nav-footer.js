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

        document.addEventListener('click', (e) => {
            let navItem = e.target.closest('.nav__item');

            if(navItem === null) {
                navItems.forEach(item => item.classList.remove('nav__item_active'));
            } else return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJoZWFkZXItbmF2LWZvb3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG5cclxuICAgIC8vINC/0L7Rj9Cy0LvQtdC90LjQtSDQvtC60L7QvSDQsiDRiNCw0L/QutC1XHJcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19pdGVtJykpIHtcclxuICAgICAgICBsZXQgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19pdGVtJyk7XHJcbiAgIFxyXG4gICAgICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgXHJcbiAgICAgICAgICAgIC8vINC60LvQuNC6INC/0L4g0L/Rg9C90LrRgtCw0Lwg0LzQtdC90Y4g0LIg0YjQsNC/0LrQtVxyXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZfX2l0ZW1fYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ25hdl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbmF2X19pdGVtX2FjdGl2ZScpKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ25hdl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC8vINGF0L7QstC10YAg0L/QviDQv9GD0L3QutGC0LDQvCDQvNC10L3RjiDQsiDRiNCw0L/QutC1XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g0L/RgNC+0LLQtdGA0LrQsCDQvdCwINC90LDQu9C40YfQuNC1INC60LvQsNGB0YHQsCBhY3RpdmVcclxuICAgICAgICAgICAgICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZfX2l0ZW1fYWN0aXZlJykpIGNvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQtdGB0LvQuCDQvtGC0LrRgNGL0YDRi9GC0YUg0L7QutC+0L0g0L3QtdGCLCDRhdC+0LLQtdGAINGB0YDQsNCx0LDRgtGL0LLQsNC10YJcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2X19pdGVtX2hvdmVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbmF2X19pdGVtX2hvdmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pIFxyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuYXZJdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnLm5hdl9faXRlbScpO1xyXG5cclxuICAgICAgICAgICAgaWYobmF2SXRlbSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbmF2X19pdGVtX2FjdGl2ZScpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHJldHVybjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vINC80L7QsdC40LvRjNC90L7QtSDQvNC10L3RjlxyXG5cdGZ1bmN0aW9uIHRvZ2dsZUJ1cmdlcigpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1vbi1ob21lJyk7XHJcbiAgICAgICAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iLW1lbnUtY292ZXInKTtcclxuICAgICAgICBjb25zdCBidG5zQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iLW1lbnVfX2J0bi1jbG9zZScpO1xyXG5cdFx0Y29uc3QgbW9iTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2ItbWVudScpO1xyXG5cdFx0Y29uc3QgYnRuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b29sYmFyLW1vYl9faXRlbV9tZW51Jyk7XHJcbiBcdFxyXG5cdFx0Y29uc3QgdG9nZ2xlQ2xhc3NlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgYnRuTWVudS5jbGFzc0xpc3QudG9nZ2xlKCd0b29sYmFyLW1vYl9faXRlbV9hY3RpdmUnKTtcclxuXHRcdFx0bW9iTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdtb2ItbWVudV9vcGVuJyk7XHJcblx0XHRcdGNvdmVyLmNsYXNzTGlzdC50b2dnbGUoJ21vYi1tZW51LWNvdmVyX2FjdGl2ZScpO1xyXG5cdFx0XHRib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21vYi1tZW51LW9wZW4nKTtcclxuXHRcdH1cclxuXHJcbiAgICAgICAgaWYgKGJ0bk1lbnUpIHtcclxuICAgICAgICAgICAgYnRuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNsYXNzZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvdmVyKSB7XHJcbiAgICAgICAgICAgIGNvdmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQ2xhc3Nlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYnRuc0Nsb3NlKSB7XHJcbiAgICAgICAgICAgIGJ0bnNDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNsYXNzZXMpO1xyXG4gICAgICAgIH1cclxuXHR9ICBcclxuICAgIHRvZ2dsZUJ1cmdlcigpO1xyXG5cclxuICAgIC8vINCw0LrQutC+0YDQtNC40L7QvVxyXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbicpKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24nKSk7XHJcblxyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEhlYWQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2hlYWQnKTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Qm9keSA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9fYm9keScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gY3VycmVudEhlYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEJvZHkuc3R5bGUubWF4SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRIZWFkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGlvbl9faGVhZF9vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCb2R5LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uX19oZWFkJykuY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uX19oZWFkX29wZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbl9fYm9keScpLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SGVhZC5jbGFzc0xpc3QuYWRkKCdhY2NvcmRpb25fX2hlYWRfb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Qm9keS5zdHlsZS5tYXhIZWlnaHQgPSBjdXJyZW50Qm9keS5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0J/QvtGP0LLQu9C10L3QuNC1INGB0L7QvtCx0YnQtdC90LjRjyDQv9C+0YHQu9C1INC+0YLQv9GA0LDQstC60Lgg0L3QvtC80LXRgNCwXHJcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsbC1iYWNrJykpIHtcclxuICAgICAgICBjb25zdCBmb3JtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGwtYmFjaycpKTtcclxuXHJcbiAgICAgICAgZm9ybXMuZm9yRWFjaCgoZm9ybSkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jYWxsLWJhY2tfX2J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCcuY2FsbC1iYWNrX193cmFwJykuY2xhc3NMaXN0LmFkZCgnY2FsbC1iYWNrX193cmFwX3NlbnQnKTtcclxuICAgICAgICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignLmNhbGwtYmFja19fdGV4dCcpLmNsYXNzTGlzdC5hZGQoJ2NhbGwtYmFja19fdGV4dF9zZW50Jyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59KSJdLCJmaWxlIjoiaGVhZGVyLW5hdi1mb290ZXIuanMifQ==