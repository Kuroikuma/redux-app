import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../page/home/index'
import { SinglePokemon } from '../page/singlePokemon/SinglePokemon'
import { Favorites } from '../page/favorites/Favorites'

export function IndexRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="single-pokemon/:name" element={<SinglePokemon />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route index element={<Home />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
