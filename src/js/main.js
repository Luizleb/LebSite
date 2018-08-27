(function(){
    const App = {
        init: function() {
            shell.init("#content-main","#content-sidebar");
        }
    };
    window.addEventListener("load",App.init,false);
})();