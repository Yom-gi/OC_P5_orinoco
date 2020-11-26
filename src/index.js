

function ajaxRequest(url) {
  const p = new Promise((resolved, rejected) => {
    // eslint-disable-next-line no-undef
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
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
var teddies = function () {
    return ajaxRequest(urlOrinoco)
};

const teddybear = document.getElementsByClassName('card-body');
console.log(teddybear);

teddies().then((data) => {
  console.log(data);
  
  let counter = 0;
  data.forEach(function(teddy) {
    const article = document.createElement('article');
    article.id = 'articleList';

    const image = document.createElement('img');
    image.id = 'teddyImage';
    image.src = teddy.imageUrl;

    const div = document.createElement('div');
    div.id = 'teddyDiv';

    const name = document.createElement('h3');
    name.textContent = teddy.name;
    name.id = "teddyName";

    const price = document.createElement('p');
    price.textContent = `Prix :  ${teddy.price} €`;

    let teddyId = teddy._id;

    const link = document.createElement('a');
    link.id = 'linkId';
    link.href = 'produit.html?id=' + teddyId;
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