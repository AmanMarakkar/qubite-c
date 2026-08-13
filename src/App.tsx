import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RootLayout } from '@/components/RootLayout'
import { HomePage } from '@/features/home/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
