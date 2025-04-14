function abrirImagem() {
    window.open("https://drive.google.com/file/d/1ZQR-EIh4CH74F-LvDmQ5FHmzbzvuc3W3/view?usp=sharing", "_blank");
  }

  function lerAviso() {
    const texto = "Hoje termina o prazo para revisão do espelho de ponto. Após esse prazo, os ajustes serão bloqueados e não será permitida nenhuma alteração. Solicito aos gestores e colaboradores que realizem a devida revisão e autorizem as informações pendentes. Assim que tudo estiver correto, basta registrar o de acordo para concluir a revisão do ponto. Cordialmente, Recursos Humanos";
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    speechSynthesis.speak(fala);
  }
  
  const contrastSlider = document.getElementById('contrastSlider');
  contrastSlider.addEventListener('input', function () {
    const value = contrastSlider.value;
    document.body.style.filter = `contrast(${value}%)`;
  });

  const fontSizeSlider = document.getElementById('fontSizeSlider');
  const root = document.documentElement; // A raiz da página (html)

  fontSizeSlider.addEventListener('input', function () {
    const newSize = `${this.value}px`;
    root.style.setProperty('--base-font-size', newSize);
  });

  const popupToggle = document.getElementById('popupToggle');
  popupToggle.addEventListener('change', function () {
    const modais = document.querySelectorAll('.modal');
    modais.forEach(modal => {
      if (!this.checked) {
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
      }
    });
  });
  const toggleThemeBtn = document.getElementById('toggleThemeBtn');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Atualiza o texto do botão
  if (document.body.classList.contains('dark-mode')) {
    toggleThemeBtn.innerHTML = '☀️ Tema Claro';
    toggleThemeBtn.classList.remove('btn-dark');
    toggleThemeBtn.classList.add('btn-light');
  } else {
    toggleThemeBtn.innerHTML = '🌙 Tema Escuro';
    toggleThemeBtn.classList.remove('btn-light');
    toggleThemeBtn.classList.add('btn-dark');
  }
});