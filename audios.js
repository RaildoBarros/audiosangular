var dados = [];

// Lista o conteúdo da pasta gravações
function doGet() {
    var anos = Drive.Files.list({
        q:"'1iBH5ooMS1PUGWm0ZiHVxhAsPt29w-J8D' in parents and not trashed",
        fields: 'nextPageToken, items(id, title)',
    }).items;

    for (var i = 0; i < anos.length; i++) {
        var ano = anos[i];
        //dadosAnos[ano.title] = {};
        listMeses(ano);
    }

    return ContentService.createTextOutput(JSON.stringify(dados))
        .setMimeType(ContentService.MimeType.JSON);
}

// Lista os meses de determinado ano
function listMeses(ano) {
    var meses = Drive.Files.list({
        q: "'" + ano.id + "'" + " in parents and not trashed",
        fields: 'nextPageToken, items(id, title)',
    }).items;

    for (var i = 0; i < meses.length; i++) {
        var mes = meses[i];
        //dadosMeses[mes.title] = {};
        listPastas(mes);
    }

}

// Lista as pastas dentro dos mês
function listPastas(mes) {
    var pastas = Drive.Files.list({
        q: "'" + mes.id + "'" + " in parents and not trashed",
        fields: 'nextPageToken, items(id, title)',
    }).items;
    for (var i = 0; i < pastas.length; i++) {
        var pasta = pastas[i];
        //dadosPastas[pasta.title] = {};
        listAudios(pasta);
    }

}

// Lista os áudios de determinado mês
function listAudios(pasta) {
    var audios = Drive.Files.list({
        q: "'" + pasta.id + "'" + " in parents and not trashed",
        fields: 'nextPageToken, items(id, title, downloadUrl, embedLink, webContentLink, fileSize)',
    }).items;

    if (audios.length != 0){
        for (var i = 0; i < audios.length; i++) {
            var audio = audios[i];

            extrairDadosAdicionais(audio);
            dados.push(audio);

        }

    };
}

// Extrai a data do aúdio
function extrairDadosAdicionais(audio){
    var arr = audio.title.split(" ");
    var split = arr[1].split(".");

    var date = new Date(split[1]+"/"+split[0]+"/20"+split[2]);
    audio.date = date;


    var tema = "";

    for (var i = 2; i < arr.length; i++) {
        tema += arr[i];
        if (i != arr.length - 1) {
            tema += " ";
        }
    }
    tema = tema.replace(".mp3","");
    //dadosAudios[audio.title].tema = tema;
    audio.tema = tema;

}



// Lista
function listConteudo() {
    var conteudos = Drive.Files.list({
        fields: 'nextPageToken, items(id, title)',
    }).items;

    for (var i = 0; i < conteudos.length; i++) {
        var conteudo = conteudos[i];
        Logger.log(conteudo);
    }

}
