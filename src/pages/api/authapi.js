export async function login(username, password) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    const response = await fetch('https://krishmaharjan.pythonanywhere.com/api/login/', {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      const { non_field_errors } = await response.json();
      throw new Error(non_field_errors[0]);
    }
    const { token } = await response.json();
    return token;
  }
  