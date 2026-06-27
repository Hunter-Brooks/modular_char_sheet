import "./App.css";
import React, { useState } from "react";
import HeadingContainer from "./components/HeadingContainer";
import SpellsContainer from "./components/spells/SpellsContainer";
import StatsFirstRowContainer from "./components/stats/StatsFirstRowContainer";
import StatsSecondRowContainer from "./components/stats/StatsSecondRowContainer";
import FeatsContainer from "./components/feats/FeatsContainer";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function App() {
  const [key, setKey] = useState("stats");

  return (
    <div className="App app-shell">
      <div className="container app-container">
        <div className="card app-card shadow-sm">
          <div className="card-header app-card-header">Character Sheet</div>
          <div className="card-body app-card-body">
            <HeadingContainer />
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="sheet-tabs"
            >
              <Tab eventKey="stats" title="Stats">
                <StatsFirstRowContainer />
                <StatsSecondRowContainer />
              </Tab>
              <Tab eventKey="feats" title="Feats">
                <FeatsContainer />
              </Tab>
              <Tab eventKey="spells" title="Spells">
                <SpellsContainer />
              </Tab>
              <Tab eventKey="notes" title="Notes">
                <div className="card section-card mt-3">
                  <div className="card-body">
                    <div className="field-group mb-0">
                      <label className="field-label">Notes</label>
                      <textarea
                        className="form-control sheet-input"
                        rows={12}
                        placeholder="Write notes here..."
                      />
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
