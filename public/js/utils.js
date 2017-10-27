(function(){
    var register = document.querySelector(".form .register-form");
    var login = document.querySelector(".form .login-form");
    
    function toggleClass(){    
        if(isHidden(register)){
            register.style.display = 'block';
            login.style.display = 'none';
        } else {
            register.style.display = 'none';
            login.style.display = 'block';
        }
    };

    function isHidden(elem){
        return window.getComputedStyle(elem, null).getPropertyValue('display') === 'none';
    }
    
    function init(){   
        var messages = document.querySelectorAll(".message a");
        messages.forEach(function(element) {
            element.addEventListener('click', toggleClass, false);
        });
    }
    
    window.addEventListener('load', init, false);
})();
