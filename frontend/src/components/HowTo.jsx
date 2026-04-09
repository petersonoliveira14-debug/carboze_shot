import { useEffect, useRef } from 'react'
import './HowTo.css'

const STEPS = [
  {
    n: '01',
    title: 'Abra o sache',
    desc: 'Rasgue na marcação e reserve o sache de 10 mL do CarboZé Shot.',
  },
  {
    n: '02',
    title: 'Adicione antes de abastecer',
    desc: 'Despeje o conteúdo diretamente no tanque antes de completar o abastecimento.',
  },
  {
    n: '03',
    title: 'Complete o abastecimento',
    desc: 'Abastece normalmente. O combustível irá misturar e ativar o produto.',
  },
]

export default function HowTo() {
  const stepsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    stepsRef.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="howto section" id="how-to">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Modo de uso</span>
          <h2 className="section-title">
            SIMPLES<br />
            <em>DE USAR</em>
          </h2>
        </div>

        <div className="howto__steps">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="howto__step reveal-item"
              ref={el => stepsRef.current[i] = el}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="howto__step-number">{s.n}</div>
              <div className="howto__step-connector" aria-hidden="true" />
              <div className="howto__step-body glass-card">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="howto__table-wrap">
          <table className="howto__table">
            <thead>
              <tr>
                <th>Uso</th>
                <th>Proporção</th>
                <th>Dose (10 mL)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Padrão</td>
                <td>1 mL / 1 L</td>
                <td>1 sache para até 10 L</td>
              </tr>
              <tr>
                <td>Tratamento de choque</td>
                <td>1 mL / 500 mL</td>
                <td>1 sache para até 5 L</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="howto__notice">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="7" stroke="#ffb400" strokeWidth="1.5"/>
            <path d="M8 5v4" stroke="#ffb400" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="8" cy="11.5" r="0.75" fill="#ffb400"/>
          </svg>
          <p>
            Melhores resultados após <strong>3 tanques consecutivos</strong>.
            Não exceder <strong>2 mL por litro</strong> de combustível, sem orientação do seu mecânico.
            Aplicar a cada abastecimento.
          </p>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  )
}
