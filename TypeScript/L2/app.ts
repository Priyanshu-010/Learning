class Abcd{
  public _name: string;
  constructor(_name: string, public age: number){}
  get name(){
    return this._name;
  }
  set name(value:string){
    this._name = value;
  }
}

let c1 = new Abcd("priyanshu", 24)