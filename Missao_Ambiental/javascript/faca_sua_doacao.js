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
        navigation_header.style.marginLeft = '-240px'
        document.body.style.overflow = 'visible'
    }
}

