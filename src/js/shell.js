const shell = (function(){
    let stateMap = {};
    var elemMap = {};

    function setElemMap() {
        let container = stateMap.container;
        elemMap = {container: container};
    }

    function init(main, sidebar) {
        elemMap.main = document.querySelector(main);
        elemMap.sidebar = document.querySelector(sidebar);
        home.render(elemMap.main,elemMap.sidebar);
    };

    return {init:init};
})();