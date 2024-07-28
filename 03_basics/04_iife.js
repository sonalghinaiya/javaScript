//IIFE - Immediately Invoked Function Expression

(function chai(){
    console.log(`DB Connected`);
})();

(function chai(){
    console.log(`DB Connected TOO`);
})();

// (() => {
//     console.log(`DB CONNECT`)
// })()

((name) => {
    console.log(`DB CONNECT ${name}`)
})("Sonal")