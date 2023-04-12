import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <h1>
          <span>emojipedia</span>
        </h1>
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
      </div>
    </BrowserRouter>
  );
}

export default App;