// Add your code here

function submitData(name, email) {
  const formData = {
    name: name,
    email: email
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(object => {
      const newId = document.createElement('p');
      newId.textContent = object.id;
      document.body.appendChild(newId);
    })
    .catch(error => {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = error.message;
      document.body.appendChild(errorMessage);
    });
}