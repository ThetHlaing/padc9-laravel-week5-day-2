const obj = {
    myVar: 'foo',
    
    myFunc: () => {
      this.myVar = 'bar'; 
      console.log(this);
    }
  };

  const obj2 = {
    myVar: 'foo',
    
    myFunc: function() { 
      console.log(this);
    }
  };

  obj.myFunc();
  obj2.myFunc();

  //const returnValueInstantly = 


  //const returnObjectInstantly = 
