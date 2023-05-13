export async function register(email, username, password) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('email', email)
    await fetch('http://localhost:8000/api/register/', {
      method: 'POST',
      body: formData,
    });
  }
  