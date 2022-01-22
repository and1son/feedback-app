import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
//import Card from "./components/shared/Card";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About"
import AboutIconLink from "./components/AboutIconLink"
import {FeedbackProvider} from './context/FeedbackContext'


function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text="Hello world" />
        <div className="container">
        <Routes>
          <Route 
            exact 
            path='/' 
            element={
            <>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList  />
            </>
          }>
          </Route>
          <Route path='/about' element={<About />} />
        </Routes>
        <AboutIconLink/>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
