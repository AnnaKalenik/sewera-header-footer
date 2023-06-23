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