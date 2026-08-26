import "./App.css";
import React, { useState } from "react";
import HeadingContainer from "./components/HeadingContainer";
import SpellsContainer from "./components/spells/SpellsContainer";
import StatsFirstRowContainer from "./components/stats/StatsFirstRowContainer";
import StatsSecondRowContainer from "./components/stats/StatsSecondRowContainer";
import FeatsContainer from "./components/feats/FeatsContainer";
import { createCharacter, getCharacterById } from "./api/characterApi";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const DEFAULT_SHEET_DATA = {
  details: {
    name: "Hunter",
    playerName: "",
    ancestryHeritage: "",
    background: "",
    heroPoints: "",
    exp: "",
    className: "",
    size: "",
    alignment: "",
    traits: "",
  },
  stats: {
    level: 1,
    abilities: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intellect: 10,
      wisdom: 10,
      charisma: 10,
    },
  },
  feats: [],
  spells: [],
  notes: "",
};

const normalizeSheetData = (sheetData) => ({
  ...DEFAULT_SHEET_DATA,
  ...sheetData,
  details: {
    ...DEFAULT_SHEET_DATA.details,
    ...(sheetData?.details || {}),
  },
  stats: {
    ...DEFAULT_SHEET_DATA.stats,
    ...(sheetData?.stats || {}),
    abilities: {
      ...DEFAULT_SHEET_DATA.stats.abilities,
      ...(sheetData?.stats?.abilities || {}),
    },
  },
  feats: Array.isArray(sheetData?.feats) ? sheetData.feats : [],
  spells: Array.isArray(sheetData?.spells) ? sheetData.spells : [],
  notes: sheetData?.notes || "",
});

function App() {
  const [key, setKey] = useState("stats");
  const [sheetData, setSheetData] = useState(DEFAULT_SHEET_DATA);
  const [loadCharacterId, setLoadCharacterId] = useState("");
  const [savedCharacterId, setSavedCharacterId] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleDetailsChange = (field, value) => {
    setSheetData((previous) => ({
      ...previous,
      details: {
        ...previous.details,
        [field]: value,
      },
    }));
  };

  const handleLevelChange = (level) => {
    setSheetData((previous) => ({
      ...previous,
      stats: {
        ...previous.stats,
        level,
      },
    }));
  };

  const handleAbilityChange = (abilityName, abilityScore) => {
    setSheetData((previous) => ({
      ...previous,
      stats: {
        ...previous.stats,
        abilities: {
          ...previous.stats.abilities,
          [abilityName]: abilityScore,
        },
      },
    }));
  };

  const handleSaveCharacter = async () => {
    setStatusMessage("Saving character...");
    try {
      const response = await createCharacter({
        name: sheetData.details.name || "Unnamed Character",
        characterData: sheetData,
      });
      setSavedCharacterId(response.id);
      setLoadCharacterId(response.id);
      setStatusMessage(`Saved character ${response.id}`);
    } catch (error) {
      setStatusMessage(error.message);
    }
  };

  const handleLoadCharacter = async () => {
    if (!loadCharacterId.trim()) {
      setStatusMessage("Enter a character ID to load");
      return;
    }

    setStatusMessage("Loading character...");
    try {
      const response = await getCharacterById(loadCharacterId.trim());
      const normalizedData = normalizeSheetData(response.characterData);
      if (!normalizedData.details.name) {
        normalizedData.details.name = response.name || "";
      }
      setSheetData(normalizedData);
      setSavedCharacterId(response.id);
      setStatusMessage(`Loaded character ${response.id}`);
    } catch (error) {
      setStatusMessage(error.message);
    }
  };

  return (
    <div className="App app-shell">
      <div className="container app-container">
        <div className="card app-card shadow-sm">
          <div className="card-header app-card-header">Character Sheet</div>
          <div className="card-body app-card-body">
            <div className="card section-card mb-3">
              <div className="card-body">
                <div className="d-flex flex-wrap gap-2 align-items-end">
                  <button className="btn btn-primary" onClick={handleSaveCharacter}>
                    Save Character
                  </button>
                  <div className="field-group mb-0">
                    <label className="field-label">Character ID</label>
                    <input
                      type="text"
                      className="form-control sheet-input"
                      value={loadCharacterId}
                      onChange={(event) => setLoadCharacterId(event.target.value)}
                      placeholder="Paste character UUID"
                    />
                  </div>
                  <button className="btn btn-secondary" onClick={handleLoadCharacter}>
                    Load Character
                  </button>
                </div>
                {savedCharacterId && (
                  <div className="mt-2 text-muted">Saved ID: {savedCharacterId}</div>
                )}
                {statusMessage && <div className="mt-1 text-muted">{statusMessage}</div>}
              </div>
            </div>

            <HeadingContainer
              details={sheetData.details}
              onChange={handleDetailsChange}
            />
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="sheet-tabs"
            >
              <Tab eventKey="stats" title="Stats">
                <StatsFirstRowContainer
                  level={sheetData.stats.level}
                  abilities={sheetData.stats.abilities}
                  onLevelChange={handleLevelChange}
                  onAbilityChange={handleAbilityChange}
                />
                <StatsSecondRowContainer />
              </Tab>
              <Tab eventKey="feats" title="Feats">
                <FeatsContainer
                  feats={sheetData.feats}
                  onFeatsChange={(feats) =>
                    setSheetData((previous) => ({ ...previous, feats }))
                  }
                />
              </Tab>
              <Tab eventKey="spells" title="Spells">
                <SpellsContainer
                  spells={sheetData.spells}
                  onSpellsChange={(spells) =>
                    setSheetData((previous) => ({ ...previous, spells }))
                  }
                />
              </Tab>
              <Tab eventKey="notes" title="Notes">
                <div className="card section-card mt-3">
                  <div className="card-body">
                    <div className="field-group mb-0">
                      <label className="field-label">Notes</label>
                      <textarea
                        className="form-control sheet-input"
                        rows={12}
                        value={sheetData.notes}
                        onChange={(event) =>
                          setSheetData((previous) => ({
                            ...previous,
                            notes: event.target.value,
                          }))
                        }
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
