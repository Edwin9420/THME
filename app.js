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




