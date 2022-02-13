import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <main style={{ padding: '1rem' }}>
                <p>Home</p>
              </main>
            }
          />
          <Route
            path='/watch-list'
            element={
              <main style={{ padding: '1rem' }}>
                <p>Watch List</p>
              </main>
            }
          />
          <Route
            path='/movies'
            element={
              <main style={{ padding: '1rem' }}>
                <p>Movies</p>
              </main>
            }
          />
          <Route
            path='/tv-shows'
            element={
              <main style={{ padding: '1rem' }}>
                <p>TV Shows</p>
              </main>
            }
          />
          <Route
            path='/account'
            element={
              <main style={{ padding: '1rem' }}>
                <p>Account</p>
              </main>
            }
          />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
