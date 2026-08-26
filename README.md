# Modular Character Sheet

A React-based digital character sheet for Pathfinder 2e, featuring an intuitive tabbed interface for managing character stats, feats, spells, and notes.

## Features

- **Character Details**: Name, class, level, ancestry, background, and more
- **Stats Tab**: Ability scores, AC, HP, saves, perception, and skill checks
- **Feats Tab**: Add and manage character feats by type (Ancestry, Skill, General, Class, Bonus)
- **Spells Tab**: Track known spells with level, name, and description
- **Notes Tab**: Free-form notes for your character
- **Backend Integration**: Save and load characters from the Spring Boot backend

## Prerequisites

- Node.js 16+ and npm
- Character Backend server running (see [character-backend](../character-backend))

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open [http://localhost:3000/modular_char_sheet](http://localhost:3000/modular_char_sheet) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

## Environment Variables

Create a `.env` file to customize the backend URL:

```bash
REACT_APP_CHARACTER_API_URL=http://localhost:8080
```

## Available Scripts

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run deploy`

Deploys the built app to GitHub Pages (requires configuration in package.json).

## Tech Stack

- **React 18**: UI framework
- **React Bootstrap 2**: Component library
- **Styled Components 6**: CSS-in-JS styling
- **Create React App 5**: Build tooling

## Project Structure

```
src/
├── api/              # Backend integration
├── components/       # React components
│   ├── feats/       # Feat management
│   ├── spells/      # Spell management
│   └── stats/       # Character stats
└── utils/           # Helper functions (PF2e math)
```

## Documentation

- [Architecture Overview](docs/ARCHITECTURE.md)
- [API Integration Guide](docs/API_INTEGRATION.md)

## Related Projects

- [character-backend](../character-backend) - Spring Boot backend for character persistence

---

**Note**: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
