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

// ENVIAR EVENTO DE CLIQUE PARA ANALYTICS AO CLICAR NO BOTÃO DO WHATSAPP 
document.querySelector('.floating-btn').addEventListener('click', function(e) {
  e.preventDefault(); // Impede o comportamento padrão do link
  gtag('event', 'click_whatsapp', { 'event_category': 'Engagement', 'event_label': 'WhatsApp Button' });
  window.open(this.href, '_blank'); // Abre o link do WhatsApp após o evento
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

// Enviar evento para o Google Analytics ao enviar o formulário
gtag('event', 'form_submission', { 'event_category': 'Engagement', 'event_label': 'Contact Form' });

// Adicionar um pequeno atraso para garantir que o evento seja enviado
setTimeout(function() {
  window.open(url, "_blank");
}, 200);
});