let namn = "test";
let losenord = "1234";
let loginForm = document.getElementById("form");

// Kolla vid start om det redan finns ett värde sparat i storage.
if (localStorage.getItem("User") !== null) {
    document.body.innerHTML = "<h2>Du är redan inloggad!</h2>";
    
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "LOGGA UT";
    document.body.appendChild(btn);
    
    // En button som loggar ut användaren, tömmer innehåll på sidan och återskapar html-koden för formuläret.
    btn.addEventListener("click", function logOut(){
        localStorage.clear();
        document.body.innerHTML = "";
        document.body.appendChild(loginForm);
    })
}
function logIn() {
    // Tar in värde från formuläret och tilldelar det till 2 variabler.
    let user = document.getElementById("userName").value;
    let pass = document.getElementById("password").value;

    // Jämför ifall de inmatade värderna stämmer med mina redan skapade inlogsvärden.
    if (user == namn && pass == losenord){
        localStorage.setItem("User", user)
        document.body.innerHTML = "<h2>Välkommen!</h2>";

        let btn = document.createElement("BUTTON");
        btn.innerHTML = "LOGGA UT";
        document.body.appendChild(btn);
        
        btn.addEventListener("click", function logOut(){
            localStorage.clear();
            document.body.innerHTML = "";
            document.body.appendChild(loginForm);
        })
    }
    else {
        document.body.innerHTML = "<h2>Fel användarnamn eller lösenord!</h2>";
        
        // En button som vid felaktig inmatning återskapar första sedan med inloggningsformuläret.
        let btnRetry = document.createElement("BUTTON");
        btnRetry.innerHTML = "FÖRSÖK IGEN";
        document.body.appendChild(btnRetry);
        
        btnRetry.addEventListener("click", function retry(){
            document.body.innerHTML = "";
            document.body.appendChild(loginForm);
        })
    }
}