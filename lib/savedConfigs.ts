import { CaseStudyConfig } from '@/types/case-study';
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from '@/hooks/useLocalStorage';

const SAVED_CONFIGS_KEY = 'orca-saved-case-studies';

export interface SavedConfigMetadata {
  id: string;
  name: string;
  clientName: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Get list of all saved case study configs (metadata only)
 */
export function getSavedConfigsList(): SavedConfigMetadata[] {
  const saved = getLocalStorageItem<Record<string, CaseStudyConfig>>(SAVED_CONFIGS_KEY, {});
  return Object.values(saved).map((config) => ({
    id: config.id,
    name: config.name,
    clientName: config.clientName,
    createdAt: config.createdAt,
    updatedAt: config.updatedAt,
  }));
}

/**
 * Get a specific saved config by ID
 */
export function getSavedConfig(id: string): CaseStudyConfig | null {
  const saved = getLocalStorageItem<Record<string, CaseStudyConfig>>(SAVED_CONFIGS_KEY, {});
  return saved[id] || null;
}

/**
 * Save a case study config
 */
export function saveConfig(config: CaseStudyConfig): boolean {
  try {
    const saved = getLocalStorageItem<Record<string, CaseStudyConfig>>(SAVED_CONFIGS_KEY, {});
    saved[config.id] = {
      ...config,
      updatedAt: new Date().toISOString(),
    };
    return setLocalStorageItem(SAVED_CONFIGS_KEY, saved);
  } catch (error) {
    console.error('Error saving config:', error);
    return false;
  }
}

/**
 * Delete a saved config by ID
 */
export function deleteSavedConfig(id: string): boolean {
  try {
    const saved = getLocalStorageItem<Record<string, CaseStudyConfig>>(SAVED_CONFIGS_KEY, {});
    delete saved[id];
    return setLocalStorageItem(SAVED_CONFIGS_KEY, saved);
  } catch (error) {
    console.error('Error deleting config:', error);
    return false;
  }
}

/**
 * Save a new config with a unique name
 */
export function saveNewConfig(config: CaseStudyConfig, name: string): boolean {
  const configToSave = {
    ...config,
    name,
    id: `saved-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  return saveConfig(configToSave);
}

