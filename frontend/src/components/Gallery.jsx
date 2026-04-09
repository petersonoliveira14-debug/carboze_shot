import { useEffect, useRef, useState } from 'react'
import './Gallery.css'

/*
  Imagens do Pexels (banco público, free to use):
  - Cada URL usa ?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop para garantir
    dimensão consistente e carregamento rápido.
  - IDs verificados por categoria.
*/
const CARDS = [
  {
    tag: 'Alta performance',
    desc: 'Esportivas e motos de alta cilindrada',
    // Yamaha R6 sport bike vermelho em pista
    img: 'https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    color: '#6CC000',
  },
  {
    tag: 'No trabalho',
    desc: 'Motoboys e entregadores no dia a dia',
    // Motociclista com mochila em rua urbana movimentada
    img: 'https://images.pexels.com/photos/4518846/pexels-photo-4518846.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    color: '#6CC000',
  },
  {
    tag: 'Urbano',
    desc: 'Motos populares nas ruas da cidade',
    // Honda CB na cidade noturna
    img: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    color: '#6CC000',
  },
  {
    tag: 'Estrada',
    desc: 'Longas distâncias com motor protegido',
    // Motociclista em estrada aberta ao pôr do sol
    img: 'https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    color: '#6CC000',
  },
  {
    tag: 'Clássica',
    desc: 'Motos vintage e custom',
    // Harley Davidson clássica preta
    img: 'https://images.pexels.com/photos/2519378/pexels-photo-2519378.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    color: '#6CC000',
  },
  {
    tag: 'Aventura',
    desc: 'Trilha e off-road com proteção máxima',
    // Adventure bike em trilha de terra
    img: 'https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    color: '#6CC000',
  },
]

function GalleryCard({ card, index }) {
  const ref = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      className="gallery__card reveal-item"
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* background image */}
      {!error ? (
        <img
          src={card.img}
          alt={card.desc}
          className={`gallery__img${loaded ? ' gallery__img--loaded' : ''}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          loading="lazy"
        />
      ) : (
        <div className="gallery__img-fallback" />
      )}

      {/* dark overlay gradient */}
      <div className="gallery__overlay" />

      {/* content */}
      <div className="gallery__content">
        <span className="gallery__tag">{card.tag}</span>
        <p className="gallery__desc">{card.desc}</p>
      </div>
    </article>
  )
}

export default function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Para quem usa</span>
          <h2 className="section-title">
            UMA DOSE.<br />
            <em>PARA TODO MOTOCICLISTA.</em>
          </h2>
        </div>

        <div className="gallery__grid">
          {CARDS.map((card, i) => (
            <GalleryCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
      <div className="section-divider" />
    </section>
  )
}
