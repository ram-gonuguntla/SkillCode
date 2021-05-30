export interface taxFControllers {
  basicDetails: basicFCs;
  investmentDetails: investmentFCs;
}

export interface basicFCs {
  annualIncome: number;
}

export interface investmentFCs {
  monthlyRent: number;
  rentAllowance: number;
}
