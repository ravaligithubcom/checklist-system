module.exports = [
  {
    id: "valuationFeePaid",
    name: "Valuation Fee Paid",
    condition: (data) => data.isValuationFeePaid === true,
  },
  {
    id: "ukResident",
    name: "UK Resident",
    condition: (data) => data.isUkResident === true,
  },
  {
    id: "riskRatingMedium",
    name: "Risk Rating Medium",
    condition: (data) => data.riskRating === "Medium",
  },
  {
    id: "ltvBelow60",
    name: "LTV Below 60%",
    condition: (data) => {
      const ltv = (data.loanRequired / data.purchasePrice) * 100;
      return ltv < 60;
    },
  },
];
