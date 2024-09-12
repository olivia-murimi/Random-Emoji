const btnEl document.getElementById("btn");
const emojiNameEl document.getElementById("emoji-name");


const emoji = [];

async function getEmoji(){
  let response = await fetch("https://emoji-api.com/emojis?access_key=01b2ac974afedea89e2a3acc761de577efe5cb38")
}

getEmoji()

btnEl.addEventListener("click", ()=>{

})