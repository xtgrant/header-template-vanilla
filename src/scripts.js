// components
let cmp = {};

// nav component
cmp.nav = (()=> {

    function expandNavMenu(e){
        e.preventDefault();
        let menu = document.querySelector('.nav-container');
        menu.classList.toggle('expand');
    }
    function addActiveClass(e){
        let itemsSelected = document.querySelector('.nav-list .active');
        if(itemsSelected){
          itemsSelected.classList.remove('active');
        }
        e.currentTarget.classList.add('active');
    }
    function addEventToNavItems(el){
        el.addEventListener('click', addActiveClass);
    }

    let navCaretClick = () =>{
        document.querySelector('.action-arrow').addEventListener('click', expandNavMenu);
    }
    let navItemClick = () =>{
        [].map.call(document.querySelectorAll('.nav-link'), addEventToNavItems);
    }

    return {
        init: () => {
             navCaretClick();
             navItemClick();
        }
    };
})();

// user component
cmp.user = (()=> {

    function expandUserMenu(e){
        e.preventDefault();
        let menu = document.querySelector('.user-container');
        menu.classList.toggle('expand');
    }

    let userProfileClick = () =>{
        document.querySelector('.user-profile').addEventListener('click', expandUserMenu);
    }

    return {
        init: () => {
             userProfileClick();
        }
    };
})();


// inits
cmp.nav.init();
cmp.user.init();
