document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile Toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = hamburger.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  }

  // FECHAR MENU AO CLICAR EM UM LINK (MOBILE)
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  });

  // 2. Destacar link ativo conforme a rolagem da página (ScrollSpy)
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 3. Simulação de envio do formulário de contato
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerText;

      submitBtn.innerText = 'Enviando...';
      submitBtn.disabled = true;

      setTimeout(() => {
        alert('Mensagem enviada com sucesso! A equipe Centrah entrará em contato em breve.');
        contactForm.reset();
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }
});

function openModalWithProfile(profileValue) {
  // Abre o modal
  toggleModal(true);
  
  // Pré-seleciona a opção correspondente no select de perfil
  const selectElement = document.querySelector('#contact-form select[name="perfil"]');
  if (selectElement) {
    selectElement.value = profileValue;
  }
}


function handleContactAction(type) {
  if (type === 'whatsapp') {
    const phoneNumber = "5551996754156"; // Digite o número real aqui
    const message = encodeURIComponent("Olá! Gostaria de solicitar uma proposta para minha empresa.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  } else {
    toggleModal(true);
  }
}

// 3. Envio real do formulário de contato via Formspree
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault(); // Impede o redirecionamento padrão da página

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerText;

      submitBtn.innerText = 'Enviando...';
      submitBtn.disabled = true;

      const formData = new FormData(contactForm);

      try {
        const response = await fetch(contactForm.action, {
          method: contactForm.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          alert('Sua mensagem foi enviada com sucesso! A equipe Ozymandias entrará em contato em breve.');
          contactForm.reset();
        } else {
          alert('Ocorreu um erro ao enviar. Verifique se o e-mail do Formspree já foi confirmado.');
        }
      } catch (error) {
        alert('Erro de rede ao tentar enviar a mensagem.');
      } finally {
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
      }
    });
  }


document.addEventListener('DOMContentLoaded', () => {
  const colabsGrid = document.querySelector('.colabs-grid');
  
  if (colabsGrid) {
    const savedColabs = JSON.parse(localStorage.getItem('site_colabs')) || [];
    
    // Adiciona cada Colab guardado no LocalStorage
    savedColabs.forEach(colab => {
      const card = document.createElement('div');
      card.className = 'colab-card'; // Aplica a classe principal do CSS
      
      card.innerHTML = `
        <div class="colab-tag">${colab.tag}</div>
        <h3>${colab.title}</h3>
        <p>${colab.desc}</p>
        <div class="metrics">
          <span><i class="fa-solid fa-eye"></i> ${colab.views}</span>
          <span><i class="fa-solid fa-heart"></i> ${colab.likes}</span>
        </div>
      `;
      
      colabsGrid.appendChild(card);
    });
  }
});