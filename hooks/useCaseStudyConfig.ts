import { useState, useCallback, useMemo, useEffect } from 'react';
import { CaseStudyConfig, MetricConfig } from '@/types/case-study';
import { createDefaultConfig } from '@/lib/defaults';
import { useLocalStorage } from './useLocalStorage';

const STORAGE_KEY = 'orca-case-study-config';

/**
 * Main hook for managing case study configuration state
 * Provides methods to update various fields and syncs with localStorage
 */
export function useCaseStudyConfig() {
  // Use a stable default config to prevent hydration mismatches
  // The actual config will be loaded from localStorage in useEffect
  const defaultConfig = useMemo(() => createDefaultConfig(), []);
  const [config, setConfig, removeConfig] = useLocalStorage<CaseStudyConfig>(
    STORAGE_KEY,
    defaultConfig
  );

  // Update timestamps and ID after hydration (client-side only)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Only update if we're using the default config (not loaded from localStorage)
    if (config.id === 'case-study-default') {
      const now = new Date().toISOString();
      setConfig((prev) => ({
        ...prev,
        id: `case-study-${Date.now()}`,
        createdAt: now,
        updatedAt: now,
      }));
    }
  }, [config.id, setConfig]);

  // Update a top-level field in the config
  const updateField = useCallback(
    <K extends keyof CaseStudyConfig>(field: K, value: CaseStudyConfig[K]) => {
      setConfig((prev) => ({
        ...prev,
        [field]: value,
        updatedAt: new Date().toISOString(),
      }));
    },
    [setConfig]
  );

  // Update a specific metric by ID
  const updateMetric = useCallback(
    (metricId: string, updates: Partial<MetricConfig>) => {
      setConfig((prev) => ({
        ...prev,
        metrics: prev.metrics.map((metric) =>
          metric.id === metricId ? { ...metric, ...updates } : metric
        ),
        updatedAt: new Date().toISOString(),
      }));
    },
    [setConfig]
  );

  // Toggle a metric's enabled state
  const toggleMetric = useCallback(
    (metricId: string) => {
      setConfig((prev) => ({
        ...prev,
        metrics: prev.metrics.map((metric) =>
          metric.id === metricId ? { ...metric, enabled: !metric.enabled } : metric
        ),
        updatedAt: new Date().toISOString(),
      }));
    },
    [setConfig]
  );

  // Update multiple fields at once (useful for loading saved configs)
  const updateConfig = useCallback(
    (updates: Partial<CaseStudyConfig>) => {
      setConfig((prev) => ({
        ...prev,
        ...updates,
        updatedAt: new Date().toISOString(),
      }));
    },
    [setConfig]
  );

  // Reset to default configuration
  const resetToDefault = useCallback(() => {
    const newDefault = createDefaultConfig();
    setConfig(newDefault);
  }, [setConfig]);

  // Load a specific configuration (for loading saved configs)
  const loadConfig = useCallback(
    (newConfig: CaseStudyConfig) => {
      setConfig(newConfig);
    },
    [setConfig]
  );

  // Add an outcome to the outcomes array
  const addOutcome = useCallback(() => {
    setConfig((prev) => ({
      ...prev,
      outcomes: [...prev.outcomes, ''],
      updatedAt: new Date().toISOString(),
    }));
  }, [setConfig]);

  // Update an outcome by index
  const updateOutcome = useCallback(
    (index: number, value: string) => {
      setConfig((prev) => ({
        ...prev,
        outcomes: prev.outcomes.map((outcome, i) => (i === index ? value : outcome)),
        updatedAt: new Date().toISOString(),
      }));
    },
    [setConfig]
  );

  // Remove an outcome by index
  const removeOutcome = useCallback(
    (index: number) => {
      setConfig((prev) => ({
        ...prev,
        outcomes: prev.outcomes.filter((_, i) => i !== index),
        updatedAt: new Date().toISOString(),
      }));
    },
    [setConfig]
  );

  // Toggle a service in servicesUsed array
  const toggleService = useCallback(
    (service: string) => {
      setConfig((prev) => {
        const servicesUsed = prev.servicesUsed.includes(service as any)
          ? prev.servicesUsed.filter((s) => s !== service)
          : [...prev.servicesUsed, service as any];
        return {
          ...prev,
          servicesUsed,
          updatedAt: new Date().toISOString(),
        };
      });
    },
    [setConfig]
  );

  return {
    config,
    updateField,
    updateMetric,
    toggleMetric,
    updateConfig,
    resetToDefault,
    loadConfig,
    addOutcome,
    updateOutcome,
    removeOutcome,
    toggleService,
    removeConfig, // Expose remove for clearing localStorage if needed
  };
}

