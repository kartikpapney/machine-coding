export default class SingleTon {
    private static instance : SingleTon | null = null;
    private constructor() {
        console.log("-- constructor called --");
    }
    public static getInstance() : SingleTon {
       
        if(this.instance == null) {
            this.instance = new SingleTon();
        }
        return this.instance
    }
}