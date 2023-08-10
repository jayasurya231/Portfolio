// showing toggle

const showMenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId);
    const nav=document.getElementById(navId);

    if(toggleId && navId){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        });
    }
}
showMenu('nav_toggle','nav_menu');

const navLink=document.querySelectorAll('.nav_link');

function linkaction(){

    const navMenu=document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n=>n.addEventListener('click',linkaction))
