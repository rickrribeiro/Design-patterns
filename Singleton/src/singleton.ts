export default class Singleton{

    public static instance: Singleton;
    public prop1: string;

    private constructor(prop1){
        this.prop1 = prop1;
    }

    // using this prop1 just to confirm that its a singleton instance
    public static getInstance(prop1: string){ 

        if(!this.instance){
            this.instance = new Singleton(prop1);
        }
        return this.instance;
    }
    
}