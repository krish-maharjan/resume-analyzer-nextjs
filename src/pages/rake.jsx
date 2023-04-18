import { useState } from 'react';
import rakejs from '@shopping24/rake-js';

export default function Home() {
  const [jobTitle, setJobTitle] = useState('');
  const [keywords, setKeywords] = useState([]);

  const handleInputChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { result } = rakejs.extract(jobTitle)
      .pipe(rakejs.extractKeyPhrases)
      .pipe(rakejs.extractAdjoinedKeyPhrases)
      .pipe(rakejs.keywordLengthFilter)
      .pipe(rakejs.distinct)
      .pipe(rakejs.scoreWordFrequency)
      .pipe(rakejs.sortByScore);

    const keywords = result.map(phrase => phrase.text);
    setKeywords(keywords);
  };

  return (
    <div>
      <h1>Keyword Extractor</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Job Title:
          <input type="text" value={jobTitle} onChange={handleInputChange} />
        </label>
        <button type="submit">Extract Keywords</button>
      </form>
      {keywords.length > 0 && (
        <div>
          <h2>Keywords:</h2>
          <ul>
            {keywords.map((keyword, index) => (
              <li key={index}>{keyword}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
