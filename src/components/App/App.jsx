import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import store from '../../store';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Feedback!</h1>
            <h4>Don't forget it!</h4>
          </header>
          <div className="form-container">
            <Routes>
              <Route path="/" element={<Feeling />} />
              <Route path="/understanding" element={<Understanding />} />
              <Route path="/support" element={<Support />} />
              <Route path="/comments" element={<Comments />} />
              <Route path="/review" element={<Review />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
