(function(){
  // Año dinámico
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Menú móvil
  const toggle = document.getElementById('menuToggle');
  const mobile = document.getElementById('menuMobile');
  if (toggle && mobile){
    toggle.addEventListener('click', () => {
      mobile.style.display = mobile.style.display === 'block' ? 'none' : 'block';
    });
    mobile.addEventListener('click', e => {
      if (e.target.tagName === 'A'){ mobile.style.display = 'none'; }
    });
  }
})();

(function(){
  const form = document.getElementById('contactForm');

  // Cambia este número por tu WhatsApp (con código de país)
  const phone = "50376707431"; // 

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Evita que recargue la página

      // Tomar los valores del formulario
      const name = document.getElementById('name').value.trim();
      const contact = document.getElementById('contact').value.trim();
      const message = document.getElementById('message').value.trim();

      // Crear mensaje para WhatsApp
      const text = `Hola, soy ${name}. Mi contacto es ${contact}. 
Quisiera más información sobre: ${message}`;

      // Convertir a URL segura
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

      // Abrir WhatsApp en una nueva pestaña
      window.open(url, '_blank');
    });
  }
})();



