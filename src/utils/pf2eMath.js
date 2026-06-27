export const getAbilityModifier = (score) => {
  const parsedScore = Number(score);

  if (Number.isNaN(parsedScore)) {
    return 0;
  }

  return Math.floor((parsedScore - 10) / 2);
};

export const formatSigned = (value) => (value >= 0 ? `+${value}` : `${value}`);

const proficiencyBonusByRank = {
  T: 2,
  E: 4,
  M: 6,
  L: 8,
};

export const getProficiencyBonus = (rank, level) => {
  const proficiencyBase = proficiencyBonusByRank[rank] ?? 0;
  return proficiencyBase > 0 ? proficiencyBase + Number(level || 0) : 0;
};
