import { useEffect, useRef } from 'react'
import './Product.css'

export default function Product() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.disconnect() } },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="product section" id="product">
      <div className="container" ref={ref}>
        <div className="product__grid">
          <div className="product__text">
            <span className="section-tag">O produto</span>
            <h2 className="section-title">
              UM CONCENTRADO<br />
              <em>DE TECNOLOGIA</em><br />
              NO MOTOR
            </h2>
            <p>
              O CarboZé Shot é um <strong>estabilizador e otimizador de combustível</strong> em dose única de 10 mL.
              Desenvolvido para motocicletas, atua diretamente na câmara de combustão,
              protegendo o motor e extraindo o máximo de cada gota de combustível.
            </p>
            <p>
              Compatível com <strong>todos os tipos de combustível</strong> —
              gasolina comum, aditivada e etanol.
            </p>

            <div className="product__specs">
              <div className="product__spec">
                <span className="product__spec-value">10 mL</span>
                <span className="product__spec-label">Dose única</span>
              </div>
              <div className="product__spec-divider" />
              <div className="product__spec">
                <span className="product__spec-value">1:1000</span>
                <span className="product__spec-label">Proporção padrão</span>
              </div>
              <div className="product__spec-divider" />
              <div className="product__spec">
                <span className="product__spec-value">100%</span>
                <span className="product__spec-label">Compatível</span>
              </div>
            </div>
          </div>

          <div className="product__visual">
            <div className="product__sachet">
              <div className="product__sachet-glow" />
              <svg viewBox="0 0 160 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CarboZé Shot sache 10mL">
                {/* sachet body */}
                <rect x="20" y="10" width="120" height="240" rx="12" fill="url(#sachetGrad)" />
                <rect x="20" y="10" width="120" height="240" rx="12" stroke="rgba(108,192,0,0.35)" strokeWidth="1.5" />
                {/* top seal */}
                <rect x="20" y="10" width="120" height="22" rx="12" fill="rgba(108,192,0,0.18)" />
                <rect x="20" y="10" width="120" height="22" rx="12" stroke="rgba(108,192,0,0.5)" strokeWidth="1" />
                {/* bottom seal */}
                <rect x="20" y="228" width="120" height="22" rx="12" fill="rgba(108,192,0,0.18)" />
                <rect x="20" y="228" width="120" height="22" rx="12" stroke="rgba(108,192,0,0.5)" strokeWidth="1" />
                {/* CARBOZÉ label area */}
                <rect x="30" y="50" width="100" height="80" rx="6" fill="rgba(0,0,0,0.3)" />
                {/* logo text */}
                <text x="80" y="82" textAnchor="middle" fontFamily="'Barlow Condensed', sans-serif" fontWeight="900" fontSize="20" fill="#FFFFFF">CARBO</text>
                <text x="80" y="108" textAnchor="middle" fontFamily="'Barlow Condensed', sans-serif" fontWeight="900" fontSize="20" fill="#6CC000">ZÉ</text>
                {/* SHOT text */}
                <text x="80" y="160" textAnchor="middle" fontFamily="'Barlow Condensed', sans-serif" fontWeight="700" fontSize="13" fill="rgba(255,255,255,0.7)" letterSpacing="4">SHOT</text>
                {/* 10mL */}
                <text x="80" y="195" textAnchor="middle" fontFamily="'Barlow Condensed', sans-serif" fontWeight="400" fontSize="11" fill="rgba(255,255,255,0.45)">10 mL</text>
                {/* shine */}
                <rect x="28" y="18" width="12" height="220" rx="6" fill="rgba(255,255,255,0.04)" />
                <defs>
                  <linearGradient id="sachetGrad" x1="20" y1="10" x2="140" y2="250" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1a3a0d" />
                    <stop offset="50%" stopColor="#0d1a0d" />
                    <stop offset="100%" stopColor="#0a1208" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  )
}
