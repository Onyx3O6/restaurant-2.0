async function submitForm() {
    const formData = {
      firstName: document.getElementById('first').value,
      lastName: document.getElementById('last').value,
      email: document.getElementById('email').value,
      reason: document.getElementById('reason').value,
      message: document.getElementById('message').value,
    };
  
    const response = await fetch('http://localhost:3000/api/donnees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    const result = await response.json();
    console.log(result);
  }