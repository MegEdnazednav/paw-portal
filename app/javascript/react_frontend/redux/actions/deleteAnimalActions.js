export const DELETE_ANIMAL = 'DELETE_ANIMAL';

function deleteAnimal(id) {
  const animal = fetch(`/api/v1/animals/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', //#TODO Cleanup headers
               'Accept': 'application/json',
               'X-Requested-With': 'XMLHttpRequest',
               'Cache-Control': 'no-cache',
               'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
             },
    body: JSON.stringify({id: `${id}`}) //#TODO Body not necessary
  }).then(response => response.json())
    return {
      type: DELETE_ANIMAL,
      payload: id
  }
}

export default deleteAnimal;
