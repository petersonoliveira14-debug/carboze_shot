import './Tech.css'

export default function Tech() {
  return (
    <section className="tech section" id="tech">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Informações técnicas</span>
          <h2 className="section-title">
            FEITO PARA<br />
            <em>MOTOCICLETAS</em>
          </h2>
        </div>

        <div className="tech__grid">
          <div className="tech__card glass-card">
            <div className="tech__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4l3 3"/>
              </svg>
            </div>
            <div>
              <h3>Exclusivo para motos</h3>
              <p>Formulado especificamente para as características dos motores de motocicletas.</p>
            </div>
          </div>

          <div className="tech__card glass-card">
            <div className="tech__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div>
              <h3>Todos os combustíveis</h3>
              <p>Compatível com gasolina comum, aditivada e etanol.</p>
            </div>
          </div>

          <div className="tech__card glass-card">
            <div className="tech__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M20 14.5v-5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5"/>
                <path d="M4 17h16a2 2 0 0 1 0 4H4a2 2 0 0 1 0-4z"/>
                <path d="M9 7.5V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.5"/>
              </svg>
            </div>
            <div>
              <h3>Dose única 10 mL</h3>
              <p>Sache individual para uso em cada abastecimento. Prático e sem desperdício.</p>
            </div>
          </div>

          <div className="tech__card glass-card">
            <div className="tech__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <div>
              <h3>Dosagem máxima 2 mL/L</h3>
              <p>Não exceder 2 mL por litro de combustível, salvo orientação do seu mecânico.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  )
}
