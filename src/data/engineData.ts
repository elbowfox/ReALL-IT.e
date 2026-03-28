import { ContentNode, SEOMetric, RevenueStream, SystemHealth, EvolutionEvent, AutomationConfig } from '../types';

export const mockContentNodes: ContentNode[] = [
  { id: '1', type: 'blog', title: 'Top 10 AI Tools for Small Business 2024', topic: 'AI Business', keywords: ['ai tools', 'small business', 'automation'], status: 'live', generatedAt: new Date('2024-03-15'), publishedAt: new Date('2024-03-15'), views: 45890, engagement: 12.4, revenue: 2340, roi: 340, platforms: ['WordPress', 'Medium', 'LinkedIn'], quality: 94, seoScore: 98 },
  { id: '2', type: 'video', title: 'How I Made $10K/month with AI Automation', topic: 'AI Income', keywords: ['ai income', 'passive income', 'automation'], status: 'live', generatedAt: new Date('2024-03-18'), publishedAt: new Date('2024-03-18'), views: 125000, engagement: 18.7, revenue: 4500, roi: 890, platforms: ['YouTube', 'TikTok', 'Twitter'], quality: 97, seoScore: 95 },
  { id: '3', type: 'social', title: 'Thread: 5 AI Prompts That Save 10 Hours Weekly', topic: 'AI Productivity', keywords: ['ai prompts', 'productivity', 'chatgpt'], status: 'live', generatedAt: new Date('2024-03-20'), publishedAt: new Date('2024-03-20'), views: 89000, engagement: 24.3, revenue: 1200, roi: 560, platforms: ['Twitter', 'LinkedIn'], quality: 92, seoScore: 88 },
  { id: '4', type: 'email', title: 'Weekly AI Insights: Edition #24', topic: 'Newsletter', keywords: ['ai newsletter', 'weekly insights'], status: 'live', generatedAt: new Date('2024-03-22'), publishedAt: new Date('2024-03-22'), views: 12400, engagement: 45.2, revenue: 890, roi: 420, platforms: ['Gumroad', 'Substack'], quality: 96, seoScore: 82 },
  { id: '5', type: 'affiliate', title: 'Best AI Writing Tools Comparison 2024', topic: 'AI Tools', keywords: ['ai writing', 'copywriting', 'jasper', 'copy.ai'], status: 'optimizing', generatedAt: new Date('2024-03-25'), views: 0, engagement: 0, revenue: 0, roi: 0, platforms: ['Blog'], quality: 78, seoScore: 72 },
  { id: '6', type: 'video', title: 'Building Your First AI Agent in 10 Minutes', topic: 'AI Tutorial', keywords: ['ai agent', 'automation', 'no-code'], status: 'generating', generatedAt: new Date('2024-03-29'), views: 0, engagement: 0, revenue: 0, roi: 0, platforms: ['YouTube'], quality: 0, seoScore: 0 },
  { id: '7', type: 'podcast', title: 'The Future of AI in Marketing', topic: 'AI Marketing', keywords: ['ai marketing', 'future tech', 'marketing ai'], status: 'repairing', generatedAt: new Date('2024-03-27'), views: 0, engagement: 0, revenue: 0, roi: 0, platforms: ['Spotify', 'Apple'], quality: 45, seoScore: 65, errors: ['Audio quality below threshold', 'Intro too long'], repairCount: 2 },
  { id: '8', type: 'blog', title: 'Complete Guide to AI SEO Domination', topic: 'AI SEO', keywords: ['ai seo', 'search engine optimization', 'rankings'], status: 'live', generatedAt: new Date('2024-03-10'), publishedAt: new Date('2024-03-10'), views: 34500, engagement: 15.8, revenue: 1890, roi: 280, platforms: ['WordPress', 'Medium'], quality: 95, seoScore: 99 },
];

export const mockSEOMetrics: SEOMetric[] = [
  { keyword: 'ai tools for business', volume: 125000, difficulty: 72, position: 3, trend: 'up', competitors: ['toolify.ai', 'g2.com'] },
  { keyword: 'best ai automation', volume: 89000, difficulty: 68, position: 1, trend: 'up', competitors: [] },
  { keyword: 'ai content generator', volume: 156000, difficulty: 78, position: 7, trend: 'up', competitors: ['jasper.ai', 'copy.ai'] },
  { keyword: 'chatgpt prompts', volume: 245000, difficulty: 85, position: 12, trend: 'down', competitors: ['awesomegptprompts.com'] },
  { keyword: 'make money with ai', volume: 98000, difficulty: 82, position: 5, trend: 'up', competitors: [] },
  { keyword: 'ai side hustle', volume: 67000, difficulty: 65, position: 2, trend: 'stable', competitors: [] },
  { keyword: 'passive income ai', volume: 45000, difficulty: 71, position: 4, trend: 'up', competitors: [] },
  { keyword: 'ai email marketing', volume: 34000, difficulty: 58, position: 1, trend: 'up', competitors: [] },
];

