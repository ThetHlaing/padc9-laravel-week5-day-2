    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
    // Creat get and set for dinner properties

    class Animal {

      constructor(name) {
        this.name = name;             
        this.food = 'nothing';
      }      

      set breakfast(value){
        this.food = value;
      }

      get breakfast(){
        return "Previously eaten " + this.food;
      }
    }
   
    let a = new Animal('Mitzie');     
    a.breakfast = 'Cake';
    console.log(a.breakfast);
    a.dinner = "Stake";
    console.log(a.dinner);
