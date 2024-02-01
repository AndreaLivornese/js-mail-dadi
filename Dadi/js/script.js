// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


const buttonElement = document.querySelector("#btn");

buttonElement.addEventListener("click",
    function(){
        const userElement=document.querySelector("#user");
        const cpuElement=document.querySelector("#cpu");
        const resultElement=document.querySelector("#result");

        // generazione di un numero casuale per l'utente
        userDices= Math.floor(Math.random() * 6 + 1);
        userElement.innerText="Ti è uscito il numero: " + userDices;
       

        // generazione di un numero casuale per la cpu
        cpuDices= Math.floor(Math.random() * 6 + 1);
        cpuElement.innerText="Alla CPU è uscito il numero: " + cpuDices;


        if(userDices == cpuDices){
            resultElement.innerText="Pareggio";
            resultElement.style.color= "gray";
        }else if(userDices > cpuDices){
            resultElement.innerText="Vittoria";
            resultElement.style.color= "green";
        }else{
            resultElement.innerText="Sconfitta";
            resultElement.style.color= "red";
        }


    }
)