export const mockRevenueStreams: RevenueStream[] = [
  { id: '1', type: 'affiliate', source: 'AI Tools Reviews', revenue: 12500, conversions: 145, ctr: 3.2, trend: 'up' },
  { id: '2', type: 'product', source: 'AI Automation Course', revenue: 18900, conversions: 89, ctr: 8.5, trend: 'up' },
  { id: '3', type: 'subscription', source: 'Pro Newsletter', revenue: 8400, conversions: 420, ctr: 12.3, trend: 'up' },
  { id: '4', type: 'ads', source: 'YouTube AdSense', revenue: 5600, conversions: 0, ctr: 0, trend: 'stable' },
  { id: '5', type: 'sponsorship', source: 'Brand Deals', revenue: 15000, conversions: 3, ctr: 0, trend: 'up' },
  { id: '6', type: 'affiliate', source: 'SaaS Tools', revenue: 7200, conversions: 67, ctr: 2.8, trend: 'down' },
];

export const mockSystemHealth: SystemHealth[] = [
  { component: 'Content Generator', status: 'healthy', lastCheck: new Date(), uptime: 99.9, errors: 0, autoRepair: true },
  { component: 'SEO Optimizer', status: 'healthy', lastCheck: new Date(), uptime: 99.7, errors: 0, autoRepair: true },
  { component: 'Video Engine (VEO/LTX)', status: 'healthy', lastCheck: new Date(), uptime: 98.5, errors: 2, autoRepair: true },
  { component: 'Audio Engine (ElevenLabs)', status: 'healthy', lastCheck: new Date(), uptime: 99.2, errors: 1, autoRepair: true },
  { component: 'Social Distributor', status: 'healthy', lastCheck: new Date(), uptime: 99.8, errors: 0, autoRepair: true },
  { component: 'Monetization Controller', status: 'healthy', lastCheck: new Date(), uptime: 100, errors: 0, autoRepair: true },
  { component: 'Analytics Engine', status: 'warning', lastCheck: new Date(), uptime: 97.2, errors: 8, autoRepair: true },
  { component: 'Self-Healing Module', status: 'healthy', lastCheck: new Date(), uptime: 99.9, errors: 0, autoRepair: true },
  { component: 'Evolution Engine', status: 'healthy', lastCheck: new Date(), uptime: 99.5, errors: 0, autoRepair: true },
];

export const mockEvolutionEvents: EvolutionEvent[] = [
  { id: '1', type: 'seo', description: 'Discovered new keyword cluster: "AI Agent Tools"', impact: 'positive', metrics: { keywordsAdded: 45, potentialTraffic: 12500 }, timestamp: new Date('2024-03-28') },
  { id: '2', type: 'content', description: 'Increased video length optimal from 8min to 12min based on engagement data', impact: 'positive', metrics: { engagementIncrease: 23, retentionIncrease: 15 }, timestamp: new Date('2024-03-27') },
  { id: '3', type: 'monetization', description: 'Shifted affiliate focus from Jasper to newer AI tools with higher commissions', impact: 'positive', metrics: { revenueIncrease: 34, conversionsIncrease: 18 }, timestamp: new Date('2024-03-26') },
  { id: '4', type: 'system', description: 'Auto-repaired failing podcast audio processing pipeline', impact: 'neutral', metrics: { downtime: 12, resourcesSaved: 450 }, timestamp: new Date('2024-03-25') },
  { id: '5', type: 'content', description: 'Adjusted posting schedule based on engagement heatmaps', impact: 'positive', metrics: { engagementIncrease: 28, optimalTimeFound: '9am-11am' }, timestamp: new Date('2024-03-24') },
];

export const mockConfig: AutomationConfig = {
  contentFrequency: { blog: 3, video: 2, social: 7, email: 1, podcast: 1 },
  monetizationThreshold: 500,
  repairEnabled: true,
  evolutionEnabled: true,
  scaleTargets: { monthlyRevenue: 50000, trafficGrowth: 25, engagementRate: 20 },
};
