import React from "react";
import { LanguageContext } from ".";
// import { useSearchParams } from "react-router-dom";
  import {useState} from "react"

const Context = ({ children }) => {
  const [language, setLanguage] = useState("en-US");
  const [dark,setDark] = useState(false)
  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        dark,
        setDark
      }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default Context;
