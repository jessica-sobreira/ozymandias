document.addEventListener('DOMContentLoaded', () => {
  // Verificar se está logado
  if (localStorage.getItem('isLoggedIn') !== 'true' && window.location.pathname.includes('admin.html')) {
    window.location.href = 'login.html';
  }

  // Ação de Login simples
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const pass = document.getElementById('login-password').value;

      // Defina o e-mail e senha de acesso do Lucas aqui:
      if (email === 'r8x4q7m.z2k@gmail.com' && pass === 'senha123') {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'admin.html';
      } else if (email === 'j.jecristina@gmail.com' && pass === 'senha123') {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'admin.html';
      } else {
        document.getElementById('login-error').innerText = 'E-mail ou senha incorretos.';
      }
    });
  }

    // Ação de Logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'login.html';
      });
    }
    



    // Redirecionar para login se não estiver logado
    if (window.location.pathname.includes('admin.html') && localStorage.getItem('isLoggedIn') !== 'true') {
      window.location.href = 'login.html';
    }
  });

 