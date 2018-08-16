const home = (function(){
    render = function(elem) {
        const html = `
            <div class="text-box">
                <h1 class="head-primary">
                    <span class="head-primary-main">Luiz Eduardo Batista</span>
                    <span class="head-primary-sub">Mining Engineer</span>
                </h1> 
            </div>`;
        return elem.innerHTML = html;
    }
    return {render: render};
})();