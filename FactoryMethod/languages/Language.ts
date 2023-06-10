abstract class Language{

    abstract getLanguage();

    public printLanguage(){
        console.log(this.getLanguage())
    }
}

export default Language