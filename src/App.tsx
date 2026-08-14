import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RootLayout } from '@/components/RootLayout'
import { AsicMachinesPage } from '@/features/asic-machines/AsicMachinesPage'
import { HomePage } from '@/features/home/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/asic-machines" element={<AsicMachinesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
