(function(){
    const App = {
        init: function() {
            console.log("Running...");
            shell.init("#content-main");
        }
    };
    window.addEventListener("load",App.init,false);
})();