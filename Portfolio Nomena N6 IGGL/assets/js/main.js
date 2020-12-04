/*Montrer et cacher menu*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

/*Affciher Menu*/
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/*Cacher Menu*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*Enlever le menu*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))

/*defilement des liens actifs*/

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageXOffset
    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop =  current.offsetTop -50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*='+sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*='+sectionId +']').classList.remove('active')
        }
    })
}