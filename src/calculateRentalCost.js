/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
const DAILY_RATE = 40;
const LONG_TERM_RENTAL_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_RENTAL_DAYS = 3;
const MID_TERM_DISCOUNT = 20;

const baseCost = numberOfDays * DAILY_RATE;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_RENTAL_DAYS) {
    return baseCost - MID_TERM_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
