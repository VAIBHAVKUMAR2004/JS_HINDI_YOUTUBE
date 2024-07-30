// Immediately  Involked Function Expressions (IIFE)

(function chai(){
    console.log('DB CONNECTED');
})();              //semi-colan is must


( (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
})('vaibhav')