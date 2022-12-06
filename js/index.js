const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')
const navBtn = document.querySelector('[data-nav-button]')


// Nav toggle menu
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        
    })
})

// Nav button animation toggle

navBtn.addEventListener('click', () => {
    const isOpened = navBtn.getAttribute('aria-expanded') === 'true'
    
    if(isOpened){
        navBtn.setAttribute('aria-expanded', 'false')
    } else {
        navBtn.setAttribute('aria-expanded','true')
    }

}
)


