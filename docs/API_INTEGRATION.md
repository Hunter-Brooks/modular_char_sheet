# API Integration Guide

This guide explains how the Modular Character Sheet frontend integrates with the character-backend Spring Boot service.

## Configuration

### Environment Variable

The API base URL is configurable via environment variable:

```bash
# .env file
REACT_APP_CHARACTER_API_URL=http://localhost:8080
```

If not set, it defaults to `http://localhost:8080`.

### API Client

The API client is located at `src/api/characterApi.js` and provides functions for backend communication.

## API Functions

### createCharacter(payload)

Saves a new character to the backend.

**Parameters:**
```javascript
payload = {
  name: "Character Name",
  characterData: {
    details: { ... },
    stats: { ... },
    feats: [ ... ],
    spells: [ ... ],
    notes: "..."
  }
}
```

**Returns:**
```javascript
{
  id: "uuid-string",
  name: "Character Name",
  characterData: { ... },
  createdAt: "timestamp",
  updatedAt: "timestamp"
}
```

**Usage:**
```javascript
import { createCharacter } from './api/characterApi';

const saveCharacter = async () => {
  try {
    const response = await createCharacter({
      name: sheetData.details.name,
      characterData: sheetData
    });
    console.log('Character saved with ID:', response.id);
  } catch (error) {
    console.error('Failed to save character:', error);
  }
};
```

### getCharacterById(characterId)

Retrieves a character from the backend by ID.

**Parameters:**
- `characterId` (string): UUID of the character to retrieve

**Returns:**
```javascript
{
  id: "uuid-string",
  name: "Character Name",
  characterData: { ... },
  createdAt: "timestamp",
  updatedAt: "timestamp"
}
```

**Usage:**
```javascript
import { getCharacterById } from './api/characterApi';

const loadCharacter = async (id) => {
  try {
    const character = await getCharacterById(id);
    setSheetData(character.characterData);
  } catch (error) {
    console.error('Failed to load character:', error);
  }
};
```

## Backend Endpoints

The frontend communicates with these backend endpoints:

### POST /api/v1/characters
Create a new character

**Request:**
```json
{
  "name": "Hunter",
  "characterData": {
    "details": {
      "name": "Hunter",
      "playerName": "",
      "ancestryHeritage": "",
      ...
    },
    "stats": {
      "level": 1,
      "abilities": {
        "strength": 10,
        ...
      }
    },
    "feats": [],
    "spells": [],
    "notes": ""
  }
}
```

**Response:** `201 Created`
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "name": "Hunter",
  "characterData": { ... },
  "createdAt": "2026-08-26T12:00:00",
  "updatedAt": "2026-08-26T12:00:00"
}
```

### GET /api/v1/characters/{id}
Retrieve a character by ID

**Response:** `200 OK`
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "name": "Hunter",
  "characterData": { ... },
  "createdAt": "2026-08-26T12:00:00",
  "updatedAt": "2026-08-26T12:00:00"
}
```

## Error Handling

The API client throws errors that should be caught and handled:

```javascript
try {
  const response = await createCharacter(payload);
  // Handle success
} catch (error) {
  if (error.message === 'Failed to save character') {
    // Show user-friendly error message
    alert('Unable to save character. Please check your connection.');
  }
}
```

### Common Errors

1. **Network Error**: Backend is not running or unreachable
   - Verify backend is running at `http://localhost:8080`
   - Check CORS configuration if deploying to different domain

2. **400 Bad Request**: Invalid payload format
   - Verify characterData structure matches expected schema
   - Check that required fields are present

3. **404 Not Found**: Character ID doesn't exist
   - Verify the character ID is correct
   - Character may have been deleted

4. **500 Internal Server Error**: Backend error
   - Check backend logs
   - Verify database is running and accessible

## CORS Configuration

When running frontend and backend on different domains, ensure the backend has CORS configured:

```java
// Backend CORS configuration (already set up)
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE");
    }
}
```

## Development Workflow

### Running Full Stack

1. **Start PostgreSQL:**
   ```bash
   cd character-backend
   docker-compose up -d
   ```

2. **Start Backend:**
   ```bash
   cd character-backend
   mvn spring-boot:run
   ```

3. **Start Frontend:**
   ```bash
   cd modular-char-sheet
   npm start
   ```

4. **Access Application:**
   - Frontend: http://localhost:3000/modular_char_sheet
   - Backend API: http://localhost:8080/api/v1/characters
   - Swagger UI: http://localhost:8080/swagger-ui/index.html

### Testing API Integration

Use the browser console to test API calls:

```javascript
// Save current character
const response = await createCharacter({
  name: "Test Character",
  characterData: { /* current sheet data */ }
});

// Load character by ID
const character = await getCharacterById("uuid-here");
```

## Future API Enhancements

Planned additions to the API client:

- `updateCharacter(id, payload)` - Update existing character
- `deleteCharacter(id)` - Delete a character
- `listCharacters()` - Get all characters for a user
- `searchCharacters(query)` - Search characters by name

These will be implemented as the backend adds the corresponding endpoints.

## Related Documentation

- [Backend API Reference](../../character-backend/docs/API_REFERENCE.md)
- [Backend README](../../character-backend/README.md)
