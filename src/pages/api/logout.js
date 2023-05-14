import Cookies from "js-cookie";

export async function logout(token) {
    console.log('clicked logout')
    const edited_token = 'token ' + token

    const response = await fetch('http://localhost:8000/api/logout/', {
      method: 'POST',
      headers: {
        Authentication: edited_token,
      },
    });
    if (response === null || response === undefined) {
      return {redirect: {
        destination: '/login',
        permanent: false,
      },
    };
    }
  }
  