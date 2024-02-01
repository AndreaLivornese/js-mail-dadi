// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere (qui quindi dovremmo creare da noi un array di email casuali),
// stampa un messaggio appropriato sull’esito del controllo.
// (NON utilizzate il metodo .includes())



const buttonElement = document.querySelector("#btn");
const resultElement = document.querySelector("#result");

let emails = ["gigorobo@gmail.com", "castoromonco@vichingo.qualcosa", "windowsmegliodiapple@verita.eu"]; 

buttonElement.addEventListener("click",
    function(){
        // valore inserito nella casella di testo
        const userEmail = document.querySelector("#email").value;
        let flag=false;

        for(let i=0; i < emails.length; i++){
            if(userEmail == emails[i]){
                flag=true;
            }
        }

        if(flag == true){
            resultElement.innerText="La email inserita è presente nella lista";
        }else{
            resultElement.innerText="La email inserita non è presente nella lista";
        }



    }
)