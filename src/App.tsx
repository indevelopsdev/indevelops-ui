import { HeroChat } from './components/HeroChat/HeroChat'
import { Layout } from './components/Layout/Layout'
import { RoadmapStrip } from './components/RoadmapStrip/RoadmapStrip'

function App() {
  return (
    <Layout>
      <HeroChat />
      <RoadmapStrip />
      <footer className="footer">
        <small>indevelops © 2026</small>
        <a
          className="footerIcon"
          href="https://x.com/indevelops_ai"
          target="_blank"
          rel="noreferrer"
          aria-label="indevelops en X"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M18.244 2.25h3.308l-7.229 8.261 8.504 11.239h-6.65l-5.21-6.81-5.958 6.81H1.7l7.73-8.84L1.25 2.25h6.82l4.71 6.23 5.464-6.23z" />
          </svg>
        </a>
      </footer>
    </Layout>
  )
}

export default App
