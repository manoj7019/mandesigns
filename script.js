let nav = document.querySelector('nav');
let items = document.querySelectorAll('a');
items.forEach(item => {
    item.onclick = () => {
        let oldActive = nav.querySelector('a.active');
        if (oldActive) oldActive.classList.remove('active');
        item.classList.add('active');
        nav.style.setProperty('--position-x-active', item.offsetLeft + 'px');
    }
})

let itemActive = nav.querySelector('a.active');
if(itemActive) nav.style.setProperty('--position-x-active', itemActive.offsetLeft + 'px');
