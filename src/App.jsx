import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-gray-500 text-sm bg-gray-dark">
        &copy; {new Date().getFullYear()} Ege Olgun. All rights reserved.
      </footer>
    </div>
  )
}

export default App