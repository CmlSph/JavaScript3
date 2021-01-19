const h1 = document.createElement("h1");
h1.innerText = "Let's play some Trivia!";
document.body.appendChild(h1);

const p1 = document.createElement("p");
p1.innerText = `Try your best to figure out the answer. If you really have no clue, click on the question to reveal the answer...`;
document.body.appendChild(p1);

const url = ('https://opentdb.com/api.php?amount=5');

async function getTheRandomString() {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

async function main(){
    const string1 = await getTheRandomString();
    
for (let i = 0; i < 5; i++){
    console.log(string1)
    console.log(string1.results[i].question);
    console.log(string1.results[i].correct_answer);

    const question = string1.results[i].question.replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");

    const button = document.createElement("button");
    button.innerText = question;
    document.body.appendChild(button);
    
    const div = document.createElement("div");
    const p = document.createElement("p");
        p.innerText = string1.results[i].correct_answer;
    div.appendChild(p);
    document.body.appendChild(div);
    div.style.display = "none";

    button.addEventListener("click", function() {
        this.classList.toggle("active");
        var div = this.nextElementSibling;
        if (div.style.display === "block") {
          div.style.display = "none";
        } else {
          div.style.display = "block";
        }
    })

    

}
}
main().then(()=> {
    console.log("Done!")
})




