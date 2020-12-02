function *factorial(n){
      let total = 1;
      for (let i = 1; i <= n; i++){
        total = total * i;
        yield total;
      }
    }

    for (var n of factorial(5)) {
      console.log(n)
    }
