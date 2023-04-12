import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <h1>
          <span>emojipedia</span>
        </h1>
        <Routes>
          <Route exact path="/">
            <dl className="dictionary">
              {emojipedia.map((emojiTerm) => (
                <Entry
                  key={emojiTerm.id}
                  emoji={emojiTerm.emoji}
                  name={emojiTerm.name}
                  meaning={emojiTerm.meaning}
                />
              ))}
            </dl>
          </Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;