function receivesAFunction (cb) {
    console.log(cb());
  }
  
  receivesAFunction(function () { return 'I don\'t know yet'});

  function returnsANamedFunction() {
    
    return function random() {
        console.log(`These random functions do be working`)
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}