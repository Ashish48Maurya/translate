"use client";
import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    // Define the global translation function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "hi,ta,te,bn,gu,kn,ml,mr,pa,or,as",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const changeLanguage = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div>
      <select onChange={(e) => changeLanguage(e.target.value)}>
        <option value="">Select Language</option>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="ta">Tamil</option>
        <option value="te">Telugu</option>
        <option value="bn">Bengali</option>
        <option value="gu">Gujarati</option>
        <option value="kn">Kannada</option>
        <option value="ml">Malayalam</option>
        <option value="mr">Marathi</option>
        <option value="pa">Punjabi</option>
        <option value="or">Odia</option>
        <option value="as">Assamese</option>
      </select>

      {/* Hidden Google Translate Default UI */}
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </div>
  );
}
