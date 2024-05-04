import "./App.css";
import React, { useState } from "react";
import HeadingContainer from "./components/HeadingContainer";
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
              <Tab eventKey="home" title="stats">
                <StatsFirstRowContainer></StatsFirstRowContainer>
                <StatsSecondRowContainer></StatsSecondRowContainer>
              </Tab>
              <Tab eventKey="profile" title="feats">
                <FeatsContainer></FeatsContainer>
              </Tab>
              <Tab eventKey="contact" title="spells">
                Tab content for Contact
              </Tab>
              <Tab eventKey="contact" title="notes">
                Tab content for Contact
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
