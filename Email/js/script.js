// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere (qui quindi dovremmo creare da noi un array di email casuali),
// stampa un messaggio appropriato sull’esito del controllo.
// (NON utilizzate il metodo .includes())



const buttonCheckElement = document.querySelector("#btn");
const resultElement = document.querySelector("#result");
const choiceElement = document.querySelector("span");

console.log(choiceElement);

const btnYesElement = document.querySelector("#btn-yes");
const btnNoElement = document.querySelector("#btn-no");


let emails = ["gigorobo@gmail.com", "castoromonco@vichingo.qualcosa", "windowsmegliodiapple@verita.eu"]; 

buttonCheckElement.addEventListener("click",
    function(){
        // valore inserito nella casella di testo
        const userEmail = document.querySelector("#email").value;
        let flag=false;

        // controllo presenza email nell'array
        for(let i=0; i < emails.length; i++){
            if(userEmail == emails[i]){
                flag=true;
            }
        }

        // output
        if(flag == true){
            resultElement.innerText="La email inserita è presente nella lista";
        }else{
            resultElement.innerText="La email inserita non è presente nella lista";
            choiceElement.className="active";
        }



    }
)



btnYesElement.addEventListener("click", 
    function(){
        const userEmail = document.querySelector("#email");

        // aggiunta della email nell'array
        emails.push(userEmail.value);
        alert("email aggiunta con successo");

        // pulizia della casella di testo
        userEmail.value="";
        choiceElement.className="";
    }
)


btnNoElement.addEventListener("click", 
    function(){

        const userEmail = document.querySelector("#email");

        // pulizia della casella di testo
        userEmail.value="";

        // collasso dello span 
        choiceElement.className="";
    }
)