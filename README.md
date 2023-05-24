This project uses API from /krishmzn/resume-analyzer-django-api
The deployed branch is already connected with the backend api and if you want to try it out on your local machine you can use the main branch.

## Preview the live site deployed in github pages:
https://krishmzn.github.io/resume-analyzer-nextjs/

## Getting Started

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
