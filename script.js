// Hamburger Toggle
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// Qualification Toggle
const menuBtns = document.querySelectorAll('.menu-btn');
const qualiItems = document.querySelectorAll('.quali-item');

let activeBtn = "experience";

showMenu(activeBtn);

menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showMenu(btn.id);
        btn.classList.add('active-btn');
    });
});

function resetActiveBtn(){
    menuBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function showMenu(newMenuBtn){
    activeBtn = newMenuBtn;
    qualiItems.forEach((item) => {
        if(item.classList.contains(activeBtn)){
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    });
}

// Contact Section
$(function() {
    $(".form-control").on('focus', function(){

        $(this).parents(".form-group").addClass('focused');

    });

    $(".form-control").on('blur', function(){

        $(this).parents(".form-group").removeClass('focused');

    });

});

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {

        status.classList.add("success");
        status.innerHTML = "Thanks your message has been sent successfully! I will get back to you shortly.";
        
        form.reset();
      }).catch(error => {
        status.classList.add("error");
        status.innerHTML = "Oops! Something went wrong, pls try again later";
      });
    }
    form.addEventListener("submit", handleSubmit);


    // Dark Mode
    let theme = document.getElementById('theme');
    let icon = document.getElementById('icon');
    let cta = document.querySelector('.cta1');
    

    
    if(localStorage.getItem('theme') == 'null') {
        localStorage.setItem('theme', 'light');
    }

    let localData = localStorage.getItem('theme');

    if(localData == 'light') {
        theme.style.background = '#000';
        cta.style.color = '#000';
        icon.src = 'https://img.icons8.com/bubbles/100/000000/partly-cloudy-night.png';
        document.body.classList.remove('dark-mode');
    }
    else if(localData == 'dark'){
        theme.style.background = '#fff';
        cta.style.color = '#fff';
        icon.src =  'https://img.icons8.com/bubbles/100/000000/sun.png';
        document.body.classList.add('dark-mode');

    }



    theme.onclick = function() {
        document.body.classList.toggle('dark-mode');
        theme.style.background = '#fff';
        cta.style.color = '#fff';
        
        if(document.body.classList.contains('dark-mode')) {
            icon.src = 'https://img.icons8.com/bubbles/100/000000/sun.png';
            localStorage.setItem('theme', 'dark');
            theme.style.background = '#fff';
            cta.style.color = '#fff';
        }
        else {
            icon.src = 'https://img.icons8.com/bubbles/100/000000/partly-cloudy-night.png';
            localStorage.setItem('theme', 'light');
            theme.style.background = '#000';
            cta.style.color = '#000';
        }
    };

    