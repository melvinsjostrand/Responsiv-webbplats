
let json = [
    {    
        "img": "david.jpg",
        "imgText": "david",
        "text":"David jobbar på teknikum skola i växjö. han är jobbig :)"
        
    },
    {    
        "img": "bigben.jpg",
        "imgText": "Big Ben",
        "text":" Big Ben: En Ikonisk Symbol för London. Big Ben, den ikoniska klockan som pryder Palace of Westminster i London, har blivit en symbol för både staden och Storbritannien som helhet. Trots att många tror att Big Ben är namnet på klocktornet självt, är det egentligen benämningen på den stora klockan inuti. Klockan, som väger imponerande 13,5 ton, installerades 1859 och är känt för sitt karakteristiska klockslag. Ursprungligen döptes klockan till Great Bell, men blev snabbt känd som Big Ben efter Sir Benjamin Hall, den ansvariga byggledaren Big Ben och dess klocktorn är en viktig del av Londons skyline och har överlevt både tidens gång och historiska händelser. Klockan har under årens lopp ringt in viktiga ögonblick, från kungliga jubileer till nyårsfiranden. Trots att byggnaden genomgår för närvarande renoveringar för att bevara dess skönhet och historia för framtida generationer, förblir Big Ben en stark symbol för Londons rika kulturarv och en av de mest välkända landmärkena i världen."
    },
    {    
        "img": "teknikum.jpg",
        "imgText": "Teknikum",
        "text":"Teknikum är ett namn som används för olika tekniska skolor och utbildningsinrättningar runt om i världen. Utan specifik information om vilken Teknikum-skola du refererar till, kan jag ge dig en allmän översikt. Teknisk skola:Teknikum-skolor är ofta tekniska utbildningsinrättningar som fokuserar på att ge studenterna praktisk och teoretisk kunskap inom olika teknik- och ingenjörsområden."
    },
    {
        "img": "fizz.jpg",
        "imgText": "Fizz",
        "text":"Fizz är en champion i det populära onlinespelet League of Legends (LoL). Han är känd som en assassinkaraktär och tillhör rollen som mid-lane eller jungler. Här är några grundläggande fakta om Fizz: Roll och position: Fizz är främst en assassin och är vanligtvis sett på mid-lane, men han kan också fungera som en jungler."
    }
]

let main;

function init(){
    main = document.getElementsByTagName("main")[0];
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