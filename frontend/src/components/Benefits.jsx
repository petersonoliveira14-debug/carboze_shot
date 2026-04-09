import { useEffect, useRef } from 'react'
import './Benefits.css'

const BENEFITS = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4z" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M16 10v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M10 20l12-12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.4"/>
      </svg>
    ),
    title: 'Protege o combustível',
    desc: 'Estabiliza o combustível e previne a degradação, mantendo suas propriedades por mais tempo no tanque.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 24 L16 8 L24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 19h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M16 8 L16 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M20 10 L22 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5"/>
        <path d="M12 10 L10 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5"/>
      </svg>
    ),
    title: 'Mais potência e desempenho',
    desc: 'Melhora a queima do combustível, proporcionando mais torque e resposta do motor em qualquer rotação.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 20 C6 14 10 8 16 8 C22 8 26 14 26 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M11 26 L16 20 L21 26" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="20" r="2" fill="currentColor" fillOpacity="0.4"/>
      </svg>
    ),
    title: 'Reduz o consumo',
    desc: 'Otimiza a eficiência da combustão, fazendo você rodar mais quilômetros com o mesmo tanque.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="8" y="12" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 12V9a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="16" cy="19" r="2" fill="currentColor" fillOpacity="0.5"/>
        <path d="M16 21v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Reduz a manutenção',
    desc: 'Limpa depósitos internos, reduz desgaste e protege as peças do motor, estendendo sua vida útil.',
  },
]

export default function Benefits() {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    cardsRef.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  function handleTilt(e, card) {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const rect = card.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const rx = ((e.clientY - cy) / (rect.height / 2)) * 6
    const ry = ((e.clientX - cx) / (rect.width / 2)) * -6
    card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`
  }

  function resetTilt(card) {
    card.style.transform = ''
  }

  return (
    <section className="benefits section" id="benefits">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Benefícios</span>
          <h2 className="section-title">
            QUATRO RAZÕES<br />
            <em>PARA USAR</em>
          </h2>
        </div>

        <div className="benefits__grid">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className="benefits__card glass-card reveal-item"
              ref={el => cardsRef.current[i] = el}
              style={{ transitionDelay: `${i * 80}ms` }}
              onMouseMove={e => handleTilt(e, e.currentTarget)}
              onMouseLeave={e => resetTilt(e.currentTarget)}
            >
              <div className="benefits__icon">{b.icon}</div>
              <h3 className="benefits__title">{b.title}</h3>
              <p className="benefits__desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider" />
    </section>
  )
}
