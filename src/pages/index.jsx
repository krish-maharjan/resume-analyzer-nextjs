import { useEffect, useState } from "react";
// for Tag Input
import { TagsInput } from "react-tag-input-component";

// keywords extractor
import keyword_extractor from 'keyword-extractor';

// imort Modal
import Modal from "./components/layout/modal";


export default function Resume() {
  const [rdoc, setrdoc] = useState([]);
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState(null);
  const [jobTitle, setJobTitle] = useState(''); //texarea
  const [keywds, setKeywds] = useState([]); //texarea
  const [keywords_received, setKeywords_received] = useState(keywds);
  // const [tready, setReady] = useState(null)
  // modal
  const [showModal, setShowModal] = useState(false);
  const [processingStatus, setProcessingStatus] = useState(true);


  // console.log(keywords_received, typeof (keywords_received))

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
      return_max_ngrams: 1,
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
    setShowModal(true)
    setProcessingStatus(false)
    console.log('processing Status', processingStatus)
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

  useEffect(() => {
    setProcessingStatus(true)
    console.log('processing Status', processingStatus)
  }, [response])


  var rnames = [];
  var mper = [];
  var ccsv = "";

  const convertToHTML = (data) => {

    Object.keys(data).forEach((key) => {
      if (key == 'Resume Names') {
        // console.log(typeof(key))
        let val = data[key]
        // console.log(val)
        // console.log(val.slice(6))
        // resumeNames += `<strong>Resume Names: </strong>${val}<br>`;
        rnames.push(...val)
      }
      else if (key == 'Match Percentage') {
        // matchPercentage += `<strong>Match Percentage: </strong>${data[key]}<br>`;
        let val = data[key]
        mper.push(...val)
      }
      else if (key == 'csv_file') {
        ccsv += data[key];
      }
    });
    // setReady = 'ready'
    return [rnames, mper, ccsv];
  };


  // console.log('new arrays',rnames, mper, ccsv)
  const resultPair = {
    'names': rnames,
    'match_percent': mper
  }

  // Object.entries(resultPair).forEach(entry => {
  //   const [key, value] = entry;
  //   console.log('keyvaluepairs',key, value)
  //   var showResult = <tr> <td>{key}</td> <td>{value}</td> </tr>
  // })

  return (
    <section className="flex flex-col justify-center items-center mt-40 xl:px-52 lg:px-32 md:px-16 sm:px-10 gap-5">
      <div className="flex flex-col items-center my-10 gap-11">
        <h1 className="text-3xl font-extrabold">Resume Analyzer</h1>
        <div>
          <p className="mb-3">Here is a 3-step process to analyze resume</p>
          <ul className="flex flex-col gap-1">
            <li>
              <strong>Step 1: </strong> input 'Job Description' or 'Keywords'</li>
            <li>
              <strong>Step 2: </strong>Upload resumes by clicking on 'CHOOSE FILES'</li>
            <li>
              <strong>Step 3: </strong>If you're satisfied with the keywords and the resumes provided click on 'START ANALYSIS', This will start analyzing the resumes and will tell you when analysis is completed</li>
          </ul>
        </div>
        <main id="mouse-scroll">
                    <div className="mouse">
                        <div className="mouse-in"></div>
                    </div>
                    <div>
                        <span className="down-arrow-1"></span>
                        <span className="down-arrow-2"></span>
                        <span className="down-arrow-3"></span>
                    </div>
                </main>
      </div>

      <div className="card w-full bg-slate-50 shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="my-3">
            <label htmlFor="email" className="input-group input-group-vertical text-black">Email*</label>
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
              Job Description
              <textarea type="text" value={jobTitle} onChange={handleInputChange} className="textarea  textarea-bordered min-h-[7rem]" />
            </label>
            <button onClick={handleKeywds} className="btn mt-3">Extract Keywords</button>
          </div>
          <div className="my-3">
            <label htmlFor="keywords_received" className="input-group input-group-vertical text-black">Add tags here by pressing enter*</label>
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
            <label htmlFor="rdoc" className="input-group input-group-vertical text-black">Upload Resume*</label>
            <input className="file-input file-input-bordered w-full max-w-xs" type="file" id="rdoc" name="rdoc" required multiple onChange={handleFileChange} />
          </div>
          <button type="submit" className="btn btn-primary  btn-active btn-xs sm:btn-sm md:btn-md lg:btn-lg" htmlFor="my-modal-6">Start Analysis</button>
          <Modal show={showModal} onClose={() => setShowModal(false)} closeBtnName='View Result'>
            {
              processingStatus == false
                ? 'Analyzing...'
                : 'Analysis Complete!'

            }
          </Modal>

        </form>
      </div>

      <div className="card w-full bg-slate-50 shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90 p-5 overflow-x-auto" id="resultid">
        <h1 className="text-4xl font-bold my-3">Result</h1>
        {response && <div className="hidden" dangerouslySetInnerHTML={{ __html: convertToHTML(response) }} />}

        {rnames.length > 0 && mper.length > 0 ? (
          <table className="table w-full">
            <thead>
              <tr>
                <th>Sno.</th>
                <th>Resume Name</th>
                <th>Match Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&rarr;</td>
                <td><strong>Download full csv report</strong></td>
                <td><a href={ccsv} className="btn btn-primary">CSV File</a></td>
              </tr>

              {rnames.map((name, index) => (
                <tr key={index} className="hover">
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{mper[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No results yet</p>
        )}

      </div>
    </section>
  );
};