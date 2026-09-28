// Menu mobile toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Filtro interativo de horários (Placar Style)
function filtrarHorarios(categoria) {
    const itens = document.querySelectorAll('.horario-item');
    const btnTodos = document.getElementById('btn-todos');
    const btnBoxe = document.getElementById('btn-boxe');
    const btnKickboxing = document.getElementById('btn-kickboxing');

    // Reset de estilos dos botões
    [btnTodos, btnBoxe, btnKickboxing].forEach(btn => {
        btn.className = "px-6 py-2.5 rounded-xl font-bold text-sm bg-neutral-900 border border-white/10 text-giz hover:text-white transition-all";
    });

    // Ativa o botão selecionado
    if (categoria === 'todos') {
        btnTodos.className = "px-6 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-corner to-amber text-white shadow-lg transition-all";
    } else if (categoria === 'boxe') {
        btnBoxe.className = "px-6 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-corner to-amber text-white shadow-lg transition-all";
    } else if (categoria === 'kickboxing') {
        btnKickboxing.className = "px-6 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-corner to-amber text-white shadow-lg transition-all";
    }

    // Filtra os itens da grade
    itens.forEach(item => {
        const cat = item.getAttribute('data-cat');
        if (categoria === 'todos' || cat === categoria) {
            item.style.display = 'grid';
        } else {
            item.style.display = 'none';
        }
    });
}