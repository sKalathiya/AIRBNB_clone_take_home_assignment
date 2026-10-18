import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DesktopShell from './components/layout/desktop-shell'
import ListingPage from './features/listing/listing-page'

const App = () => {
  return (
    <BrowserRouter>
      <DesktopShell>
        <Routes>
          <Route path="/" element={<ListingPage />} />
        </Routes>
      </DesktopShell>
    </BrowserRouter>
  )
}

export default App
