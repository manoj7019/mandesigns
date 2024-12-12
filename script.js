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

// Loader

window.addEventListener('load', ()=> {
    const loader = document.querySelector('.loader');

    loader.classList.add('loader-hidden');

    loader.addEventListener('transitionend', ()=> {
        document.body.removeChild('loader');
    })
})

// Page Load
window.addEventListener('pageshow', (event) => {
    // Check if the event is triggered by page restore from the cache
    if (event.persisted) {
      window.location.reload(); // Reload the page
    }
});
