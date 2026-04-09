import Logo from './Logo'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo size={120} />
            <p className="footer__tagline">Vacine o seu combustível.</p>
          </div>

          <div className="footer__links">
            <div className="footer__link-group">
              <h4>Produto</h4>
              <nav>
                <a href="#product">O que é</a>
                <a href="#benefits">Benefícios</a>
                <a href="#how-to">Como usar</a>
                <a href="#tech">Especificações</a>
              </nav>
            </div>
            <div className="footer__link-group">
              <h4>Contato</h4>
              <nav>
                <a href="mailto:sac@carboze.com.br">sac@carboze.com.br</a>
                <a href="https://instagram.com/ocarboze" target="_blank" rel="noopener noreferrer">@ocarboze</a>
                <a href="https://carboze.com.br" target="_blank" rel="noopener noreferrer">carboze.com.br</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copy">&copy; {year} CarboZé. Todos os direitos reservados.</p>
          <p className="footer__legal">
            Produzido sob licença de GB COMERCIO INTERNACIONAL LTDA — CNPJ 70.159.512/0001-80.
            Envasado por RESINORTE INDUSTRIA DE POLIMEROS S/A.
            Químico responsável: CRQ nº 04219953.
          </p>
        </div>
      </div>
    </footer>
  )
}
