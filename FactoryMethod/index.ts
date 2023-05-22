import LanguageFactory from "./languageFactory";

const languageFactory = new LanguageFactory();

const language = languageFactory.loadApplicationLanguage();
language.printLanguage()