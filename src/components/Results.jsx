import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  const intialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  console.log(resultData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest Value</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tboday>
        {resultData.map((yearData) => {
          const totaInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            intialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totaInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totaInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tboday>
    </table>
  );
}
