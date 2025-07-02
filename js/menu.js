// Abrir o menu
// Chamando a tag com uma constante
const btn_menu = document.getElementById('menu')
const menu = document.getElementById('modal-container')

// Aplicando a função de abrir o menu
btn_menu.addEventListener('click', () => {
    if (menu.style.display = 'none') {
        menu.style.display = 'block'
    }
})

// Acesso ao menu usando o teclado
btn_menu.addEventListener('keypress', (tecla) => {
    if (tecla.key === 'Enter') {
        tecla.target.click()
        btn_fechar.focus()
    }
})

// Sair do menu
// Chamada das tags por ID's
const transparencia = document.getElementById('transparencia')
const btn_fechar = document.getElementById('voltar')

// Aplicando função de sair do menu
transparencia.addEventListener('click', fecharMenu)
btn_fechar.addEventListener('click', fecharMenu)

function fecharMenu() {
    menu.style.display = 'none'
}

// Fechar menu usando o teclado
btn_fechar.addEventListener('keypress', (tecla) => {
    if (tecla.key === 'Enter') {
        tecla.target.click()
        btn_menu.focus()
    }
})
