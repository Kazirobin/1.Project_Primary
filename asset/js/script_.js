// navbar link hover effect
const activeLink = document.querySelectorAll('.navbar_menu_item_link');


for(let i=1;i<activeLink.length;i++){
    activeLink[i].addEventListener('mouseover',() => {activeLink[i].classList.add('active')})
    activeLink[i].addEventListener('mouseout',() => {activeLink[i].classList.remove('active')})
}

//  navbar bar on click 
const menu = document.querySelector('.navbar_menu');
const bar =document.querySelector('.navbar_bar');
bar.addEventListener('click',() => {
    menu.classList.toggle('active')
})