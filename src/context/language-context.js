import React, { useState } from 'react';

const LanguageContext = React.createContext({
    lang: "hun",
    onSettingLanguage: () => { }
});

export const LanguageContextProvider = (props) => {
    const [language, setLanguage] = useState("hun");

    const languageHandler = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider
            value={{
                lang: language,
                onSettingLanguage: languageHandler,
            }}>
            {props.children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;
