import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
//import Card from "./components/shared/Card";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    console.log("id", id);
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4()
      console.log(newFeedback)
      setFeedback([newFeedback,...feedback])
  }

  return (
    <Router>
      <Header text="Hello world" />
      <div className="container">
      <Routes>
        <Route 
          exact 
          path='/' 
          element={
          <>
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
          </>
        }>
        </Route>
        <Route path='/about' element={<About />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
