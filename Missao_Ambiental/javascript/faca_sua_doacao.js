window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100)
})

// Sidebar

var header = document.getElementById('header')
var show_sidebar = false
function toggleSideBar(){
    var navigation_header = document.getElementById('navigation_header')
    show_sidebar = !show_sidebar
    if (show_sidebar){
        navigation_header.style.animationName = 'showSidebar'
        navigation_header.style.marginLeft = '0px' 
        document.body.style.overflow = 'hidden'
        
    }
    else{
        navigation_header.style.marginLeft = '-80%'
        document.body.style.overflow = 'visible'
    }
}
function accordion(menuID) {
    var menu = document.getElementById(menuID);
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    menu.style.backgroundColor = (menu.style.display === 'block') ? '' : '#c5c5c5';
}
function title_bg(titleID) {
    let title = document.getElementById(titleID);
    title.style.backgroundColor = (title.style.backgroundColor === 'rgb(197, 197, 197)') ? '#3B7D36' : '#c5c5c5';
}