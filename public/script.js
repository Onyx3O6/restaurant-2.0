{
  /* Sélectionnez le bouton et les éléments de la liste déroulante */
}
var dropdownButton = document.getElementById("dropdownMenuButton1")
var dropdownItems = document.querySelectorAll(".dropdown-item")
{
  /* Parcourez tous les éléments de la liste déroulante et ajoutez un gestionnaire d'événements */
}
dropdownItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // Mettez à jour le texte du bouton avec la valeur de l'élément sélectionné
    dropdownButton.textContent = item.dataset.value
  })
})
// Envoyer un message dans room-2

// Your fetch code here
fetch("http://localhost:3000/api/donnees")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    // Update your HTML with the retrieved data
  })
  .catch((error) => console.error("Erreur :", error))
