export enum Sentiment {
  Bullish = 'Bullish',
  Bearish = 'Bearish',
  Neutral = 'Neutral',
}

export enum Recommendation {
  StrongBuy = '強力買進',
  Buy = '買進',
  Hold = '續抱',
  Wait = '觀望',
  Sell = '賣出',
}

export interface AnalysisSection {
  title: string;
  score: number; // 0-100
  summary: string;
  details: string[];
}

export interface StockData {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
  timestamp: string;
}

export interface AIReport {
  stockData: StockData;
  totalScore: number;
  recommendation: Recommendation;
  targetPrice?: string;
  stopLoss?: string;
  fundamental: AnalysisSection; // 基本面
  chips: AnalysisSection; // 籌碼面
  technical: AnalysisSection; // 技術面
  news: AnalysisSection; // 消息面
  analystCommentary: string; // 20年老手總評
  radarData: { subject: string; A: number; fullMark: number }[];
}

export interface GroundingSource {
  title: string;
  uri: string;
}
