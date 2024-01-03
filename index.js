// collapsible nav-bar //

let menu = document.querySelector('#menu-bars');
let navList = document.querySelector('.nav-list1');
menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navList.classList.toggle('active');

} 