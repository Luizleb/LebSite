const about = (function(){
    render = function(elem) {
        const html = `
            <div class="about">
                <h1> This is the About page</h1> 
            </div>`;
        return elem.innerHTML = html;
    }
    return {render: render};
})();