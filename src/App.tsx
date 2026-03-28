import { useState, useEffect } from 'react';
import { mockContentNodes, mockSEOMetrics, mockRevenueStreams, mockSystemHealth, mockEvolutionEvents, mockConfig } from './data/engineData';
import { ContentNode, SEOMetric, RevenueStream, SystemHealth } from './types';
import {
  Zap, TrendingUp, DollarSign, Eye, FileText, Video, Share2, Mail, Mic,
  Search, Shield, Cpu, Wrench, Sparkles, ChevronRight, Play, Pause, Settings,
  RefreshCw, AlertTriangle, CheckCircle, XCircle, Activity, Target, Globe,
  Twitter, Youtube, Linkedin, Instagram, Clock, ArrowUp, ArrowDown, Minus,
  Bot as BotIcon, Layers, GitBranch, Brain, BarChart3, Wallet
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  blog: FileText, video: Video, social: Share2, email: Mail, podcast: Mic, affiliate: DollarSign
};

const platformIcons: Record<string, React.ElementType> = {
  Twitter, Youtube, Linkedin, Instagram, WordPress: Globe, Medium: Globe, TikTok: Share2
};

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEngineRunning, setIsEngineRunning] = useState(true);
  const [selectedContent, setSelectedContent] = useState<ContentNode | null>(null);

  const totalRevenue = mockRevenueStreams.reduce((sum, r) => sum + r.revenue, 0);
  const totalViews = mockContentNodes.reduce((sum, c) => sum + c.views, 0);
  const avgEngagement = mockContentNodes.reduce((sum, c) => sum + c.engagement, 0) / mockContentNodes.length;
  const healthySystems = mockSystemHealth.filter(s => s.status === 'healthy').length;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'content', label: 'Content Engine', icon: Layers },
    { id: 'seo', label: 'SEO Command', icon: Search },
    { id: 'monetize', label: 'Monetization', icon: Wallet },
    { id: 'system', label: 'System Health', icon: Activity },
    { id: 'evolve', label: 'Evolution', icon: GitBranch },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/90 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-0.5">
                  <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center">
                    <Brain className="w-7 h-7 text-transparent bg-gradient-to-br from-cyan-400 to-pink-400 bg-clip-text" />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    Content Empire Engine
                  </h1>
                  <p className="text-xs text-slate-500">Self-Evolving AI System</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Engine Status */}
              <button
                onClick={() => setIsEngineRunning(!isEngineRunning)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                  isEngineRunning
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}
              >
                {isEngineRunning ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                {isEngineRunning ? 'Engine Running' : 'Engine Paused'}
              </button>

              {/* Stats Bar */}
              <div className="hidden lg:flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-bold">${(totalRevenue).toLocaleString()}</span>
                  <span className="text-slate-500">This Month</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 font-bold">{(totalViews / 1000).toFixed(0)}K</span>
                  <span className="text-slate-500">Views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400 font-bold">{avgEngagement.toFixed(1)}%</span>
                  <span className="text-slate-500">Engagement</span>
                </div>
              </div>

              <button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-4 border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-cyan-500 text-cyan-400'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Monthly Revenue', value: `$${totalRevenue.toLocaleString()}`, icon: DollarSign, color: 'green', trend: '+23%' },
                { label: 'Total Views', value: `${(totalViews / 1000000).toFixed(2)}M`, icon: Eye, color: 'cyan', trend: '+45%' },
                { label: 'Content Pieces', value: mockContentNodes.length.toString(), icon: FileText, color: 'purple', trend: '+12' },
                { label: 'System Health', value: `${healthySystems}/${mockSystemHealth.length}`, icon: Activity, color: 'blue', trend: '99.8%' },
              ].map((kpi, i) => (
                <div key={i} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-${kpi.color}-500/20 flex items-center justify-center`}>
                      <kpi.icon className={`w-6 h-6 text-${kpi.color}-400`} />
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      kpi.trend.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-slate-700 text-slate-400'
                    }`}>
                      {kpi.trend}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{kpi.value}</div>
                  <div className="text-sm text-slate-400">{kpi.label}</div>
                </div>
              ))}
            </div>

            {/* Revenue & Content Overview */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Top Performing Content */}
              <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Top Performing Content</h2>
                  <button className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                    View All <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-4">
                  {mockContentNodes.filter(c => c.status === 'live').slice(0, 5).map(content => {
                    const Icon = iconMap[content.type] || FileText;
                    return (
                      <div key={content.id} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
                        onClick={() => setSelectedContent(content)}>
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          content.type === 'video' ? 'bg-red-500/20 text-red-400' :
                          content.type === 'blog' ? 'bg-blue-500/20 text-blue-400' :
                          content.type === 'social' ? 'bg-cyan-500/20 text-cyan-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-white truncate">{content.title}</div>
                          <div className="text-sm text-slate-400">{content.type.toUpperCase()} • {(content.views / 1000).toFixed(1)}K views</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-400">${content.revenue}</div>
                          <div className="text-xs text-slate-500">ROI: {content.roi}%</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Revenue Streams */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 p-6">
                <h2 className="text-xl font-bold mb-6">Revenue Streams</h2>
                <div className="space-y-4">
                  {mockRevenueStreams.sort((a, b) => b.revenue - a.revenue).map(stream => (
                    <div key={stream.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{stream.source}</span>
                        <span className="text-green-400 font-bold">${stream.revenue.toLocaleString()}</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                          style={{ width: `${(stream.revenue / totalRevenue) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Total Monthly</span>
                    <span className="text-2xl font-bold text-green-400">${totalRevenue.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">System Health</h2>
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  All Systems Operational
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {mockSystemHealth.map(system => (
                  <div key={system.component} className="text-center p-3 bg-slate-800/50 rounded-xl">
                    <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${
                      system.status === 'healthy' ? 'bg-green-400' :
                      system.status === 'warning' ? 'bg-yellow-400' :
                      system.status === 'repairing' ? 'bg-blue-400 animate-pulse' : 'bg-red-400'
                    }`} />
                    <div className="text-sm font-medium truncate">{system.component}</div>
                    <div className="text-xs text-slate-500">{system.uptime}% uptime</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CONTENT ENGINE TAB */}
        {activeTab === 'content' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Content Generation Engine</h2>
                <p className="text-slate-400">AI-powered content creation across all platforms</p>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                <Sparkles className="w-5 h-5" />
                Generate New Content
              </button>
            </div>

            {/* Content Pipeline */}
            <div className="grid lg:grid-cols-6 gap-4">
              {['generating', 'optimizing', 'publishing', 'live', 'failing', 'repairing'].map(status => {
                const statusColors: Record<string, string> = {
                  generating: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
                  optimizing: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30',
                  publishing: 'from-purple-500/20 to-purple-600/20 border-purple-500/30',
                  live: 'from-green-500/20 to-green-600/20 border-green-500/30',
                  failing: 'from-red-500/20 to-red-600/20 border-red-500/30',
                  repairing: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30',
                };
                const statusIcons: Record<string, React.ReactNode> = {
                  generating: <Cpu className="w-4 h-4 text-blue-400" />,
                  optimizing: <Search className="w-4 h-4 text-yellow-400" />,
                  publishing: <Share2 className="w-4 h-4 text-purple-400" />,
                  live: <CheckCircle className="w-4 h-4 text-green-400" />,
                  failing: <XCircle className="w-4 h-4 text-red-400" />,
                  repairing: <Wrench className="w-4 h-4 text-cyan-400" />,
                };
                const items = mockContentNodes.filter(c => c.status === status);
                return (
                  <div key={status} className={`bg-gradient-to-br ${statusColors[status]} rounded-2xl p-4 border`}>
                    <div className="flex items-center gap-2 mb-4">
                      {statusIcons[status]}
                      <span className="font-medium capitalize">{status}</span>
                      <span className="ml-auto bg-white/10 px-2 py-0.5 rounded-full text-xs">{items.length}</span>
                    </div>
                    <div className="space-y-2">
                      {items.slice(0, 3).map(item => (
                        <div key={item.id} className="bg-slate-900/50 rounded-lg p-2 text-xs">
                          <div className="truncate font-medium">{item.title.slice(0, 30)}...</div>
                          <div className="text-slate-500">{item.type}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* All Content */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 p-6">
              <h3 className="text-lg font-bold mb-4">Content Library</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-slate-400 border-b border-slate-700">
                      <th className="pb-3 font-medium">Content</th>
                      <th className="pb-3 font-medium">Type</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">Views</th>
                      <th className="pb-3 font-medium">Revenue</th>
                      <th className="pb-3 font-medium">Quality</th>
                      <th className="pb-3 font-medium">SEO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockContentNodes.map(content => {
                      const Icon = iconMap[content.type] || FileText;
                      return (
                        <tr key={content.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors cursor-pointer"
                          onClick={() => setSelectedContent(content)}>
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              <Icon className="w-5 h-5 text-slate-400" />
                              <div>
                                <div className="font-medium">{content.title}</div>
                                <div className="text-xs text-slate-500">{content.keywords.slice(0, 2).join(', ')}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 capitalize">{content.type}</td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              content.status === 'live' ? 'bg-green-500/20 text-green-400' :
                              content.status === 'generating' ? 'bg-blue-500/20 text-blue-400' :
                              content.status === 'failing' ? 'bg-red-500/20 text-red-400' :
                              'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {content.status}
                            </span>
                          </td>
                          <td className="py-4">{(content.views / 1000).toFixed(1)}K</td>
                          <td className="py-4 text-green-400 font-bold">${content.revenue}</td>
                          <td className="py-4">
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div className={`h-full ${content.quality >= 90 ? 'bg-green-500' : content.quality >= 70 ? 'bg-yellow-500' : 'bg-red-500'} rounded-full`}
                                  style={{ width: `${content.quality}%` }} />
                              </div>
                              <span className="text-sm">{content.quality}%</span>
                            </div>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div className={`h-full ${content.seoScore >= 90 ? 'bg-cyan-500' : content.seoScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'} rounded-full`}
                                  style={{ width: `${content.seoScore}%` }} />
                              </div>
                              <span className="text-sm">{content.seoScore}%</span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SEO TAB */}
        {activeTab === 'seo' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">SEO Command Center</h2>
                <p className="text-slate-400">Keyword research, ranking tracking, and optimization</p>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                <Search className="w-5 h-5" />
                Find New Keywords
              </button>
            </div>

            {/* Top Keywords */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 p-6">
                <h3 className="text-lg font-bold mb-4">Top Ranking Keywords</h3>
                <div className="space-y-3">
                  {mockSEOMetrics.sort((a, b) => a.position - b.position).map((keyword, i) => (
                    <div key={keyword.keyword} className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{keyword.keyword}</div>
                        <div className="text-xs text-slate-500">
                          Vol: {keyword.volume.toLocaleString()} • Diff: {keyword.difficulty}%
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${keyword.position <= 3 ? 'text-green-400' : 'text-white'}`}>
                          #{keyword.position}
                        </div>
                        <div className="flex items-center justify-end gap-1 text-xs">
                          {keyword.trend === 'up' ? <ArrowUp className="w-3 h-3 text-green-400" /> :
                           keyword.trend === 'down' ? <ArrowDown className="w-3 h-3 text-red-400" /> :
                           <Minus className="w-3 h-3 text-slate-400" />}
                          <span className={keyword.trend === 'up' ? 'text-green-400' : keyword.trend === 'down' ? 'text-red-400' : 'text-slate-400'}>
                            {keyword.trend === 'up' ? 'Trending' : keyword.trend === 'down' ? 'Falling' : 'Stable'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEO Opportunities */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 p-6">
                <h3 className="text-lg font-bold mb-4">Quick Wins</h3>
                <div className="space-y-3">
                  {[
                    { keyword: 'ai agent builder', potential: '8.5K/mo', difficulty: '45%', action: 'Create comparison guide' },
                    { keyword: 'no code automation tools', potential: '12K/mo', difficulty: '52%', action: 'Build resource page' },
                    { keyword: 'best ai writing software', potential: '15K/mo', difficulty: '68%', action: 'Update affiliate review' },
                    { keyword: 'ai productivity tips', potential: '6.2K/mo', difficulty: '38%', action: 'Create thread series' },
                  ].map((opp, i) => (
                    <div key={i} className="p-4 bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-green-400">{opp.keyword}</span>
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">{opp.difficulty}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Potential: {opp.potential}</span>
                        <button className="text-xs text-cyan-400 hover:text-cyan-300">{opp.action} →</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MONETIZATION TAB */}
        {activeTab === 'monetize' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Monetization Controller</h2>
                <p className="text-slate-400">Revenue optimization and affiliate management</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-400">${totalRevenue.toLocaleString()}</div>
                  <div className="text-sm text-slate-400">Monthly Revenue</div>
                </div>
              </div>
            </div>

            {/* Revenue Breakdown */}
            <div className="grid lg:grid-cols-3 gap-6">
              {mockRevenueStreams.map(stream => (
                <div key={stream.id} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      stream.type === 'affiliate' ? 'bg-green-500/20 text-green-400' :
                      stream.type === 'product' ? 'bg-purple-500/20 text-purple-400' :
                      stream.type === 'subscription' ? 'bg-blue-500/20 text-blue-400' :
                      stream.type === 'ads' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-pink-500/20 text-pink-400'
                    }`}>
                      {stream.type}
                    </span>
                    {stream.trend === 'up' ? <ArrowUp className="w-5 h-5 text-green-400" /> :
                     stream.trend === 'down' ? <ArrowDown className="w-5 h-5 text-red-400" /> :
                     <Minus className="w-5 h-5 text-slate-400" />}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{stream.source}</h3>
                  <div className="text-3xl font-bold text-green-400 mb-4">${stream.revenue.toLocaleString()}</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-slate-400">Conversions</div>
                      <div className="font-bold">{stream.conversions}</div>
                    </div>
                    <div>
                      <div className="text-slate-400">CTR</div>
                      <div className="font-bold">{stream.ctr}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Revenue by Platform */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 p-6">
              <h3 className="text-lg font-bold mb-6">Revenue by Platform</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { platform: 'YouTube', revenue: 15000, icon: Youtube, color: 'red' },
                  { platform: 'Blog/Affiliate', revenue: 19700, icon: Globe, color: 'green' },
                  { platform: 'Newsletter', revenue: 8400, icon: Mail, color: 'purple' },
                  { platform: 'Courses', revenue: 18900, icon: Target, color: 'cyan' },
                  { platform: 'Brand Deals', revenue: 15000, icon: DollarSign, color: 'yellow' },
                ].map(p => (
                  <div key={p.platform} className="flex items-center gap-3 px-4 py-3 bg-slate-800/50 rounded-xl">
                    <p.icon className={`w-6 h-6 text-${p.color}-400`} />
                    <div>
                      <div className="font-medium">{p.platform}</div>
                      <div className="text-sm text-green-400">${p.revenue.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SYSTEM TAB */}
        {activeTab === 'system' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">System Health Dashboard</h2>
                <p className="text-slate-400">Self-healing and automated repair systems</p>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                <RefreshCw className="w-5 h-5" />
                Run Diagnostics
              </button>
            </div>

            {/* System Status Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockSystemHealth.map(system => (
                <div key={system.component} className={`bg-gradient-to-br rounded-2xl border p-6 ${
                  system.status === 'healthy' ? 'from-green-500/10 to-green-600/5 border-green-500/30' :
                  system.status === 'warning' ? 'from-yellow-500/10 to-yellow-600/5 border-yellow-500/30' :
                  system.status === 'repairing' ? 'from-blue-500/10 to-blue-600/5 border-blue-500/30' :
                  'from-red-500/10 to-red-600/5 border-red-500/30'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-4 h-4 rounded-full ${
                      system.status === 'healthy' ? 'bg-green-400' :
                      system.status === 'warning' ? 'bg-yellow-400' :
                      system.status === 'repairing' ? 'bg-blue-400 animate-pulse' :
                      'bg-red-400'
                    }`} />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      system.status === 'healthy' ? 'bg-green-500/20 text-green-400' :
                      system.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                      system.status === 'repairing' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {system.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{system.component}</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-slate-400">Uptime</div>
                      <div className="font-bold">{system.uptime}%</div>
                    </div>
                    <div>
                      <div className="text-slate-400">Errors</div>
                      <div className="font-bold">{system.errors}</div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-500">Last check: {new Date(system.lastCheck).toLocaleTimeString()}</span>
                    {system.autoRepair && (
                      <span className="text-xs text-cyan-400 flex items-center gap-1">
                        <Shield className="w-3 h-3" /> Auto-Repair ON
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Automation Config */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 p-6">
              <h3 className="text-lg font-bold mb-6">Automation Configuration</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-4">Content Frequency</h4>
                  <div className="space-y-3">
                    {Object.entries(mockConfig.contentFrequency).map(([platform, freq]) => (
                      <div key={platform} className="flex items-center justify-between">
                        <span className="capitalize">{platform}</span>
                        <span className="text-cyan-400 font-bold">{freq}x/week</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Scale Targets</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Monthly Revenue</span>
                      <span className="text-green-400 font-bold">${mockConfig.scaleTargets.monthlyRevenue.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Traffic Growth</span>
                      <span className="text-cyan-400 font-bold">+{mockConfig.scaleTargets.trafficGrowth}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Engagement Rate</span>
                      <span className="text-purple-400 font-bold">{mockConfig.scaleTargets.engagementRate}%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700 flex gap-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={mockConfig.repairEnabled} className="w-5 h-5 rounded bg-slate-700 border-slate-600 text-cyan-500 focus:ring-cyan-500" />
                  <span>Auto-Repair Enabled</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={mockConfig.evolutionEnabled} className="w-5 h-5 rounded bg-slate-700 border-slate-600 text-cyan-500 focus:ring-cyan-500" />
                  <span>Evolution Engine Active</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* EVOLUTION TAB */}
        {activeTab === 'evolve' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Evolution Engine</h2>
                <p className="text-slate-400">Self-improving AI that learns and optimizes</p>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                <Sparkles className="w-5 h-5" />
                Trigger Evolution
              </button>
            </div>

            {/* Evolution Timeline */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 p-6">
              <h3 className="text-lg font-bold mb-6">Recent Evolution Events</h3>
              <div className="space-y-4">
                {mockEvolutionEvents.map(event => (
                  <div key={event.id} className="flex gap-4 p-4 bg-slate-800/50 rounded-xl">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      event.impact === 'positive' ? 'bg-green-500/20 text-green-400' :
                      event.impact === 'negative' ? 'bg-red-500/20 text-red-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {event.type === 'seo' ? <Search className="w-5 h-5" /> :
                       event.type === 'content' ? <FileText className="w-5 h-5" /> :
                       event.type === 'monetization' ? <DollarSign className="w-5 h-5" /> :
                       <Cpu className="w-5 h-5" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          event.type === 'seo' ? 'bg-cyan-500/20 text-cyan-400' :
                          event.type === 'content' ? 'bg-purple-500/20 text-purple-400' :
                          event.type === 'monetization' ? 'bg-green-500/20 text-green-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>{event.type}</span>
                        <span className="text-xs text-slate-500">{new Date(event.timestamp).toLocaleDateString()}</span>
                      </div>
                      <p className="font-medium mb-2">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        {Object.entries(event.metrics).map(([key, value]) => (
                          <span key={key} className="text-slate-400">
                            {key}: <span className="text-cyan-400 font-bold">{typeof value === 'number' && key.includes('Increase') ? `+${value}%` : value}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Capabilities */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-8 h-8 text-purple-400" />
                  <h3 className="text-xl font-bold">Learning Capabilities</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Analyzes engagement patterns across all content',
                    'Identifies optimal posting times per platform',
                    'Learns from conversion data to optimize affiliate placement',
                    'Adapts content length based on retention metrics',
                    'Discovers new keyword opportunities automatically',
                    'Tests and evolves headlines/call-to-actions',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-xl font-bold">Optimization Targets</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Content Quality', current: 94, target: 98 },
                    { label: 'SEO Score', current: 89, target: 95 },
                    { label: 'Conversion Rate', current: 4.2, target: 6 },
                    { label: 'Engagement Rate', current: 18.7, target: 25 },
                  ].map((target, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span>{target.label}</span>
                        <span>{target.current}% → {target.target}%</span>
                      </div>
                      <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" style={{ width: `${(target.current / target.target) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Content Detail Modal */}
      {selectedContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedContent(null)}>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 max-w-2xl w-full border border-slate-700" onClick={e => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedContent.title}</h3>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm capitalize">{selectedContent.type}</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    selectedContent.status === 'live' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>{selectedContent.status}</span>
                </div>
              </div>
              <button onClick={() => setSelectedContent(null)} className="text-slate-400 hover:text-white">
                <XCircle className="w-6 h-6" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-800/50 rounded-xl p-4">
                <div className="text-slate-400 text-sm">Views</div>
                <div className="text-2xl font-bold">{(selectedContent.views / 1000).toFixed(1)}K</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4">
                <div className="text-slate-400 text-sm">Revenue</div>
                <div className="text-2xl font-bold text-green-400">${selectedContent.revenue}</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4">
                <div className="text-slate-400 text-sm">Engagement</div>
                <div className="text-2xl font-bold">{selectedContent.engagement}%</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4">
                <div className="text-slate-400 text-sm">ROI</div>
                <div className="text-2xl font-bold text-green-400">{selectedContent.roi}%</div>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-slate-400 mb-1">Quality Score</div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-3 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" style={{ width: `${selectedContent.quality}%` }} />
                  </div>
                  <span className="font-bold">{selectedContent.quality}%</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-1">SEO Score</div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-3 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style={{ width: `${selectedContent.seoScore}%` }} />
                  </div>
                  <span className="font-bold">{selectedContent.seoScore}%</span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button className="flex-1 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-bold transition-colors">Edit Content</button>
              <button className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl font-bold transition-colors">View Analytics</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
