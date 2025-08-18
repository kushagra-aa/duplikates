// This function returns 'true' or 'false' randomly but also give preference to 'true' as per the `odds`(a Float)
export const getRandomBoolean = (odds: number): boolean => {
  if (odds < 0 || odds > 1) {
    throw new Error("Odds must be a number between 0 and 1.");
  }

  // Generate a random number between 0 and 1
  const rand = Math.random();

  // If the random number is less than or equal to `odds`, return true; otherwise, return false
  return rand >= odds;
};
