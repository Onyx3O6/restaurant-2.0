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
