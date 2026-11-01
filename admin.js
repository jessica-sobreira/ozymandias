document.addEventListener('DOMContentLoaded', () => {
  // 1. Verificar se o utilizador está autenticado
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  
  if (isLoggedIn !== 'true') {
    // Se não estiver logado, redireciona para a página de login
    window.location.href = 'login.html';
    return;
  }

  // 2. Ação de Terminar Sessão (Logout)
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('isLoggedIn');
      window.location.href = 'login.html';
    });
  }

  // 3. Adicionar Novo Colab
  const colabForm = document.getElementById('colab-form');
  if (colabForm) {
    colabForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const newColab = {
        id: Date.now(), // Gera um ID único baseado no timestamp
        tag: document.getElementById('colab-tag').value,
        title: document.getElementById('colab-title').value,
        desc: document.getElementById('colab-desc').value,
        views: document.getElementById('colab-views').value,
        likes: document.getElementById('colab-likes').value
      };

      // Obter colabs já guardados ou iniciar um array vazio
      let colabs = JSON.parse(localStorage.getItem('site_colabs')) || [];
      
      // Adiciona o novo no início do array
      colabs.unshift(newColab);
      
      // Guarda no LocalStorage
      localStorage.setItem('site_colabs', JSON.stringify(colabs));

      alert('Colab publicado com sucesso!');
      colabForm.reset();
      
      // Atualizar a lista visível no painel admin
      renderAdminColabsList();
    });
  }

  // Renderizar a lista de colabs cadastrados na página de admin
  renderAdminColabsList();
});

// Função para listar e permitir remover Colabs dentro do painel (Versão Estilizada)
function renderAdminColabsList() {
  const container = document.getElementById('admin-colabs-list');
  if (!container) return;

  const colabs = JSON.parse(localStorage.getItem('site_colabs')) || [];
  container.innerHTML = '';

  if (colabs.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 20px;">Nenhum colab cadastrado até ao momento.</p>';
    return;
  }

  colabs.forEach(colab => {
    const item = document.createElement('div');
    item.style.cssText = `
      background: var(--bg-card, rgba(18, 20, 29, 0.7));
      border: 1px solid var(--border-color, rgba(255, 255, 255, 0.08));
      padding: 20px 24px;
      border-radius: 16px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      backdrop-filter: blur(12px);
    `;

    item.innerHTML = `
      <div>
        <span style="color: var(--primary-cyan, #00d2ff); font-size: 0.8rem; font-weight: 700; text-transform: uppercase;">${colab.tag}</span>
        <h4 style="margin: 6px 0; font-size: 1.1rem; color: #fff;">${colab.title}</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 8px;">${colab.desc}</p>
        <small style="color: #a78bfa; font-weight: 600;">
          <i class="fa-solid fa-eye"></i> ${colab.views} &nbsp;•&nbsp; <i class="fa-solid fa-heart"></i> ${colab.likes}
        </small>
      </div>
      <button onclick="deleteColab(${colab.id})" class="btn btn-secondary" style="padding: 8px 16px; font-size: 0.85rem; border-color: #ef4444; color: #ef4444; cursor: pointer;">
        <i class="fa-solid fa-trash"></i> Eliminar
      </button>
    `;

    container.appendChild(item);
  });
}

// Função global para remover um Colab específico
window.deleteColab = function(id) {
  if (confirm('Tem a certeza que deseja eliminar este Colab?')) {
    let colabs = JSON.parse(localStorage.getItem('site_colabs')) || [];
    colabs = colabs.filter(item => item.id !== id);
    localStorage.setItem('site_colabs', JSON.stringify(colabs));
    renderAdminColabsList();
  }
};