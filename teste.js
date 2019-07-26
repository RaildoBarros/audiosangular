var title = "A obra da Cruz Preletor Pr Jean Nogueira";
var arr = title.split(" ");



var index_preletor = arr.indexOf("Preletor");
var preletor = "";
if (index_preletor != -1){
    for (var i = index_preletor + 1; i < arr.length; i++) {
        preletor += arr[i];
        if (i != arr.length - 1) {
            preletor += " ";
        }
    }
}
