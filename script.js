

// Connection


let btnConnection = document.getElementById("btnConnection")

 btnConnection.addEventListener("click", function () {
       console.log("hey t' es connecté")
    })


// Choix entre inscription ou identification du compte
// function addEventListenerNoCompte() {
//    let noCompte = document.getElementById("noCompte")
//    noCompte.addEventListener("click", (noCompte) => {
//       console.log("s'inscrire")
//    } )
// }

//Fction pour émuler le popup signup
function afficherPopup() {
   let btnPasCpte = document.getElementById("btnPasCpte")
   // La popup est masquée par défaut (display:none), ajouter la classe "active"
   // va changer son display et la rendre visible. 
   btnPasCpte.classList.add("active")
}
function addEventListenerSignUp() {
   let signUp = document.getElementById("signup")
   signUp.addEventListener("click", () => {
      afficherPopup()
   }) }