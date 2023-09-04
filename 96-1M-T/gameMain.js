const p1Name = localStorage.getItem("p1Name");
const p2Name = localStorage.getItem("p2Name");

let p1Score = 0;
let p2Score = 0;

let questionCount= 0
let word;


writeScore();
writeQA();

function writeScore(){
    document.getElementById("p1Name").innerHTML = p1Name + ":";
    document.getElementById("p2Name").innerHTML = p2Name + ":";
}

function writeQA(){
    let question, answer;
        if (questionCount % 2 == 0){
            question = p1Name;
            answer = p2Name;
        }else{
            question = p1Name;
            answer = p2Name;
        }
        document.getElementById("playerQuestion").innerHTML = "turno de pergunta:" + question;
        document.getElementById("playerAnswer").innerHTML = "turno de resposta:" + answer;

}

function send() {
    word = document.getElementById("word").ariaValueMax;
    word = word.toLowerCase();
    console.log("Palavra: " + word);
    let wordReplace = word;

    const wordLenght = word.length;
    console.log("Length: " + wordLength);

    if(wordLength >= 5) {
        const charIndex = new Set();
        while (charIndex.size < 3) {
            const randomIdex = Math.floor(Math.random() * wordLength)
            charIndex.add(ramdomIndex);
        }
        console.log(charIndex);

            for (const index of charIndex.values())
            console.log("Index: " + index);
            const char = word [index];
            console.log("Char: " + char);
            wordReplace = replaceAt(wordReplace, index, "_");
            console.log(wordReplace);

            const wordDisplay = "<h4 id='wordDisplay' class='display-4>" + wordReplace + "</h4>";
            const inputAnswer = "<label class='col-form-label'>Resposta: </label>" +
                "<input id='answer' type='text' class='form-control' placeholder='resposta'>"
            const button = "<button onclick='check()' class='btn btn-warning col-6 mx-auto'>Checar</button>"
            const outputHtml = wordDisplay + inputAnswer + button;
            
            document.getElementById("output").innerHTML = outputHtml;

            document.getElementById("input").style.display = "none";
            document.getElementById("enviar").style.display = "none";
            
    }
}