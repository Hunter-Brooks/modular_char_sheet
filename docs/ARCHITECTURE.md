# Architecture Overview

## Application Structure

The Modular Character Sheet is built with React and follows a component-based architecture. The application provides an intuitive interface for managing Pathfinder 2e characters.

## Component Hierarchy

```
App (Root Component)
│
├── HeadingContainer
│   └── Character basic info (name, class, level, etc.)
│
└── Tabs
    ├── Stats Tab
    │   ├── StatsFirstRowContainer
    │   │   ├── AbilityScores
    │   │   ├── ClassDC
    │   │   ├── ArmorClass
    │   │   ├── HitPoints
    │   │   ├── Perception
    │   │   └── SavingThrows
    │   └── StatsSecondRowContainer
    │       └── Skills (not shown in search results)
    │
    ├── Feats Tab
    │   └── FeatsContainer
    │       ├── NewFeatForm
    │       └── FeatTable
    │           └── Feat (individual feat component)
    │
    ├── Spells Tab
    │   └── SpellsContainer
    │       ├── NewSpellForm
    │       └── SpellTable
    │           └── Spell (individual spell component)
    │
    └── Notes Tab
        └── Textarea for free-form notes
```

## Key Components

### App.js

The root component that:

- Manages global character sheet state
- Handles tab navigation
- Integrates with the character backend API
- Provides default data structure for new characters

### HeadingContainer

Displays character metadata fields:

- Name, Player Name
- Ancestry/Heritage, Background
- Class, Level, Size
- Alignment, Traits
- Experience Points, Hero Points

### Stats Components

#### StatsFirstRowContainer

Main stats container that manages:

- Character level (passed to child components)
- Ability scores (Strength, Dexterity, Constitution, Intellect, Wisdom, Charisma)
- Ability modifiers (calculated automatically)
- Aggregated stats passed to specialized components

#### AbilityScores

- Interactive ability score inputs
- Automatic modifier calculation using `getAbilityModifier()` from `utils/pf2eMath`
- Display formatted modifiers (+2, -1, etc.)

#### ClassDC, ArmorClass, HitPoints, Perception, SavingThrows

Individual stat components that:

- Receive props from parent container (level, ability modifiers)
- Calculate proficiency bonuses
- Display calculated totals
- Allow manual overrides for item bonuses

### Feats Components

#### FeatsContainer

Manages feat state and operations:

- State array of all character feats
- `addFeat()` - Adds a new feat to the list
- `deleteFeat()` - Removes a feat by row number
- Organizes feats into two columns by type

#### NewFeatForm

Feat creation form with fields:

- Level (text input)
- Type (dropdown: Ancestry, Skill, General, Class, Bonus)
- Name (textarea)
- Description (textarea)

#### FeatTable & Feat

- Display list of feats filtered by type
- Individual feat cards with delete functionality

### Spells Components

#### SpellsContainer

Manages spell state and operations:

- State array of all character spells
- `addSpell()` - Adds a new spell to the list
- `deleteSpell()` - Removes a spell by row number
- Includes sample spells (Fireball, Message, Fly, Heal)

#### NewSpellForm

Spell creation form with fields:

- Level (text input)
- Name (textarea)
- Description (textarea)

## Data Flow

### State Management

Currently uses React's built-in state management:

- Component-level state via `useState()`
- Props passed down from parent to child components
- Callbacks passed for child-to-parent communication

### Data Structure

Character data follows this schema:

```javascript
{
  details: {
    name: string,
    playerName: string,
    ancestryHeritage: string,
    background: string,
    heroPoints: string,
    exp: string,
    className: string,
    size: string,
    alignment: string,
    traits: string
  },
  stats: {
    level: number,
    abilities: {
      strength: number,
      dexterity: number,
      constitution: number,
      intellect: number,
      wisdom: number,
      charisma: number
    }
  },
  feats: [
    {
      rowNumber: number,
      rowLevel: string,
      rowType: string,
      rowName: string,
      rowDescription: string
    }
  ],
  spells: [
    {
      rowNumber: number,
      rowLevel: string,
      rowName: string,
      rowDescription: string
    }
  ],
  notes: string
}
```

## Styling

### CSS Architecture

- Global styles: `App.css`, `index.css`
- React Bootstrap for layout and components
- Custom CSS classes for Pathfinder 2e themed styling

### Design System

- Color scheme: Parchment/brown theme matching traditional character sheets
- Typography: Upper-case labels, clear field hierarchy
- Components: Card-based sections, consistent spacing

## Utilities

### pf2eMath.js

Helper functions for Pathfinder 2e calculations:

- `getAbilityModifier(score)` - Converts ability scores to modifiers
- `getProficiencyBonus(level, proficiency)` - Calculates proficiency bonuses
- `formatSigned(number)` - Formats numbers with + or - prefix

## Backend Integration

See [API Integration Guide](API_INTEGRATION.md) for details on connecting to the character-backend service.

## Future Enhancements

Potential architectural improvements:

- Context API or Redux for global state management
- TypeScript for type safety
- More granular component splitting for reusability
- Custom hooks for common logic (useCharacter, useAbilityScore)
- Form validation library integration
- Persistent local storage fallback
