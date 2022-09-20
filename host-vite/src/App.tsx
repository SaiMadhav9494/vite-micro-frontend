import { lazy, Suspense } from 'react'
import './App.css'

const NavBarVite = lazy(() => import('NavBarVite/App'))

function App() {
  return (
    <Suspense fallback="Loading...">
        <NavBarVite />
    </Suspense>
  )
}

export default App
