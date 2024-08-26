import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocalStorage } from '@uidotdev/usehooks';
import CategoryList from './components/CategoryList';
import TopicList from './components/TopicList';
import MarkdownViewer from './components/MarkdownViewer';
import Navbar from './components/Navbar';
import Error from './components/Error';

const App = () => {
  const [isDark, setIsDark] = useLocalStorage('isDark', false);

  const handleDarkToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      {isDark ? (
        <div className='fixed -z-20 h-full w-full bg-slate-950'>
          <div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
        </div>
      ) : (
        <div className='relative z-[-2] w-screen bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]'></div>
      )}
      <Router>
        <Navbar
          isDark={isDark}
          handleDarkToggle={handleDarkToggle}
        />

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
          <Route
            path='/error'
            element={<Error />}
          />
          <Route
            path='*'
            element={<Error />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
