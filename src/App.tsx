import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import TopicList from './components/TopicList';
import MarkdownViewer from './components/MarkdownViewer';

const App = () => {
  return (
    <Router>
      <div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
      <Routes>
        <Route
          path='/'
          element={<CategoryList />}
        />
        <Route
          path='/:category'
          element={<TopicList />}
        />
        <Route
          path='/:category/:topic'
          element={<MarkdownViewer />}
        />
      </Routes>
    </Router>
  );
};

export default App;
