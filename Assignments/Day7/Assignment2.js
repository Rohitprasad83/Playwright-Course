function calculateEMI(principal, annualRate, tenureYears) {
    const monthlyInterestRate = annualRate/(12 * 100);
    const tenureMonths = tenureYears*12;
    const numerator = principal* monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureMonths);
    const denominator = Math.pow(1 + monthlyInterestRate, tenureMonths) - 1;

    const EMI = numerator/denominator;

    return EMI;
}

console.log(calculateEMI(500000, 10, 5));
console.log(calculateEMI(800000, 9, 7));
console.log(calculateEMI(300000, 8.5, 3));
