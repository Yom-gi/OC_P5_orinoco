//Mise a jour du nombre de produit dans l'onglet panier



console.log("testchargement")


// On créé une fonction pour effectuer une requêt GET avec AJAX, qui retrounera une promesse
function ajaxRequest(url) {
  console.log("ajaxProtocol('"+url+"')");
  var p = new Promise(function(resolved, rejected) {
    var request = new XMLHttpRequest();
    request.open("GET", 'http://localhost:3000/api/teddies',true);
    request.onload = function() {
      if (this.readyState == 4 && this.status == 200) {     // retour HTTP OK
        resolved(JSON.parse(this.responseText));
      }
      else {    // ereeur retour HTTP
        rejected("Erreur HTTP n]"+this.status+" : "+this.statusText);
      }
    }
    request.send();
  });
  return p;
}

// on lance le protocole AJAX pour
var teddies = function() {
 return ajaxRequest("http://localhost:3000/api/teddies")
    .then(function(data) {
    return data;
    })
    .catch(reason => console.log(reason));
};

let teddybear = document.getElementsByClassName('card-body');

teddies().then(function(teddies) {
console.log(teddies);
});


// Affiche dynamiquement de la liste des articles grace à JS
