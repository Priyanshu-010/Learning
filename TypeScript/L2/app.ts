class Abcd{
  public _name: string;
  constructor(_name: string, public age: number){}
  get name(){  //This is not a function it is a property
    return this._name;
  }
  set name(value:string){ //c1.name = "Rai" we have to use it like this,not like func
    this._name = value;
  }
}

let c1 = new Abcd("priyanshu", 24)