const home = (function(){
    var elemMap = {};
    // set the event listeners to the sidebar items
    function listenClick(evt) {
        let id = evt.target.getAttribute("data-link-id");
        switch(id) {
            case "1": // home
                toggleClass(elemMap.container,"content-background",false);
                home.render(elemMap.container,elemMap.menu);
                break;
            case "2": // about
                toggleClass(elemMap.container,"content-background",true);
                about.render(elemMap.container);
                break;
            case "3": // resumee
                toggleClass(elemMap.container,"content-background",true);
                resumee.render(elemMap.container);
                break;
            case "4": // projects
                toggleClass(elemMap.container,"content-background",true);
                elemMap.menu.removeEventListener("click", listenClick);
                projects.render(elemMap.container,elemMap.menu);
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
    };

    function setElemMap(main,sidebar) {
        elemMap.container = main,
        elemMap.menu = sidebar
    };

    render = function(main, sidebar) {
        setElemMap(main, sidebar);
        let menu = ["Home","About","Resumeé","Projects","Contact"];
        let icons = ["fas fa-home","far fa-user","far fa-file-alt","fas fa-industry","far fa-address-card"];
        let htmlSidebar = "<ul>";
        menu.forEach(function(item, index){
            htmlSidebar += `<li><i class="${icons[index]}"></i><a href="#" data-link-id="${index+1}">${item}</a></li>`;
        });
        htmlSidebar += "</ul>";

        const htmlContent = `
            <div class="text-box">
                <h1 class="head-primary">
                    <span class="head-primary-main">Luiz Eduardo Batista</span>
                    <span class="head-primary-sub">Mining Engineer</span>
                </h1> 
            </div>`;

        toggleClass(elemMap.container,"content-background",false);
        sidebar.innerHTML = htmlSidebar;
        main.innerHTML = htmlContent;
        sidebar.addEventListener("click", listenClick, false);
    }
    return {render: render};
})();