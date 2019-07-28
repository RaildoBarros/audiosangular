var title = "A obra da Cruz Irmã Hamutal Rocha.mp3";
var arr = title.split(" ");


var tema = "";
var index_preletor = arr.indexOf("Preletor");
var index_preletora = arr.indexOf("Preletora");
var index_pregador = arr.indexOf("Pregador");
var index_pregadora = arr.indexOf("Pregadora");
var index_pr = arr.indexOf("Pr.");
var index_pra = arr.indexOf("Pra.");
var index_irmao = arr.indexOf("Irmão");
var index_irma = arr.indexOf("Irmã");
var preletor = "";

if (index_preletor != -1){
    for (var i = index_preletor + 1; i < arr.length; i++) {
        preletor += arr[i];
        if (i != arr.length - 1) {
            preletor += " ";
        }
    }
    tema = title.replace(arr[index_preletor] + " " + preletor,"");
} else if (index_preletora != -1){
    for (var i = index_preletora + 1; i < arr.length; i++) {
        preletor += arr[i];
        if (i != arr.length - 1) {
            preletor += " ";
        }
    }
    tema = title.replace(arr[index_preletora] + " " + preletor,"");
} else if (index_pregador != -1){
    for (var i = index_pregador + 1; i < arr.length; i++) {
        preletor += arr[i];
        if (i != arr.length - 1) {
            preletor += " ";
        }
    }
    tema = title.replace(arr[index_pregador] + " " + preletor,"");
} else if (index_pregadora != -1){
    for (var i = index_pregadora + 1; i < arr.length; i++) {
        preletor += arr[i];
        if (i != arr.length - 1) {
            preletor += " ";
        }
    }
    tema = title.replace(arr[index_pregadora] + " " + preletor,"");
} else if (index_pr != -1) {
    for (var i = index_pr; i < arr.length; i++) {
        preletor += arr[i];
        if (i != arr.length - 1) {
            preletor += " ";
        }
    }
    tema = title.replace(" " + preletor,"");
} else if (index_pra != -1) {
    for (var i = index_pra; i < arr.length; i++) {
        preletor += arr[i];
        if (i != arr.length - 1) {
            preletor += " ";
        }
    }
    tema = title.replace(" " + preletor,"");
} else if (index_irmao != -1){
    for (var i = index_irmao; i < arr.length; i++) {
        preletor += arr[i];
        if (i != arr.length - 1) {
            preletor += " ";
        }
    }
    tema = title.replace(" " + preletor,"");
} else if (index_irma != -1){
    for (var i = index_irma; i < arr.length; i++) {
        preletor += arr[i];
        if (i != arr.length - 1) {
            preletor += " ";
        }
    }
    tema = title.replace(" " + preletor,"");
}

preletor = preletor.replace(".mp3","");
