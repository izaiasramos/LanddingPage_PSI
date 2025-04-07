// ROLAGEM PARA O TOPO:
document.querySelector('.scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();                                               // evita o comportamento padrão do link
    window.scrollTo({
      top: 0,                                                         // rola ate o topo
      behavior: 'smooth'                                              // rolagem suave
    });
  });


//SCRIPT PARA FECHAR O MENU MOBILE AO CLICAR FORA DELE
document.addEventListener('click', function(event) {
const collapseElement = document.getElementById('navbarToggleExternalContent');
const toggler = document.querySelector('.navbar-toggler');
if (toggler.contains(event.target)) return;
if (collapseElement.classList.contains('show') && !collapseElement.contains(event.target)) {
    let collapseInstance = bootstrap.Collapse.getInstance(collapseElement);
    if (!collapseInstance) {
    collapseInstance = new bootstrap.Collapse(collapseElement, { toggle: false });
    }
    collapseInstance.hide();
}
});


//SCRIPT PARA ENVIAR FORMULÁRIO  VIA WHATSAPP
document.getElementById('contactForm').addEventListener('submit', function(e) {
e.preventDefault();
var nome = document.getElementById('nome').value;
var email = document.getElementById('email').value;
var telefone = document.getElementById('telefone').value;
var mensagem = document.getElementById('mensagem').value;

// Monta a mensagem usando \n para quebras de linha
var texto = "Contato via Landing Page:\n" +
            "Nome: " + nome + "\n" +
            "E-mail: " + email + "\n" +
            "Telefone: " + telefone + "\n" +
            "Mensagem: " + mensagem;

// Substitua pelo seu número do WhatsApp com código do país (ex.: 55 para Brasil)
var numeroWhatsApp = "5511968174258";

// Cria a URL com os parâmetros da mensagem
var url = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(texto);
window.open(url, "_blank");
});