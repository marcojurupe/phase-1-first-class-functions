const spy = "Hola a todos"

function receivesAFunction(callback)
{ 
    return callback();
}

  function returnsANamedFunction(){
    return receivesAFunction;
  }

  function anonymous() {
    return '';
  };

  function returnsAnAnonymousFunction(){
    return (function() {});
  }