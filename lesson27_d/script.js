let yandexTranslate = {

    allText: {},

    key: 'trnsl.1.1.20200507T115646Z.5e08ef55d79ff5b6.e198cd1a0d26bee8637ef015a0e2458f06e9f5e6',
    api: 'https://translate.yandex.net/api/v1.5/tr.json/translate',

    translate: function (id, callback) {
        let a = document.querySelector('.text_area');
        let text = a.value;

        document.getElementById(id).innerHTML = 'Перевод идёт, подождите...';

        let pathUrl = this.api + '?';
        let this_ = this;

        pathUrl += 'key=' + this.key;

        pathUrl += '&text=' + text;

        pathUrl += '&lang=en-ru';
        let ajax = new XMLHttpRequest();
        ajax.open('GET', pathUrl, true);
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    this_.allText[id] = text;
                    text = ajax.responseText;
                    text = JSON.parse(text);
                    text = text.text[0];
                   // callback (text);
                    document.getElementById(id).innerHTML = text;
                }
            }
        };
        ajax.send(null);
    },
    revert: function (id, callback) {
        let a = document.querySelector('.text_area');
        let text = a.value;

        document.getElementById(id).innerHTML = 'Перевод идёт, подождите...';

        let pathUrl = this.api + '?';
        let this_ = this;

        pathUrl += 'key=' + this.key;

        pathUrl += '&text=' + text;

        pathUrl += '&lang=ru-en';
        let ajax = new XMLHttpRequest();
        ajax.open('GET', pathUrl, true);
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    this_.allText[id] = text;
                    text = ajax.responseText;
                    text = JSON.parse(text);
                    text = text.text[0];
                    // callback (text);
                    document.getElementById(id).innerHTML = text;
                }
            }
        };
        ajax.send(null);
    }
};
