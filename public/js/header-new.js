document.addEventListener('DOMContentLoaded', () => {

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
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJoZWFkZXItbmV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcblxyXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9faXRlbScpKSB7XHJcbiAgICAgICAgbGV0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9faXRlbScpO1xyXG4gICBcclxuICAgICAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gIFxyXG4gICAgICAgICAgICAvLyDQutC70LjQuiDQv9C+INC/0YPQvdC60YLQsNC8INC80LXQvdGOINCyINGI0LDQv9C60LVcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnbmF2X19pdGVtX2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCduYXZfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ25hdl9faXRlbV9hY3RpdmUnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCduYXZfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAvLyDRhdC+0LLQtdGAINC/0L4g0L/Rg9C90LrRgtCw0Lwg0LzQtdC90Y4g0LIg0YjQsNC/0LrQtVxyXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vINC/0YDQvtCy0LXRgNC60LAg0L3QsCDQvdCw0LvQuNGH0LjQtSDQutC70LDRgdGB0LAgYWN0aXZlXHJcbiAgICAgICAgICAgICAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnbmF2X19pdGVtX2FjdGl2ZScpKSBjb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0LXRgdC70Lgg0L7RgtC60YDRi9GA0YvRgtGFINC+0LrQvtC9INC90LXRgiwg0YXQvtCy0LXRgCDRgdGA0LDQsdCw0YLRi9Cy0LDQtdGCXHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ25hdl9faXRlbV9ob3ZlcicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ25hdl9faXRlbV9ob3ZlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KSBcclxuICAgIH1cclxufSkiXSwiZmlsZSI6ImhlYWRlci1uZXcuanMifQ==