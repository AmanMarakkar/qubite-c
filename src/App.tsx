import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RootLayout } from '@/components/RootLayout'
import { AboutPage } from '@/features/about/AboutPage'
import { AsicMachinesPage } from '@/features/asic-machines/AsicMachinesPage'
import { HomePage } from '@/features/home/HomePage'
import { HostingPage } from '@/features/hosting/HostingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/asic-machines" element={<AsicMachinesPage />} />
          <Route path="/hosting" element={<HostingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
