const repository_Api = 'https://api.github.com/search/repositories?q=user:';
const names = ['garyaldahoul', 'shruthidasarapu', 'valmdz'];
const requests = names.map(name => fetch(repository_Api + name));

const mainUl = document.getElementById('mainUl');
Promise.all(requests)
  .then(responses => {
    return Promise.all(
      responses.map(function (response) {
        return response.json();
      })
    );
  }) 
  .then(users => {
    console.log('users', users); // creat external li 
    users.forEach(user => {
      
      if (user && Array.isArray(user.items) && user.items.length > 0) {
        const upperLi = document.createElement('li');
        // find the owner name by accessing the first repository's info
        upperLi.innerHTML = user.items[0].owner.login;
        mainUl.appendChild(upperLi);
        const innerUl = document.createElement('ul');
        upperLi.appendChild(innerUl);
        user.items.forEach(repository => {
          // add list of repositories to owner
          const innerLi = document.createElement('li');
          innerLi.innerHTML = `<div>${repository.full_name} : ${repository.url}</div>`;
          innerUl.appendChild(innerLi);
        });
      }
    });
  })
  .catch(error => { 
    console.error(error.message)
  });