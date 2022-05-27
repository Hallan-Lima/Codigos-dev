/**
 * 
 * código desenvolvido para abrir seção assim que o usuário entrar em uma pagina especifica do site de um cliente
 * 
 */

setInterval(() => { 
    UrlProduto = window.document.URL;
    UrlProduto = UrlProduto.split('/');
    if (UrlProduto = 'products') {
        composition = document.getElementsByClassName('tabs__title tabs__title-2 active');
        if (composition) {
            btnOpen = document.getElementsByClassName('accordion')[3];
            conteudo = document.getElementsByClassName('accordion-content')[3];
            btnOpen.classList.add('is-open');
            conteudo.style = ('max-height: 205px');
        }else{
            btnOpen = document.getElementsByClassName('accordion')[3];
            conteudo = document.getElementsByClassName('accordion-content')[3];
            btnOpen.classList.remove('is-open');
            conteudo.style = ('');
        }
        composition = document.getElementsByClassName('tabs__title tabs__title-3 active');
        if (composition) {
            btnOpen = document.getElementsByClassName('accordion')[4];
            conteudo = document.getElementsByClassName('accordion-content')[4];
            btnOpen.classList.add('is-open');
            conteudo.style = ('max-height: 205px');
        }else{
            btnOpen = document.getElementsByClassName('accordion')[4];
            conteudo = document.getElementsByClassName('accordion-content')[4];
            btnOpen.classList.remove('is-open');
            conteudo.style = ('');
        }
    }
 }, 1000);