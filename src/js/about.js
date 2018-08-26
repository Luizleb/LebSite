const about = (function(){
    render = function(elem) {
        const html = `
            <div class="about">
                <p> I am a mining engineer and have been working on iron ore mining projects for 32 years, participating mostly in the areas of cost planning and control, economic valuation and as Project Manager.</p> 
            </div>`;
        return elem.innerHTML = html;
    }
    return {render: render};
})();