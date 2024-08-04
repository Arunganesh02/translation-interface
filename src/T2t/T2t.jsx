import React, { useState } from 'react';


function T2t(){
    const [text, setText] = useState('');
  const [language1, setLanguage1] = useState('');
  const [language2, setLanguage2] = useState('');
  const [languages] = useState([
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
    { code: 'es', name: 'Spanish' },
    { code: 'de', name: 'German' },
    // Add more languages as needed
  ]);

  const handleTranslate = () => {
    // Implement translation logic here
    console.log('Translating...');
  };

  const renderLanguageOptions = () => {
    return languages.map((lang) => (
      <option key={lang.code} value={lang.code}>
        {lang.name}
      </option>
    ));
  };

  return (
    <div className="app-container">
      <h1>Translator</h1>
      <div className="card">
        <input
          type="text"
          placeholder="Enter your text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <select
            value={language1}
            onChange={(e) => setLanguage1(e.target.value)}
          >
            <option value="">Select language 1</option>
            {renderLanguageOptions()}
          </select>
          <select
            value={language2}
            onChange={(e) => setLanguage2(e.target.value)}
          >
            <option value="">Select language 2</option>
            {renderLanguageOptions()}
          </select>
          </div>
        <button onClick={handleTranslate}>Translate</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default T2t;