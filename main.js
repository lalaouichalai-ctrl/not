// Smooth active link highlight
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.menu a').forEach(a=>{
  if(a.getAttribute('href')===path){ a.classList.add('active'); }
});

// Contact form (mailto + message)
const contactForm = document.getElementById('contact-form');
if(contactForm){
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const form = e.target;
    const nom = form.nom.value.trim();
    const email = form.email.value.trim();
    const sujet = form.sujet.value.trim();
    const message = form.message.value.trim();
    const to = 'cabinet@me-thouault.online';
    const mailto = `mailto:${to}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent('De: '+nom+' <'+email+'>\\n\\n'+message)}`;
    window.location.href = mailto;
    const out = document.getElementById('contact-msg');
    if(out){ out.textContent = 'Votre message a bien été envoyé.'; }
    form.reset();
  });
}