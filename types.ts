


export interface Position {
  assetCategory: 'Stocks' | 'Options' | string;
  symbol: string;
  baseSymbol: string;
  quantity: number;
  multiplier: number;
  costBasis: number;
  closePrice: number;
  value: number;
  unrealizedPL: number;
  currency: string;
  isOption: boolean;
  optionType?: 'P' | 'C';
  strikePrice?: number;
  expiry?: string;
  collectedPremium?: number;
}

export interface ClosedPosition {
    assetCategory: string;
    symbol: string;
    realizedPL: number;
    aroc?: number;
    closeDate?: string;
}

export interface NavData {
    cash: number;
    baseCurrency: string;
}

export interface AccountInfo {
    baseCurrency: string;
    account: string;
    name: string;
    period: string;
}

export interface PLSummary {
    realized: number;
    unrealized: number;
    total: number;
}

export interface ArocTrade {
  symbol: string;
  premiumCollected: number;
  capitalAtRisk: number;
  daysOpen: number;
  aroc: number;
}

export interface ArocAnalysis {
  averageAroc: number;
  trades: ArocTrade[];
}

export interface OptionsStrategyMetrics {
  winRate: number;
  assignmentRate: number;
  totalClosed: number;
  wins: number;
}

export interface WheelCycleTrade {
    date: string;
    description: string;
    amount: number;
}

export interface WheelCycle {
  symbol: string;
  currency: string;
  initialPutPremium: number;
  totalCallPremium: number;
  stockPL: number;
  totalPL: number;
  durationDays: number;
  returnOnCost: number;
  startDate: string;
  endDate: string;
  assignmentPrice: number;
  assignmentShares: number;
  /** The gross cost basis of the stock assignment (Strike * Shares), before applying the put premium. */
  assignmentCost: number;
  /** The net cost basis of the stock assignment (Gross Cost - Put Premium). */
  netAssignmentCost: number;
  salePrice: number;
  saleProceeds: number;
  tradeLog: WheelCycleTrade[];
}

export interface PendingWheelCycle {
  symbol: string;
  currency: string;
  initialPutPremium: number;
  startDate: string;
  assignmentShares: number;
  assignmentPrice: number;
  assignmentCost: number;
  netAssignmentCost: number;
  totalCallPremium: number;
  currentStockValue: number;
  unrealizedStockPL: number;
  currentTotalPL: number;
  tradeLog: WheelCycleTrade[];
}

export interface WheelCycleAnalysis {
  completedCycles: WheelCycle[];
  pendingCycles: PendingWheelCycle[];
}

export interface MonthlySummary {
    month: string; // "YYYY-MM" format
    optionsPL: number;
    optionsPremium: number;
    syepIncome: number;
    interest: number;
    interestPaid: number;
    commissions: number;
    fees: number;
    salesTax: number;
}

export interface TickerPL {
    ticker: string;
    totalPL: number;
}

export interface NAVChange {
    startingValue: number;
    markToMarket: number;
    depositsAndWithdrawals: number;
    interest: number;
    changeInInterestAccruals: number;
    otherFees: number;
    commissions: number;
    salesTax: number;
    otherFXTranslations: number;
    endingValue: number;
}

export interface ShortPutIncomeSummary {
    totalRealizedPL: number;
    numberOfContracts: number;
    averagePLPerContract: number;
    hasData: boolean;
}

export interface ParsedData {
  positions: Position[];
  closedPositions: ClosedPosition[];
  nav: NavData;
  accountInfo: AccountInfo;
  exchangeRates: { [currency: string]: number };
  plSummary: {
      stocks: PLSummary;
      options: PLSummary;
      forex: PLSummary;
      total: PLSummary;
  };
  rateOfReturn: number;
  totalNAV: number;
  arocAnalysis: ArocAnalysis;
  optionsStrategyMetrics: OptionsStrategyMetrics;
  wheelCycleAnalysis: WheelCycleAnalysis;
  monthlySummary: MonthlySummary[];
  tickerPL: TickerPL[];
  syepIncome?: number;
  navChange: NAVChange;
  shortPutIncomeSummary: ShortPutIncomeSummary;
}