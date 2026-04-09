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
            <div className="product__mockup">
              <div className="product__mockup-glow" />
              <img
                src="https://carboze.com.br/assets/carboze-product-DO0rbJ3r.png"
                alt="CarboZé Shot — produto"
                className="product__mockup-img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  )
}
