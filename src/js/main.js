(function(){
    const App = {
        init: function() {
            console.log("Running...");
            shell.init("#content-main","#content-sidebar");
        }
    };
    window.addEventListener("load",App.init,false);
})();