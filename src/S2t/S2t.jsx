import React, { useState } from 'react';

function S2t(){
    const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('');
  const [targetLang, setTargetLang] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSourceLangChange = (e) => {
    setSourceLang(e.target.value);
  };

  const handleTargetLangChange = (e) => {
    setTargetLang(e.target.value);
  };

  const handleTranslate = () => {
    // Mock translation
    setTranslatedText('Translated text will appear here.');
  };
    return(
        <div className="App">
        <header className="App-header">
          <h1>Translation Interface</h1>
        </header>
        <div className="container">
          <div className="file-upload">
            <input type="file" accept="image/*,.pdf" onChange={handleFileChange} />
          </div>
          <div className="language-selectors">
            <select value={sourceLang} onChange={handleSourceLangChange}>
              <option value="">Select Source Language</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              {/* Add more languages as needed */}
            </select>
            <select value={targetLang} onChange={handleTargetLangChange}>
              <option value="">Select Target Language</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              {/* Add more languages as needed */}
            </select>
          </div>
          <button onClick={handleTranslate}>Translate</button>
          <div className="translated-text">
            <textarea value={translatedText} readOnly placeholder="Translated text will appear here." />
          </div>
        </div>
      </div>

    )
}

export default S2t;