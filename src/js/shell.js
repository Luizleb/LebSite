const shell = (function(){
    let stateMap = {};
    var elemMap = {};

    // set the event listeners at the sidebar items
    function listenClick(evt) {
        const main =  document.querySelector("main");
        let id = evt.target.getAttribute("data-link-id");
        switch(id) {
            case "1":
                toggleClass(main,"content-background",false);
                home.render(elemMap.container);
                break;
            case "2":
                toggleClass(main,"content-background",true);
                about.render(elemMap.container);
                break;
            case "3":
                toggleClass(main,"content-background",true);
                resumee.render(elemMap.container);
                break;
        }
    };

    // toggle the class if the class already exists (true) or if it not exists (false)
    function toggleClass(elem, classname, tag) {
        if(tag) {
            if(elem.classList.contains(classname)) elem.classList.toggle(classname);
        } else {
            if(!elem.classList.contains(classname)) elem.classList.toggle(classname);
        }
    }

    function setElemMap() {
        let container = stateMap.container;
        elemMap = {container: container};
    }

    function init(elem) {
        stateMap.container = document.querySelector(elem);
        setElemMap();
        home.render(elemMap.container);
        document.querySelector(".content-sidebar").addEventListener("click", listenClick, false);
    };

    return {init:init};
})();