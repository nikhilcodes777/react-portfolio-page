import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

const App = () => (
  <>
    <div className="text-ctp-text bg-ctp-base selection:bg-primary">
      <Hero />
      <Skills />
      <Projects />
    </div>
  </>
)

export default App
