
  function receivesAFunction(callback) {
      return callback('hello!');
  }

  function returnsANamedFunction () {
    return function namedFunction(){
        return "This is a named function!";
    }
  }
  
  returnsANamedFunction();

  function returnsAnAnonymousFunction() {
      return function () {
          return 'This is an unnamed function!'
      }
  }
returnsAnAnonymousFunction();
