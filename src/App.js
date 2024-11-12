import "./App.css";
import React, { useState } from "react";
import HeadingContainer from "./components/HeadingContainer";
import SpellsContainer from "./components/spells/SpellsContainer";
import StatsFirstRowContainer from "./components/stats/StatsFirstRowContainer";
import StatsSecondRowContainer from "./components/stats/StatsSecondRowContainer";
import FeatsContainer from "./components/feats/FeatsContainer";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./App.css";

function App() {
  const [key, setKey] = useState("home");

  return (
    <div className="App">
      <div className="mt-5 container">
        <div className="card">
          <div className="card-header">CHARACTER SHEET</div>
          <div className="card-body">
            <HeadingContainer></HeadingContainer>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="stats" title="stats">
                <StatsFirstRowContainer></StatsFirstRowContainer>
                <StatsSecondRowContainer></StatsSecondRowContainer>
              </Tab>
              <Tab eventKey="feats" title="feats">
                <FeatsContainer></FeatsContainer>
              </Tab>
              <Tab eventKey="spells" title="spells">
                <SpellsContainer></SpellsContainer>
              </Tab>
              <Tab eventKey="notes" title="notes">
                NOTES
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
