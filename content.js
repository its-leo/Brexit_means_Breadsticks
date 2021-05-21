var elementsInsideBody = [...document.body.getElementsByTagName('*')];

var incomingList = [{
  f: "Brexit",
  t: ["Breadsticks"]
},{
  f: "Bernd Höcke",
  t: ["Björn Höcke"]
},{
  f: "AKK",
  t: ["AKK-47", "AKKKK", "CDUzi"]
},{
  f: /(?:Annegret )?Kramp[ -]Karrenbauer/gi,
  t: ["Annegret Kampf-Knarrenbauer", "Annegret Kramp-Karrenbauer-Kramer-Korbklemmer"]
},{
  f: /(?:Julia )?Klöckner/gi,
  t: ["Julia Cini-Mini","Julia Nesquik","Julia Nescafe","Julia Nespresso", "Die Weinkönigin"]
},{
  f: /(?:Armin )?Laschet/gi,
  t: ["Würfel-Armin"]
},{
  f: /(?:Olaf )?Scholz/gi,
  t: ["Giro-Olaf"]
},{
  f: /(?:Donald )?Trump/gi,
  t: ["Florida Man "]
},{
  f: "Kanzler",
  t: ["Imperator"]
},{
  f: /(?:Partei)/gi,
  t: ["Klapsmühle"]
},{
  f: /(?:Andreas |Andi |Andy )?[S]{1}cheuer/gi,
  t: ["Roller-Andi","Andi B. Scheuert", "Stullen-Andi"]
},{
  f: "DDR",
  t: ["Bananen-freie Zone"]
},{
  f: "Österreich",
  t: ["Hinter Bayern"]
},{
  f: "Kirche",
  t: ["Kirsche","Bingo-Gruppe"]
},{
  f: "Christlich",
  t: ["Moralisch-flexibel"]
},{
  f: "Englisch",
  t: ["Angelsächsisch"]
},{ 
  f: /(?:Winfried )?Kretschmann/gi,
  t: ["Er"]
},{
  f: /(?:Angela )?Merkel/gi,
  t: ["Mutti"]
},{
  f: /(?:Karl-Theodor zu )?Guttenberg/gi,
  t: ["Der Kopierer"]
},{
  f: /(?:Annalena )?Baerbock/gi,
  t: ["Die Annalena", "Annalena Bärbaum"]
}]


function chooseRandom(){

}
// This makes an array of everything inside the body tag

//a function that loops through every single item
function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
      }
    });
  });
}

function replaceText (node) {
  let value = node.nodeValue;
let item

incomingList.forEach(element =>{
    item = element.t[Math.floor(Math.random() * element.t.length)];
    value = value.replace(element.f, item)
  }); 
 
  node.nodeValue = value;
}

window.onload = findAndReplace();