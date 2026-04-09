import Hero from './components/Hero'
import Product from './components/Product'
import Benefits from './components/Benefits'
import HowTo from './components/HowTo'
import Tech from './components/Tech'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Product />
        <Benefits />
        <HowTo />
        <Tech />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
