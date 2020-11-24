/* eslint-disable no-console */
/* eslint-disable no-undef */
// On créé une fonction pour effectuer une requêt GET avec AJAX, qui retrounera une promesse
function ajaxRequest(url) {
  console.log(`ajaxProtocol('${url}')`);
  const p = new Promise((resolved, rejected) => {
    // eslint-disable-next-line no-undef
    const request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/api/teddies', true);
    request.onload = function () {
      if (this.readyState === 4 && this.status === 200) { // retour HTTP OK
        resolved(JSON.parse(this.responseText));
      } else { // ereeur retour HTTP
        rejected(`Erreur HTTP n°: ${this.status}: ${this.statusText}`);
      }
    };
    request.send();
  });
  return p;
}

const urlOrinoco = 'http://localhost:3000/api/teddies';

// on lance le protocole AJAX pour
const teddies = function () {
  return ajaxRequest(urlOrinoco)
    .then((data) => data)
    .catch((reason) => console.log(reason));
};

const teddybear = document.getElementsByClassName('card-body');
console.log(teddybear);

teddies().then((teddies) => {
  console.log(teddies);
  
  let counter = 0;
  teddies.forEach((teddy) => {
    const article = document.createElement('article');
    article.id = 'articleList';

    const image = document.createElement('img');
    image.id = 'teddy_image';
    image.src = teddy.imageUrl;

    const div = document.createElement('div');
    div.id = 'teddy_div';

    const name = document.createElement('h3');
    name.textContent = teddy.name;
    name.id = 'teddy_name';

    const price = document.createElement('p');
    price.textContent = `Prix :${teddy.price} €`;

    const link = document.createElement('a');
    link.id = 'id_link';
    link.href = `${urlOrinoco}/${teddies._id}`;
    link.textContent = "Voir l'ourson";

    teddybear[counter].appendChild(article);
    article.appendChild(name);
    article.appendChild(image);
    article.appendChild(div);
    div.appendChild(price);
    div.appendChild(link);
    counter += 1;
  });
});