function showSummary(){
    let div = document.getElementById("seeMore");
    div.style.display = "block";
    let container = document.getElementById("container");
    container.style.gridTemplateRows = "4% 30% 21% 40% 15%";
    let showSeeMore = document.getElementById("showSeeMore");
    showSeeMore.style.display = "none";
    let hiddenSeemore = document.getElementById("hiddenSeeMore");
    hiddenSeemore.style.display = "inline";
}
function hiddenSummary(){
    let div = document.getElementById("seeMore");
    div.style.display = "none";
    let container = document.getElementById("container");
    container.style.gridTemplateRows = "5% 30% 11% 45% 15%";
    let hiddenSeemore = document.getElementById("hiddenSeeMore");
    hiddenSeemore.style.display = "none";
    let showSeeMore = document.getElementById("showSeeMore");
    showSeeMore.style.display = "inline";
}
function createTopic(){
    let createTopic = document.getElementById("createTopic");
    createTopic.style.display = "block"
    let shareIdeas = document.getElementById("shareIdeas");
    shareIdeas.style.display = "none";
}
function boldLatter(){
    let text = document.getElementById("textArea");
    text.style.fontWeight = "800";
    let boldButton = document.getElementById("bold");
    boldButton.style.backgroundColor = "#bcbdbd";
}
function italicLatter(){
    let text = document.getElementById("textArea");
    text.style.fontStyle = "italic";
    let italicButton = document.getElementById("italic");
    italicButton.style.backgroundColor = "#bcbdbd";
}
var send = document.getElementById("sendCommit");
var text = document.getElementById("topic");

send.addEventListener('click', function(event){
    event.preventDefault();
});

function creatDivTopic (){
    let allTopics = document.getElementById("allTopics");
    let textArea = document.getElementById("textArea").value;
    let topic = document.getElementById("topic").value;
    let divdaddy = document.createElement("div");
    divdaddy.className = "divDaddy"
    let div = document.createElement("div");
    div.style.opacity = "0.2"
    div.className = "question";
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let pre = document.createElement("p");
    pre.className = "p-commit"
    let br = document.createElement("br");
    let div2 = document.createElement("div");
    let input1 = document.createElement("input");
    input1.className = "more-info";
    input1.type = "button";
    let input2 = document.createElement("input");
    input2.className = "like";
    input2.type = "submit";
    input2.value = "";
    let h6 = document.createElement("h6");
    let h62 = document.createElement("h6"); 
    let img = document.createElement("img");
    img.src = "image/sucesse.svg"
    let pDaddy = document.createElement("p");
    let aDaddy = document.createElement("a");
    let writheA = document.createTextNode('Editar tópico');
    let section1 = document.createElement("section");
    section1.className = "section-daddy";
    let section2 = document.createElement("section");
    section2.className = "section-daddy";
    let section3 = document.createElement("section");
    section3.className = "section-daddy";
    section3.style.marginBottom = "-5%"


    h33 = document.createTextNode(topic);
    pp = document.createTextNode('Nome da pessoa, logada no google!'); /* aqui receberia o nome do usuario logado pelo google com comando BasicProfile.getName () */
    pree = document.createTextNode(textArea);
    h66 = document.createTextNode('1 like');
    h622 = document.createTextNode('1 resposta');
    pDaddy = document.createTextNode('Aguardando feedback dos autores');
    

    divdaddy.appendChild(section1);
    section1.appendChild(img);
    divdaddy.appendChild(section2);
    section2.appendChild(pDaddy);
    divdaddy.appendChild(section3);
    section3.appendChild(aDaddy);
    aDaddy.appendChild(writheA);
    
    divdaddy.appendChild(div);
    div.appendChild(h3);
    h3.appendChild(h33);
    div.appendChild(p);
    p.appendChild(pp);
    div.appendChild(pre);
    pre.appendChild(pree);
    div.appendChild(br);
    div.appendChild(div2);

    div2.appendChild(input1);
    div2.appendChild(input2);
    div2.appendChild(h6);
    h6.appendChild(h66);
    div2.appendChild(h62);
    h62.appendChild(h622);
    
    allTopics.appendChild(divdaddy);

    h3 = document.createTextNode('Assunto da Pergunta aparece aqui');
    p = document.createTextNode('Nome da pessoa!');
    pre = document.createTextNode('Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...');
    h6 = document.createTextNode('1 like');
    h62 = document.createTextNode('1 resposta');

    let sucesse = document.getElementById("sucesse");
    sucesse.style.display = "block"
    let createTopic = document.getElementById("createTopic");
    createTopic.style.display = "none"
    
}
function newTopic () {
    let createTopic = document.getElementById("createTopic");
    createTopic.style.display = "block"
    let sucesse = document.getElementById("sucesse");
    sucesse.style.display = "none"
    let textArea = document.getElementById("textArea").value;
    let topic = document.getElementById("topic").value;
    textArea.value = "";
    topic.value = "";
}










function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
}
function signOut() {
var auth2 = gapi.auth2.getAuthInstance();
auth2.signOut().then(function () {
console.log('User signed out.');
});
}
