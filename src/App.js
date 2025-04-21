import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import CreateBlog from './CreateBlog';
import SingleBlog from './SingleBlog';
import NotFound from './404NOTFOUND';

function App() {
  return (
    <Router>

    <div className="App">
      <Navbar/>
      <div className="content">
      <Routes>
        <Route path="/create" element={<CreateBlog/>}>
        </Route>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/blogs/:id" element={<SingleBlog/>}/>
        <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
    </Router>

  );
}

export default App;
