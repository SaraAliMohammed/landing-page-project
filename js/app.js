//define global variables

const pageSections = [...document.getElementsByTagName('section')]; //get all sections in the page
let navList = "";

// build the nav by loop through all pageSections and for every section add link in the nav for it
pageSections.forEach(function(sec){
    navList += '<li><a class="menu__link">'+ sec.getAttribute('data-nav') +'</a></li>';
})
document.getElementById('navbar__list').innerHTML = navList;

// Add scroll event to document and add class 'active' to the section that is on top of viewport to highlight active
document.addEventListener('scroll', function(){
    //loop all sections to find which one is on top of viewport
    pageSections.forEach(function(sec){
        if(sec.getBoundingClientRect().top >= 0 && sec.getBoundingClientRect().top < (0.8 * window.innerHeight)){
            sec.classList.add('activeClass'); //highlight active section by adding activeClass class
            const dataNav = sec.getAttribute('data-nav');
            //loop through all links in navbar to find which one is active
            document.querySelectorAll('.navbar__menu li').forEach(function(link){
                if(link.innerText == dataNav)
                    link.classList.add('activeLink'); //highlight active link by adding activeLink class
                else if (link.classList.contains('activeLink'))
                    link.classList.remove('activeLink'); //remove active class frpm previous active link
            });
        }else{
            //remove active class frpm previous active section
            if(sec.classList.contains('activeClass'))
                sec.classList.remove('activeClass');
        }
    })
});

// Scroll to section using scrollIntoView event when click on section link in the nav
document.querySelectorAll('a.menu__link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('section[data-nav = "'+ this.innerText + '"]').scrollIntoView({
            behavior: 'smooth'
        });
    });
});


