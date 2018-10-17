import translatesEN from "../l10n/en";
import translatesRU from "../l10n/ru";
import translatesUA from "../l10n/ua";

const localesMapping = {
    en: translatesEN,
    ru: translatesRU,
    ua: translatesUA,
};

class l10n {
    constructor() {
        this.translates = translatesRU;
    }

    t(key, params) {
        return this.translate(key, params);
    }

    translate(key, params) {
        let translation = this.translates[key];

        if (translation) {
            if (params) {
                translation = translation.replace(/\${([a-zA-z0-9]*)}/g, (pattern, paramKey) => {
                    let value = params[paramKey];
                    if (value) {
                        return value;
                    }
                    return "";
                });
            }

            return translation;
        }

        return key;
    }

    setLang(lang = 'ru') {
        let translates = localesMapping[lang.toLowerCase()];

        if (translates) {
            this.translates = translates;
        }
    }
}

export default new l10n();
