var list = document.querySelector('ul'); // initialise une variable list qui sélectionne les ul
list.addEventListener('click', function (ev) // ajoute un évènement de clic à la liste de tâches 
    {
        if (ev.target.tagName === 'LI') // si l'élément cliqué est un li
            { 
                ev.target.classList.toggle('checked'); // Ajoute/enlève la classe checked
            }
    }, false); // false pour que l'évènement se propage de manière normale

function newElement() // Fonction pour créer un nouvel élément de liste
    {
        var li = document.createElement("li"); // Crée un nouvel élément li
        var inputValue = document.getElementById("entreeUt").value; // Récupère la valeur de l'input
        var t = document.createTextNode(inputValue); // Crée un nœud de texte avec la valeur

        var textSpan = document.createElement("SPAN"); // Crée un span pour le texte de la tâche
        textSpan.className = "task-text"; // Ajoute une classe pour identifier le texte
        textSpan.appendChild(t); // Ajoute le texte au span
        li.appendChild(textSpan); // Ajoute le span au li

        if (inputValue === '') // Vérifie si l'input est vide
        {
            alert("écris quelque chose"); // Alerte si la saisie est vide
        } 
        else // Si l'input n'est pas vide
        {
            document.getElementById("myUL").appendChild(li); // Ajoute l'élément à la liste ul
        }
        document.getElementById("entreeUt").value = ""; // Réinitialise le champ de saisie

        var span = document.createElement("SPAN"); // Crée un nouveau span
        var txt = document.createTextNode("\u00D7"); // Ajoute le texte × au bouton close
        span.className = "close"; // Ajoute la classe close pour styliser le bouton
        span.appendChild(txt); // Ajoute le texte au span
        li.appendChild(span); // Ajoute le bouton × au li

        var close = document.getElementsByClassName("close"); // Récupère tous les éléments avec la classe close
        for (var i = 0; i < close.length; i++) // Boucle pour parcourir tous les éléments close
        { 
            close[i].onclick = function () // Ajoute un évènement de clic à chaque élément close
            {
                var div = this.parentElement; // Récupère le parent du bouton le li
                div.style.display = "none"; // Cache l'élément
            }
        }

        var editBtn = document.createElement("SPAN"); // Crée un nouveau span
        var editTxt = document.createTextNode("✎"); // Icône pour modifier
        editBtn.className = "edit"; // Ajoute une classe pour ajouter du style le bouton modifier
        editBtn.appendChild(editTxt); // Ajoute le texte au bouton
        li.appendChild(editBtn); // Ajoute le bouton modifier au li

        var edit = document.getElementsByClassName("edit"); // Récupère tous les éléments avec la classe edit
        for (var i = 0; i < edit.length; i++) // Boucle pour parcourir tous les éléments edit
        {
            edit[i].onclick = function () // Ajoute un évènement de clic à chaque élément edit
            {
                var li = this.parentElement; // Récupère l'élément <li> parent
                var textSpan = li.querySelector(".task-text"); // Sélectionne le span contenant le texte

                if (this.textContent === "✎") // Si le bouton est en mode "modifier"
                {
                    var currentText = textSpan.textContent; // Texte actuel de la tâche

                    // Transforme le texte en un champ <input>
                    var input = document.createElement("INPUT"); // Crée un champ input
                    input.type = "text"; // Définit le type de champ comme texte
                    input.value = currentText; // Prend le texte actuel comme valeur
                    textSpan.textContent = ""; // Supprime le texte existant
                    textSpan.appendChild(input); // Ajoute le champ de saisie au span

                    this.textContent = "✔"; // Change l'icône en "valider"
                }
                else if (this.textContent === "✔") // Si le bouton est en mode "valider"
                {
                    var input = textSpan.querySelector("input"); // Récupère le champ de saisie
                    var updatedText = input.value.trim(); // Récupère le texte saisi
                    if (updatedText) // Vérifie si le texte n'est pas vide
                    {
                        textSpan.textContent = updatedText; // Remplace l'input par le texte modifié
                    } 
                    else // Si le texte est vide
                    {
                        textSpan.textContent = "Tâche vide"; // Définit un texte par défaut
                    }

                    this.textContent = "✎"; // Retour au bouton "modifier"
                }
            };
        }
    }
// Ajoute un écouteur pour détecter la touche Entrée sur le champ de saisie
var input = document.getElementById("entreeUt"); // Sélectionne le champ de saisie
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") { // Vérifie si la touche appuyée est "Entrée"
        newElement(); // Appelle la fonction pour créer une nouvelle tâche
    }
});
// Sélectionne le bouton "Nouvelle Tâche"
var addButton = document.querySelector(".addBtn");

// Ajoute un gestionnaire pour détecter la touche Entrée
addButton.addEventListener("keydown", function (event) {
    if (event.key === "Enter") { // Vérifie si la touche appuyée est "Entrée"
        newElement(); // Appelle la fonction pour créer une nouvelle tâche
    }
});

