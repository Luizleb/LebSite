// General utilities

const util = (function(){
    // convenience wrapper to create an error object
    function makeError(name,message,data){
        let error = new Error;
        error.name = name;
        error.message = message;
        if(data)error.data = data;
    };
    // observer object
    const observable = {
        observers:[],
        subscribe: function(f){
            this.observers.push(f);
        },
        unsubscribe: function(f){
            this.observers = this.observers.filter(function(subscriber){
                subscriber !== f;
            });
        },
        notify: function(data){
            this.observers.forEach(function(observer){
                observer(data);
            });
        }
    };
    return {
        makeError: makeError,
        observable: observable
    }
})();