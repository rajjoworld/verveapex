import React from 'react';
import { useABTest, ABTest } from '../utils/abTesting';

interface ABTestRendererProps {
  test: ABTest;
  renderVariant: (variant: any, trackConversion: (type?: string) => void) => React.ReactNode;
  fallback?: React.ReactNode;
  onConversion?: (variantId: string, conversionType: string) => void;
}

export const ABTestRenderer: React.FC<ABTestRendererProps> = ({
  test,
  renderVariant,
  fallback = null,
  onConversion
}) => {
  const { variant, isLoading, trackConversion } = useABTest(test);

  const handleConversion = (conversionType: string = 'general') => {
    trackConversion(conversionType);
    onConversion?.(variant?.id || '', conversionType);
  };

  if (isLoading) {
    return <div className="animate-pulse bg-gray-200 rounded h-8 w-32"></div>;
  }

  if (!variant) {
    return <>{fallback}</>;
  }

  return <>{renderVariant(variant, handleConversion)}</>;
};

// Pre-built components for common A/B test types
interface ABButtonProps {
  test: ABTest;
  defaultText?: string;
  defaultVariant?: 'primary' | 'secondary';
  onConversion?: (variantId: string, conversionType: string) => void;
}

export const ABButton: React.FC<ABButtonProps> = ({
  test,
  defaultText = 'Click Here',
  defaultVariant = 'primary',
  onConversion
}) => {
  return (
    <ABTestRenderer
      test={test}
      onConversion={onConversion}
      fallback={
        <button className={`px-6 py-3 font-semibold rounded-xl transition-all duration-300 ${
          defaultVariant === 'primary'
            ? 'bg-gradient-to-r from-primary-500 to-primary-700 text-white hover:shadow-lg hover:shadow-primary-500/30'
            : 'border border-primary-500/50 text-primary-400 hover:bg-primary-500/10'
        }`}>
          {defaultText}
        </button>
      }
      renderVariant={(variant, trackConversion) => (
        <button
          className={`px-6 py-3 font-semibold rounded-xl transition-all duration-300 ${
            variant.props?.variant === 'primary'
              ? 'bg-gradient-to-r from-primary-500 to-primary-700 text-white hover:shadow-lg hover:shadow-primary-500/30'
              : 'border border-primary-500/50 text-primary-400 hover:bg-primary-500/10'
          }`}
          onClick={() => trackConversion('button_click')}
        >
          {variant.props?.text || defaultText}
        </button>
      )}
    />
  );
};

interface ABTextProps {
  test: ABTest;
  defaultText?: React.ReactNode;
  className?: string;
  onConversion?: (variantId: string, conversionType: string) => void;
}

export const ABText: React.FC<ABTextProps> = ({
  test,
  defaultText = '',
  className = '',
  onConversion
}) => {
  return (
    <ABTestRenderer
      test={test}
      onConversion={onConversion}
      fallback={<span className={className}>{defaultText}</span>}
      renderVariant={(variant, trackConversion) => (
        <span
          className={className}
          onClick={() => trackConversion('text_interaction')}
        >
          {variant.props?.text || defaultText}
        </span>
      )}
    />
  );
};

// Hook for programmatic A/B testing
export function useABTestVariant(testId: string) {
  // This would integrate with your test configuration
  // For now, return a simple interface
  return {
    getVariant: (defaultValue: any) => defaultValue,
    trackConversion: (conversionType: string = 'general') => {
      // Track conversion logic
    }
  };
}

// Utility component for conditional rendering based on A/B test
interface ConditionalABProps {
  test: ABTest;
  variantId: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const ConditionalAB: React.FC<ConditionalABProps> = ({
  test,
  variantId,
  children,
  fallback = null
}) => {
  const { variant, isLoading } = useABTest(test);

  if (isLoading) return null;
  if (variant?.id === variantId) return <>{children}</>;

  return <>{fallback}</>;
};