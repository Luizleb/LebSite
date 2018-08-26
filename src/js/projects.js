const projects = (function(){
    var elemMap = {};
    // set the event listeners at the sidebar items
    function listenClick(evt) {
        let id = evt.target.getAttribute("data-link-id")*1;
        const data = model.getProjectInfo(id);
        if(id < 6) {
            let html = `
                <h2 class="projects-name">${data.name}</h2>
                <h4 class="projects-company">${data.company} - ${data.year}</h4>
                <p class="projects-description">${data.description}</p>
                <div class="gallery">
            `;
            data.images.forEach(function(image){
                html += `<figure class="gallery-item"><img src="./src/images/${image}" class="gallery-photo"></figure>`;
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

        const htmlContent = `<h2 class="projects-home">A brief description of the main Projects I took part along my carrer.</h2>`;

        sidebar.innerHTML = htmlSidebar;
        main.innerHTML = htmlContent;
        sidebar.addEventListener("click", listenClick, false);
    }
    return {render: render};
})();