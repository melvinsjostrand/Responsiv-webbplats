


let main;
let img;
let figure;
let figCaption;
let p;
function init(){
    main = document.getElementsByTagName("main")[0];
    console.log(main);
    createMain();
}
window.onload = init();

function createMain(){
    for(i = 0; i < 4; i++){
        figure = document.createElement("figure");
        console.log(figure);
        main.appendChild(figure);
        img = document.createElement("img");
        img.src = "david.jpg";
        figCaption = document.createElement("figcaption");
        figCaption.innerHTML = "David";
        figure.appendChild(img);
        figure.appendChild(figCaption);
        p = document.createElement("p");
        main.appendChild(p);
        p.innerHTML = "Whole every miles as tiled at seven or. Wished he entire esteem mr oh by. Possible bed you pleasure civility boy elegance ham. He prevent request by if in pleased. Picture too and concern has was comfort. Ten difficult resembled eagerness nor. Same park bore on be. Warmth his law design say are person. Pronounce suspected in belonging conveying ye repulsive. That know ask case sex ham dear her spot. Weddings followed the all marianne nor whatever settling. Perhaps six prudent several her had offence. Did had way law dinner square tastes. Recommend concealed yet her procuring see consulted depending. Adieus hunted end plenty are his she afraid. Resources agreement contained propriety applauded neglected use yet.";
    }
}