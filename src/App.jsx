import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Page1 from './pages/Page1'; 
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
            </Routes>
        </Router>
    );
};

export default App;
