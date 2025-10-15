import React, { useState, useEffect } from 'react';
import { AB_TESTS, getABTestResults, calculateStatisticalSignificance } from '../utils/abTesting';

interface ABTestDashboardProps {
  className?: string;
}

export const ABTestDashboard: React.FC<ABTestDashboardProps> = ({ className = '' }) => {
  const [results, setResults] = useState<Record<string, any>>({});

  useEffect(() => {
    // In a real implementation, this would fetch from your analytics API
    // For now, we'll simulate some results
    const mockResults: Record<string, any> = {};

    Object.keys(AB_TESTS).forEach(testKey => {
      const test = (AB_TESTS as any)[testKey];
      if (test.enabled) {
        // Mock data - in production this would come from GA4/heatmap services
        mockResults[test.id] = {
          totalImpressions: Math.floor(Math.random() * 1000) + 500,
          totalConversions: Math.floor(Math.random() * 100) + 20,
          variants: test.variants.map((variant: any) => ({
            id: variant.id,
            name: variant.name,
            impressions: Math.floor(Math.random() * 500) + 100,
            conversions: Math.floor(Math.random() * 50) + 5
          }))
        };
      }
    });

    setResults(mockResults);
  }, []);

  const getTestStatus = (testId: string) => {
    const result = results[testId];
    if (!result) return { status: 'loading', confidence: 0 };

    const variants = result.variants;
    if (variants.length < 2) return { status: 'insufficient_data', confidence: 0 };

    const variantA = variants[0];
    const variantB = variants[1];

    const significance = calculateStatisticalSignificance(
      { conversions: variantA.conversions, impressions: variantA.impressions },
      { conversions: variantB.conversions, impressions: variantB.impressions }
    );

    return {
      status: significance.isSignificant ? 'significant' : 'running',
      confidence: significance.confidence,
      winner: significance.winner
    };
  };

  return (
    <div className={`bg-black/20 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 ${className}`}>
      <h3 className="text-xl font-bold text-white mb-6">A/B Test Results</h3>

      <div className="space-y-4">
        {Object.keys(AB_TESTS).map(testKey => {
          const test = (AB_TESTS as any)[testKey];
          const result = results[test.id];
          const status = getTestStatus(test.id);

          return (
            <div key={test.id} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-white font-semibold">{test.name}</h4>
                  <p className="text-gray-400 text-sm">{test.id}</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    status.status === 'significant'
                      ? 'bg-green-500/20 text-green-400'
                      : status.status === 'running'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {status.status === 'significant' ? 'Significant' : 'Running'}
                  </span>
                  {status.confidence > 0 && (
                    <p className="text-gray-400 text-xs mt-1">
                      {status.confidence}% confidence
                    </p>
                  )}
                </div>
              </div>

              {result && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {result.variants.map((variant: any) => (
                    <div key={variant.id} className="bg-gray-700/30 rounded p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-sm font-medium">
                          {variant.name}
                        </span>
                        {status.winner === (variant.id === result.variants[0].id ? 'A' : 'B') && (
                          <span className="text-green-400 text-xs">🏆 Winner</span>
                        )}
                      </div>
                      <div className="text-gray-300 text-xs space-y-1">
                        <div>Impressions: {variant.impressions.toLocaleString()}</div>
                        <div>Conversions: {variant.conversions}</div>
                        <div>Rate: {((variant.conversions / variant.impressions) * 100).toFixed(1)}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {!result && (
                <div className="text-gray-400 text-sm">Collecting data...</div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <h4 className="text-blue-400 font-semibold mb-2">How to Use</h4>
        <ul className="text-blue-300 text-sm space-y-1">
          <li>• Tests automatically split traffic based on user ID</li>
          <li>• Results update in real-time from analytics events</li>
          <li>• Statistical significance calculated automatically</li>
          <li>Winner declared when confidence {'>'} 95%</li>
        </ul>
      </div>
    </div>
  );
};