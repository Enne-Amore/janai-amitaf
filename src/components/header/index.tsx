export function Header() {
  return (
    <header>
      <div>
        <span
          className="material-symbols-outlined sr-only icone"
          id="menu"
          aria-hidden="true"
          aria-label="Ícone de menu de navegação"
          tabIndex={0}
        >
          menu
        </span>

        <div>
          <h1>Janai Amitáf Produções</h1>

          <h2>Estórias, ilustrações e editoração</h2>
        </div>
      </div>
    </header>
  );
}
