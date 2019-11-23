    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
    // Add leg Property and sleep method

    class Animal {
      
      constructor(name) {
        this.name = name;             
      }
      
      speak(){        
        console.log(`${this.name} speak`);
      }
    }
   
    let a = new Animal('Mitzie');    
    console.log(a.name);
    a.speak();