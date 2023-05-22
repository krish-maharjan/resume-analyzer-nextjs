import { useEffect, useState } from "react";
// for Tag Input
import { TagsInput } from "react-tag-input-component";

// keywords extractor
import keyword_extractor from 'keyword-extractor';

// imort Modal
import Modal from "./components/layout/modal";

import Cookies from 'js-cookie';
import { parseCookies } from 'nookies';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

export async function getServerSideProps(context) {
  const cookies = parseCookies(context);
  const token = cookies.token;

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {}, // Will be passed to the page component as props
  };
}

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
  const [processingStatus, setProcessingStatus] = useState(false);
  const [showArrow, setShowArrow] = useState(false)

  const [openToast, setOpenToast] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenToast(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  function closeToast() {
    setOpenToast(false)
  }

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

    const username = Cookies.get('username'); // Read token from cookies

    formData.append("email", username);
    formData.append("keywords_received", keywords_received);

    console.log(formData)
    console.log('console email rdoc and keywords reaceived', email, rdoc, keywords_received)

    // For token authentication
    const token = Cookies.get('token'); // Read token from cookies
    const edited_token = 'token ' + token
    // const header = {
    //   'Content-Type': 'multipart/form-data',
    //   'Authorization': edited_token
    // }
    // console.log('This is headers', header)

    const res = await fetch("http://127.0.0.1:8000/api/resume/", {
      method: "POST",
      headers: {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',

        'Authorization': edited_token,
      },
      body: formData,
    });


    console.log(formData)

    const data = await res.json();
    setResponse(data);
    console.log(data)
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
    return [rnames, mper, ccsv];
  };


  // console.log('new arrays',rnames, mper, ccsv)
  const resultPair = {
    'names': rnames,
    'match_percent': mper
  }

  // for closing modal
  const handleClose = (e) => {
    e.preventDefault();
    setShowModal(false);
    setShowArrow(true)
  }

  return (
    <section className="flex flex-col justify-center items-center mt-40 xl:px-52 lg:px-32 md:px-16 sm:px-10 gap-5">
      <div className="flex flex-col items-center my-10 gap-11">
        <h1 className="text-3xl font-extrabold">Resume Analyzer</h1>
        <div>
          <p className="mb-3">3-step process to analyze resumes</p>
          <ul className="flex flex-col gap-1">
            <li>
              <strong>Step 1: </strong> input 'Job Description' or 'Keywords'</li>
            <li>
              <strong>Step 2: </strong>Upload resumes by clicking on 'CHOOSE FILES'</li>
            <li>
              <strong>Step 3: </strong>If you're satisfied with the keywords and the resumes provided click on 'START ANALYSIS', This will start analyzing the resumes and will tell you when analysis is completed</li>
          </ul>
        </div>
      </div>

      {
        showArrow == false
          ? (
            <div className="my-10">
              <svg fill="none" viewBox="0 0 24 24" stroke-width="7" stroke="currentColor" class="animate-bounce w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </div>
          )
          : null
      }

      <div className="card w-full bg-slate-50 shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90">
        <form onSubmit={handleSubmit} className="card-body">
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
                required
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
          <Modal show={showModal}>
            {
              processingStatus == false
                ? <button disabled type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex flex-col justify-center items-center gap-2">
                  <svg aria-hidden="true" role="status" class="inline w-8 h-8 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                  </svg>
                  Please wait... <br /> we're Analyzing Resumes
                </button>
                : <div className="flex flex-col flex-wrap gap-2 justify-center items-center">
                  <div className="flex flex-row justify-center items-center">
                    <svg aria-hidden="true" class="w-7 h-7 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    <h1 className="text-lg">Analysis Complete!</h1>
                  </div>
                  <a href="#resultid" onClick={handleClose}>
                    <button className="btn btn-primary">View Result</button>
                  </a>
                </div>
            }
          </Modal>

        </form>
      </div>

      {
        showArrow == true
          ? (
            <div className="my-10">
              <svg fill="none" viewBox="0 0 24 24" stroke-width="7" stroke="currentColor" class="animate-bounce w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </div>
          )
          : null
      }

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

      {openToast &&
        <div className="toast cursor-pointer" onClick={closeToast}>
          <div className="alert alert-success">
            <div>
              <FontAwesomeIcon className='text-xl' icon={faUserCheck} />
              <span>Successfully logged in!</span>
            </div>
          </div>
        </div>
      }
    </section>
  );
};

// export default withAuth(Resume);