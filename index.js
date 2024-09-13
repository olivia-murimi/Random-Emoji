const btnEl document.getElementById("btn");
const emojiNameEl document.getElementById("emoji-name");


const emoji = [];

async function getEmoji(){
  let response = await fetch("https://emoji-api.com/emojis?access_key=01b2ac974afedea89e2a3acc761de577efe5cb38")

  data = await response.json()

  for (let i=0; i<1500;i++){
    emoji.push({
       emojiName: data[i].character,
       emojiCode: data[i].unicodeName,
    })
  }
}

getEmoji()

btnEl.addEventListener("click", ()=>{

})