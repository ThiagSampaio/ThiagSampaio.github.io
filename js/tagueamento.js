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

$("#btn-contato").on("click", () => sendContatoEvent())
$("#btn-download").on("click", () => sendDownloadEvent())
$("#nome").on("click", () => sendNameEvent())
$("#email").on("click", () => sendEmailEvent())
$("#telefone").on("click", () => sendTelEvent())
$("#enviar").on("click", () => sendEnviarEvent())

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

function check_box(obj) {
    if ($(obj).is(":checked")) {
        ga("send", {
            hitType: "event",
            eventCategory: "contato",
            eventAction: "aceito",
            eventLabel: "preencheu"
        });
    } else {
        console.log('desmarcado')
    }
}

function sendEnviarEvent() {
    ga("send", {
        hitType: "event",
        eventCategory: "contato",
        eventAction: "enviado",
        eventLabel: "enviado"
    });
}