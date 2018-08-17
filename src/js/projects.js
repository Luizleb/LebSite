const projects = (function(){
    var elemMap = {};
    // set the event listeners at the sidebar items
    function listenClick(evt) {
        let id = evt.target.getAttribute("data-link-id")*1;
        const data = model.getProjectInfo(id);
        if(id < 6) {
            let html = `
                <h2>${data.name}</h2>
                <h4>${data.company}</h4>
                <h4>${data.year}</h4>
                <p>${data.description}</p>
                <div>
            `;
            data.images.forEach(function(image){
                html += `<img src="./src/images/${image}">`;
            });
            html += `</div`;
            elemMap.container.innerHTML = html;
        } else {
            elemMap.menu.removeEventListener("click",listenClick);
            home.render(elemMap.container,elemMap.menu);
        }
    };

    function setElemMap(main,sidebar) {
        elemMap.container = main,
        elemMap.menu = sidebar
    };

    render = function(main, sidebar) {
        setElemMap(main, sidebar);
        let menu = model.getProjectNames();
        let htmlSidebar = "<ul>";
        menu.forEach(function(item, index){
            htmlSidebar += `<li><a href="#" data-link-id="${index+1}">${item}</a></li>`;
        });
        htmlSidebar += `<li><a href="#" data-link-id="${menu.length+1}">Home</a></li></ul>`;

        const htmlContent = `<h2>Test projects</h2>`;

        sidebar.innerHTML = htmlSidebar;
        main.innerHTML = htmlContent;
        sidebar.addEventListener("click", listenClick, false);
    }
    return {render: render};
})();