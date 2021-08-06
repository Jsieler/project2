async function newFormHandler(event) {
    event.preventDefault();
  
    const spell_name = document.querySelector('input[name="spell_name"]').value;
    const spell_type = document.querySelector('input[name="spell_type"]').value;
    const spell_affect = document.querySelector('input[name="spell_affect"]').value;
  
    const response = await fetch(`/api/spells`, {
      method: 'POST',
      body: JSON.stringify({
        spell_name,
        spell_type,
        spell_affect
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/api/spells');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.create-spell').addEventListener('submit', newFormHandler);