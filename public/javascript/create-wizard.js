async function newFormHandler(event) {
    event.preventDefault();
  
    const first_name = document.querySelector('input[name="first_name"]').value;
    const last_name = document.querySelector('input[name="last_name"]').value;
    const houses_id = document.querySelector('input[name="houses_id"]').value;
  
    const response = await fetch(`/api/wizards`, {
      method: 'POST',
      body: JSON.stringify({
        first_name,
        last_name,
        houses_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/api/wizards');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.create-wizard').addEventListener('submit', newFormHandler);

  