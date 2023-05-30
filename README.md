Resume Analyzer makes the tedious task of resume screening easy for recruiters by automatically analysing and scoring the resumes on the basis of its match with the job description.

## Try it right now,
https://krish-resume-analyzer.vercel.app/

This project uses API from /krishmzn/resume-analyzer-django-api. The deployed branch is already connected with the backend django api which is also deployed and if you want to try it out on your local machine you can use the main branch.

## Your can either, Preview the live site deployed in Vercel:
https://krish-resume-analyzer.vercel.app/

## Or, Get Started Locally:

Firstly, run this command on the api side.
here's django api repo
https://github.com/krishmzn/resume-analyzer-django-api

```bash
python manage.py runserver
```

Then, run the development server of next.js:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000/resume] with your browser to see the result.

Create new user through register page [http://localhost:3000/register]
And login to access the resume analyzer at [http://localhost:3000/resume]


## Navigating the site:
1. Clicking on the website URL [https://krish-resume-analyzer.vercel.app/] and clicking on 'Take me to resume analzyer' pointed by arror OR, simply going to [https://krish-resume-analyzer.vercel.app/resume] will take you to the resume analyzer page
2. If you havent created a user until now, you can easily create one by clicking on 'Not registered yet?'
3. Further instructions for using resume analyzer is in the Resume Analyzer page itself
4. Now you can easily login and use Resume Analyzer
5. For now the resume analyzer django api only supports .pdf and I am working to provide support for other file types too

Have a Good Day!
