import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Layout from './components/Layout';
import Home from './pages/Home';
import Todos from './pages/Todos';
import About from './pages/About';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout title="Make launch">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/todo" element={<Todos title="Make launch"/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
