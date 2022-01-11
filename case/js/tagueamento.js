// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

//Thiago Sampaio 10/01/2022 

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');

const bt_contato = document.getElementById("btn-contato")
const bt_dowload = document.getElementById("btn-dowload")
const name_form = document.getElementById('nome')
const email_form = document.getElementById('email')
const telefone_form = document.getElementById('telefone')
const confirm_check_form = document.getElementById('aceito')

bt_contato.onclick = sendContatoEvent
bt_dowload.onclick = sendDownloadEvent
name_form.onblur = sendNameEvent
email_form.onblur = sendEmailEvent
telefone_form.onblur = sendTelEvent
confirm_check_form.onclick = sendCheckFormEvent



function sendContatoEvent() {
    ga("send", {
        hitType: "event",
        eventCategory: "menu",
        eventAction: "entre_em_contato",
        eventLabel: "link_externo"
    });
}

function sendDownloadEvent() {
    ga("send", {
        hitType: "event",
        eventCategory: "menu",
        eventAction: "download_pdf",
        eventLabel: "download_pdf"
    });
}

$(".card-montadoras").each(function () {
    $(this).on("click", () => {
        ga("send", {
            hitType: "event",
            eventCategory: "analise",
            eventAction: "ver_mais",
            eventLabel: $(this).data('name')
        });
    });
});

function sendNameEvent() {
    ga("send", {
        hitType: "event",
        eventCategory: "contato",
        eventAction: "nome",
        eventLabel: "preencheu"
    });
}

function sendEmailEvent() {
    ga("send", {
        hitType: "event",
        eventCategory: "contato",
        eventAction: "email",
        eventLabel: "preencheu"
    });
}

function sendTelEvent() {
    ga("send", {
        hitType: "event",
        eventCategory: "contato",
        eventAction: "telefone",
        eventLabel: "preencheu"
    });
}

function sendCheckFormEvent() {
    ga("send", {
        hitType: "event",
        eventCategory: "contato",
        eventAction: "aceito",
        eventLabel: "preencheu"
    });
}


