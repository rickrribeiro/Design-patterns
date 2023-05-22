import type Language from "./languages/Language"
import Portuguese from "./languages/Portuguese"
import English from "./languages/English"
import Default from "./languages/Default"

// const languageDict = {
//     en: English,
//     pt: Portuguese,
//     default: Default
// }

class LanguageFactory{

    public loadApplicationLanguage(): Language{
        const language = process.env.LANG || process.env.LANGUAGE || process.env.LC_ALL || process.env.LC_MESSAGES;
        console.log(language)
        if(language.includes('US')){
            return new English();
        }
        if(language.includes('BR')){
            return new Portuguese();
        }
        
        return new Default();
    }
}


export default LanguageFactory