import { useState } from 'react';
import keyword_extractor from 'keyword-extractor';

export default function Keyw() {
  const [jobTitle, setJobTitle] = useState('');
  const [keywds, setKeywds] = useState([]);
  
  const handleInputChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const extractedKeywds = keyword_extractor.extract(jobTitle, {
      language: 'english',
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: true,
    });
    setKeywds(extractedKeywds);
    console.log(keywds)
  };

  return (
    <div>
      <h1>Keyword Extractor</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Job Title:
          <input type="text" value={jobTitle} onChange={handleInputChange} />
        </label>
        <button type="submit">Extract Keywds</button>
      </form>
      {keywds.length > 0 && (
        <div>
          <h2>Keywds:</h2>
          <ul>
            {keywds.map((keyword, index) => (
              <li key={index}>{keyword}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export{ keywds };