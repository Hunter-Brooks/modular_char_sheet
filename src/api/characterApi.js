const API_BASE_URL =
  process.env.REACT_APP_CHARACTER_API_URL || "http://localhost:8080";

export async function createCharacter(payload) {
  const response = await fetch(`${API_BASE_URL}/api/v1/characters`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to save character");
  }

  return response.json();
}

export async function getCharacterById(characterId) {
  const response = await fetch(`${API_BASE_URL}/api/v1/characters/${characterId}`);

  if (!response.ok) {
    throw new Error("Failed to load character");
  }

  return response.json();
}
