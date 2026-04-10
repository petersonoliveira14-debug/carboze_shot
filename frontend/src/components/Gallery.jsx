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
    // Yamaha R6 amarelo/preto — sport bike cinematic (verificado visualmente)
    img: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&h=600&q=80',
  },
  {
    tag: 'No trabalho',
    desc: 'Motoboys e entregadores no dia a dia',
    // Motoboy com maleta de entrega em moto commuter tipo CG (verificado)
    img: 'https://images.pexels.com/photos/12203654/pexels-photo-12203654.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    tag: 'Urbano',
    desc: 'Motos populares nas ruas da cidade',
    // Kawasaki Z1000 em ambiente urbano (verificado)
    img: 'https://images.pexels.com/photos/29751522/pexels-photo-29751522.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    tag: 'Estrada',
    desc: 'Longas distâncias com motor protegido',
    // Harley-Davidson em rodovia ao pôr do sol (verificado)
    img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&h=600&q=80',
  },
  {
    tag: 'Clássica',
    desc: 'Motos vintage e custom',
    // Royal Enfield Classic verde em floresta — cinematográfico (verificado)
    img: 'https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    tag: 'Aventura',
    desc: 'Trilha e motocross com proteção máxima',
    // Motocross em areia — nuvem de poeira cinematográfica (verificado)
    img: 'https://images.pexels.com/photos/2745827/pexels-photo-2745827.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
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
