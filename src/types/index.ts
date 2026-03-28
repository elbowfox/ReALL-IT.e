export interface ContentNode {
  id: string;
  type: 'blog' | 'video' | 'social' | 'email' | 'podcast' | 'affiliate';
  title: string;
  topic: string;
  keywords: string[];
  status: 'generating' | 'optimizing' | 'publishing' | 'live' | 'failing' | 'repairing';
  generatedAt: Date;
  publishedAt?: Date;
  views: number;
  engagement: number;
  revenue: number;
  roi: number;
  platforms: string[];
  quality: number;
  seoScore: number;
  errors?: string[];
  repairCount?: number;
}

export interface SEOMetric {
  keyword: string;
  volume: number;
  difficulty: number;
  position: number;
  trend: 'up' | 'down' | 'stable';
  competitors: string[];
}

export interface RevenueStream {
  id: string;
  type: 'affiliate' | 'product' | 'subscription' | 'ads' | 'sponsorship';
  source: string;
  revenue: number;
  conversions: number;
  ctr: number;
  trend: 'up' | 'down' | 'stable';
}

export interface SystemHealth {
  component: string;
  status: 'healthy' | 'warning' | 'critical' | 'repairing';
  lastCheck: Date;
  uptime: number;
  errors: number;
  autoRepair: boolean;
}

export interface EvolutionEvent {
  id: string;
  type: 'content' | 'seo' | 'monetization' | 'system';
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  metrics: Record<string, string | number>;
  timestamp: Date;
}

export interface AutomationConfig {
  contentFrequency: Record<string, number>;
  monetizationThreshold: number;
  repairEnabled: boolean;
  evolutionEnabled: boolean;
  scaleTargets: Record<string, number>;
}

export interface UniversalIntegration {
  id: string;
  name: string;
  type: 'api' | 'oauth' | 'webhook' | 'file';
  status: 'connected' | 'disconnected' | 'error';
  lastSync: Date;
  fileTypes: string[];
  autoSwitch: boolean;
}

export interface ModularityEngine {
  modules: Module[];
  activeIntegrations: string[];
  fileFormatSupport: string[];
}

export interface Module {
  id: string;
  name: string;
  type: 'video' | 'audio' | 'text' | 'image' | 'data' | 'payment';
  fileTypes: string[];
  integrations: string[];
  enabled: boolean;
}
