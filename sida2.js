
let json = [
    {    
        "img": "david.jpg",
        "imgText": "david",
        "category": "hej",
        "text":"David jobbar på teknikum skola i växjö. han är jobbig :)"
        
    },
    {    
        "img": "bigben.jpg",
        "imgText": "Big Ben",
        "category": "hej",
        "text":" Big Ben: En Ikonisk Symbol för London. Big Ben, den ikoniska klockan som pryder Palace of Westminster i London, har blivit en symbol för både staden och Storbritannien som helhet. Trots att många tror att Big Ben är namnet på klocktornet självt, är det egentligen benämningen på den stora klockan inuti. Klockan, som väger imponerande 13,5 ton, installerades 1859 och är känt för sitt karakteristiska klockslag. Ursprungligen döptes klockan till Great Bell, men blev snabbt känd som Big Ben efter Sir Benjamin Hall, den ansvariga byggledaren Big Ben och dess klocktorn är en viktig del av Londons skyline och har överlevt både tidens gång och historiska händelser. Klockan har under årens lopp ringt in viktiga ögonblick, från kungliga jubileer till nyårsfiranden. Trots att byggnaden genomgår för närvarande renoveringar för att bevara dess skönhet och historia för framtida generationer, förblir Big Ben en stark symbol för Londons rika kulturarv och en av de mest välkända landmärkena i världen."
    },
    {    
        "img": "teknikum.jpg",
        "imgText": "Teknikum",
        "category": "hej",
        "text":"Teknikum är ett namn som används för olika tekniska skolor och utbildningsinrättningar runt om i världen. Utan specifik information om vilken Teknikum-skola du refererar till, kan jag ge dig en allmän översikt. Teknisk skola:Teknikum-skolor är ofta tekniska utbildningsinrättningar som fokuserar på att ge studenterna praktisk och teoretisk kunskap inom olika teknik- och ingenjörsområden."
    },
    {
        "img": "fizz.jpg",
        "imgText": "Fizz",
        "category": "hej2",
        "text":"Fizz är en champion i det populära onlinespelet League of Legends (LoL). Han är känd som en assassinkaraktär och tillhör rollen som mid-lane eller jungler. Här är några grundläggande fakta om Fizz: Roll och position: Fizz är främst en assassin och är vanligtvis sett på mid-lane, men han kan också fungera som en jungler."
    }
]

let main;
let filteredArray;
function init(){
    main = document.getElementsByTagName("main")[0];
    classw();
    let highest = document.getElementById("highest");
    let name = document.getElementById("name");
    let lowest = document.getElementById("lowest");
    name.addEventListener("click" , event =>{
        swap1Reverse();
        console.log("hej");
    })
    highest.addEventListener("click" , event =>{
        swap1();
        console.log("hej");
    })
    lowest.addEventListener("click" , event =>{
        filter();
        console.log("hej");
    })

    createMainJson();
}
window.onload = init();


function createMainJson(){
    console.log(json);
    let img;
    let figure;
    let figCaption;
    let p;
    for(i = 0; i < json.length; i++){
        figure = document.createElement("figure");
        main.appendChild(figure);
        img = document.createElement("img");
        img.src = json[i].img;
        figCaption = document.createElement("figcaption");
        figCaption.innerHTML = json[i].imgText;
        figure.appendChild(img);
        figure.appendChild(figCaption);
        p = document.createElement("p");
        main.appendChild(p);
        p.innerHTML = json[i].text;
    }
}


function createMainJsonCat(){
    console.log(filteredArray);
    let img;
    let figure;
    let figCaption;
    let p;
    for(i = 0; i < filteredArray.length; i++){
        figure = document.createElement("figure");
        main.appendChild(figure);
        img = document.createElement("img");
        img.src = json[i].img;
        figCaption = document.createElement("figcaption");
        figCaption.innerHTML = json[i].imgText;
        figure.appendChild(img);
        figure.appendChild(figCaption);
        p = document.createElement("p");
        main.appendChild(p);
        p.innerHTML = json[i].text;
    }
}
function swap1Reverse(){
    json.sort((a, b) => {
        const textA = a.kostnad;
        const textB = b.kostnad;

        if (textA < textB) {
            return -1;
        }
        if (textA > textB) {
            return 1;
        }
        return 0;
    });
    json.reverse();
    main.innerHTML = '';
    createMainJson();
    console.log(json)
}

function filter(){
    filteredArray = json.filter(item => item.category=== "hej");
    console.log(filteredArray);
    main.innerHTML = '';
    createMainJsonCat();

}
function classw(){
    let sideBar = document.getElementById("1");
    var divElement = document.createElement("div");
    sideBar.appendChild(divElement);
    var highestButton = document.createElement("button");
    highestButton.innerHTML = "Highest";
    highestButton.id = "highest";
  
    var lowestButton = document.createElement("button");
    lowestButton.innerHTML = "Lowest";
    lowestButton.id = "lowest";
  
    var nameButton = document.createElement("button");
    nameButton.innerHTML = "Name";
    nameButton.id = "name";
  
 
    divElement.appendChild(highestButton);
    divElement.appendChild(lowestButton);
    divElement.appendChild(nameButton);
 }