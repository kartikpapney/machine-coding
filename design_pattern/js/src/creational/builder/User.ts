export default class User {
    private name : string|null;
    private age : number|null;

    constructor() {
        this.name = null;
        this.age = null;
    }

    public setName(name : string) : User {
        this.name = name;
        return this;
    }

    public setAge(age : number) : User {
        this.age = age;
        return this;
    }

    public printUser() : void {
        if([this.age, this.name].includes(null)) {
            throw new Error("age and name are mendatory field");
        }
        console.log(`Name = ${this.name}, Age = ${this.age}`)
    }
}