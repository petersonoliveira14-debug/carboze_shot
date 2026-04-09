import { useEffect, useRef } from 'react'
import Logo from './Logo'
import './Hero.css'

export default function Hero() {
  const canvasRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    function resize() {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    function spawnParticles() {
      const count = Math.min(50, Math.floor(canvas.width / 16))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        vy: -(Math.random() * 0.6 + 0.2),
        vx: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(108,192,0,${p.alpha})`
        ctx.fill()
        p.y += p.vy
        p.x += p.vx
        if (p.y < -4) { p.y = canvas.height + 4; p.x = Math.random() * canvas.width }
      })
      animId = requestAnimationFrame(draw)
    }

    resize()
    spawnParticles()
    draw()
    window.addEventListener('resize', () => { resize(); spawnParticles() })
    return () => { cancelAnimationFrame(animId) }
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const handleScroll = () => {
      const bg = hero.querySelector('.hero__bg')
      if (!bg) return
      const y = window.scrollY
      bg.style.transform = `scale(1.06) translateY(${y * 0.28}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero" ref={heroRef} id="home">
      <div className="hero__bg">
        <video
          className="hero__video"
          src="https://carboze.com.br/assets/cz-fuel-pour-D7fFGdRa.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="hero__overlay" />
      <canvas ref={canvasRef} className="hero__canvas" />

      <div className="hero__glow" />

      <div className="container hero__content">
        <Logo size={180} />

        <span className="hero__badge">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <circle cx="5" cy="5" r="5" fill="#6CC000" />
          </svg>
          VACINE O SEU COMBUSTÍVEL
        </span>

        <h1 className="hero__headline">
          MAIS POTÊNCIA<br />
          <em>E VIDA LONGA</em><br />
          PARA O MOTOR
        </h1>

        <p className="hero__sub">
          Dose única 10 mL &mdash; feita para motocicletas
        </p>

        <a href="#how-to" className="hero__cta">
          Como usar
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
