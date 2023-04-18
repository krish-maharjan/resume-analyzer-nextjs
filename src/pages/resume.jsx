import { useState } from "react";
// for Tag Input
import { TagsInput } from "react-tag-input-component";

// keywords extractor
// import Keyw, { keywds } from './components/components/resume/kextractor';
import keyword_extractor from 'keyword-extractor';


export default function Resume() {
  const [rdoc, setrdoc] = useState([]);
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState(null);
  const [jobTitle, setJobTitle] = useState('');
  const [keywds, setKeywds] = useState([]);
  const [keywords_received, setKeywords_received] = useState(keywds);
  console.log(keywords_received, typeof (keywords_received))
  
  // keywords generator
  const handleInputChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleKeywds = (event) => {
    event.preventDefault();
    const extractedKeywds = keyword_extractor.extract(jobTitle, {
      language: 'english',
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: true,
      return_max_ngrams: 3,
    });
    // setKeywds(extractedKeywds);
    // console.log(keywds)
    setKeywords_received(extractedKeywds)
  };

  // Ending keywords generator

  const handleTagChange = (newTags) => {
    // Filter out unwanted characters
    const filteredTags = newTags.map((tag) => tag.replace(/[^a-zA-Z0-9]/g, ""));
    setKeywords_received(filteredTags);
  };

  const handleFileChange = (e) => {
    setrdoc(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // console.log('rdoc',rdoc)
    for (let i = 0; i < rdoc.length; i++) {
      formData.append("rdoc", rdoc[i]);
    }

    formData.append("email", email);
    formData.append("keywords_received", keywords_received);

    // console.log(formData)
    // console.log(rdoc)

    const res = await fetch("http://127.0.0.1:8000/api/resume/", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResponse(data);
  };

  const convertToHTML = (data) => {
    let resumeNames = "";
    let matchPercentage = "";
    let csvFile = "";
    Object.keys(data).forEach((key) => {
      if (key == 'Resume Names') {
        // console.log(typeof(key))
        let val = data[key]
        // console.log(val)
        // console.log(val.slice(6))
        resumeNames += `<strong>Resume Names: </strong>${val}<br>`;
      }
      else if (key == 'Match Percentage') {
        matchPercentage += `<strong>Match Percentage: </strong>${data[key]}<br>`;
      }
      else if (key == 'csv_file') {
        csvFile += `<strong>CSV File </strong>${data[key]}<br>`;
      }
    });
    return [resumeNames, matchPercentage, csvFile];
  };

  return (
    <section className="flex justify-center items-center my-16 xl:px-52 lg:px-32 md:px-16 sm:px-10">
      <div className="card w-full bg-slate-50 shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="my-3">
            <label htmlFor="email" className="input-group input-group-vertical text-black">Email</label>
            <input className="input input-bordered w-full max-w-xs text-black"
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-3">
            <label className="input-group input-group-vertical text-black">
            Job Description:
              <textarea type="text" value={jobTitle} onChange={handleInputChange} className="textarea  textarea-bordered min-h-[7rem]" />
            </label>
            <button onClick={handleKeywds} className="btn mt-3">Extract Keywords</button>
          </div>
          <div className="my-3">
            <label htmlFor="keywords_received" className="input-group input-group-vertical text-black">Add tags here by pressing enter</label>
            {/* Input Tag */}
            <div className="tginput">
              {/* <h1>Add tags here by pressing enter</h1> */}
              {/* <pre>{JSON.stringify(keywords_received)}</pre> */}
              <TagsInput
                className='h-screen'
                classNames={'h-screen'}
                value={keywords_received}
                onChange={handleTagChange}
                name="tags"
                placeHolder="tags"
              />
              {/* <em>Enter tags</em> */}
            </div>
            {/* Input Tag ends here */}

          </div>
          <div className="my-3">
            <label htmlFor="rdoc" className="input-group input-group-vertical text-black">Upload Resume Here</label>
            <input className="file-input file-input-bordered w-full max-w-xs" type="file" id="rdoc" name="rdoc" required multiple onChange={handleFileChange} />
          </div>
          <button type="submit" className="btn btn-primary  btn-active btn-xs sm:btn-sm md:btn-md lg:btn-lg" htmlFor="my-modal-6">Start Analysis</button>

        </form>
        {response && <div dangerouslySetInnerHTML={{ __html: convertToHTML(response) }} />}
      </div>
    </section>
  );
};