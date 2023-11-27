window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

// Sidebar
var header = document.getElementById('header')
var show_sidebar = false;
function toggleSideBar() {
    var navigation_header = document.getElementById('navigation_header');
    show_sidebar = !show_sidebar;
    if (show_sidebar) {
        navigation_header.style.animationName = 'showSidebar';
        navigation_header.style.marginLeft = '0px';
        document.body.style.overflow = 'hidden';
    } else {
        navigation_header.style.animationName = 'hideSidebar';
        navigation_header.style.marginLeft = '-80%';
        document.body.style.overflow = 'visible';
    }
}

function accordion(menuID){
    var menu = document.getElementById(menuID)
    let w = window.innerWidth;
    if(w < 1023){
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block'
    }
    else{
        menu.style.display = 'none'
    }
}
function title_bg(titleID) {
    let title = document.getElementById(titleID);
    let w = window.innerWidth;
    if (w < 1023){
        title.style.backgroundColor = (title.style.backgroundColor === 'rgb(197, 197, 197)') ? '#3B7D36' : '#c5c5c5';
    }
}

//enviar Gmail
function enviarEmail() {
    const destinatario = 'missaoambiental.org@gmail.com'
    const assunto = encodeURIComponent('Assunto do e-mail')
    const link = `https://mail.google.com/mail/?view=cm&to=${destinatario}&su=${assunto}&body=`

    window.open(link);
}


//enviar WhatsApp
function enviarWhatsapp() {
    const numeroTelefone = '5511966776565';
    const link = `https://wa.me/${numeroTelefone}?text=`;

    window.open(link);
}