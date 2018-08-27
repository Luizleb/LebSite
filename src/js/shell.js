const shell = (function(){
    var elemMap = {};

    function init(main, sidebar) {
        elemMap.main = document.querySelector(main);
        elemMap.sidebar = document.querySelector(sidebar);
        home.render(elemMap.main,elemMap.sidebar);
    };

    return {init:init};
})();