export const CREATE_ANIMAL = 'CREATE_ANIMAL';

function createAnimal(body, callback) {
  const new_animal = fetch('/api/v1/animals', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
               'Accept': 'application/json',
               'X-Requested-With': 'XMLHttpRequest',
               'Cache-Control': 'no-cache',
               'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
             },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);
    return {
      type: CREATE_ANIMAL,
      payload: new_animal
  }
}

export default createAnimal;
