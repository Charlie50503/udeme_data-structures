const string = ["a","b","c","d"]


class Player {
  constructor(name,type){
    // console.log(this)
    // console.log("name",name);
    // console.log("type",type);
    this.name = name
    this.type = type
  }
  introduce(){
    console.log(this)
    console.log(`hi i am ${this.name}, I am a ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name,type){
    super(name,type)
    console.log(this);
  }

  play(){
    console.log(`I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly","Healer");
const wizard2 = new Wizard("Shawn","Dark Magic");
wizard1.introduce()