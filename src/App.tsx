import { HeroChat } from './components/HeroChat/HeroChat'
import { Layout } from './components/Layout/Layout'
import { RoadmapStrip } from './components/RoadmapStrip/RoadmapStrip'

function App() {
  return (
    <Layout>
      <HeroChat />
      <RoadmapStrip />
      <footer>
        <small>
          indevelops · Specification-Driven Development ·{' '}
          <a href="https://github.com/github/spec-kit" target="_blank" rel="noreferrer">
            Spec Kit
          </a>
        </small>
      </footer>
    </Layout>
  )
}

export default App
