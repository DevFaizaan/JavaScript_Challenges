'use strict';

document
  .querySelector('body > section > form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    console.log('THIS:', this);

    const body = {
      //id: event.target.id.value,
      age: event.target.age.value,
      name: event.target.name.value,
      habitat: event.target.habitat.value,
      gender: event.target.gender.value,
    };

    console.log('BODY:', body);

    axios
      .post('http://localhost:8080/duck/create', body)
      .then((response) => {
        console.log(response);
        event.target.reset();
        event.target.name.focus();
      })
      .catch((err) => console.error(err));
  });

//const output = document.querySelector('#output');
function renderDucks() {
  axios
    .get('http://localhost:8080/duck/readAll')
    .then((res) => {
      console.log('ducks: ', res.data);
    })
    .catch((err) => console.error(err));
}

function renderDuckID(id) {
  axios
    .get('http://localhost:8080/duck/readById/' + id)
    .then((res) => {
      console.log('ducks: ', res.data);
    })
    .catch((err) => console.error(err));
}

function updateDuck(id) {
  axios
    .get('http://localhost:8080/duck/update/' + id)
    .then((res) => {
      console.log('ducks: ', res.data);
      req.params.id,
        req.body,
        {
          new: true,
        };
    })
    .catch((err) => console.error(err));
}

const deleteDuck = (id) => {
  axios
    .delete('http://localhost:8080/duck/delete/' + id)
    .then((res) => {
      console.log('Delete successful');
      renderDucks();
    })
    .catch((err) => console.error(err));
};
