import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Layout from './components/Layout';
import Home from './pages/Home';
import Todo from './pages/Todo';
import About from './pages/About';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/todo" element={<Todo/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
