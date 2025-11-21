'use client';

import { useState, useEffect } from 'react';
import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';
import {
  getSavedConfigsList,
  getSavedConfig,
  saveNewConfig,
  deleteSavedConfig,
  SavedConfigMetadata,
} from '@/lib/savedConfigs';

export default function PersistenceControls() {
  const { config, loadConfig } = useCaseStudyConfig();
  const [savedConfigs, setSavedConfigs] = useState<SavedConfigMetadata[]>([]);
  const [selectedConfigId, setSelectedConfigId] = useState<string>('');
  const [saveName, setSaveName] = useState<string>('');
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Load saved configs list on mount and when configs change
  useEffect(() => {
    refreshSavedConfigs();
  }, []);

  const refreshSavedConfigs = () => {
    const configs = getSavedConfigsList();
    setSavedConfigs(configs.sort((a, b) => 
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    ));
  };

  const handleSave = () => {
    if (!saveName.trim()) {
      setMessage({ type: 'error', text: 'Please enter a name for this case study' });
      return;
    }

    const success = saveNewConfig(config, saveName.trim());
    if (success) {
      setMessage({ type: 'success', text: 'Case study saved successfully!' });
      setSaveName('');
      setShowSaveDialog(false);
      refreshSavedConfigs();
      setTimeout(() => setMessage(null), 3000);
    } else {
      setMessage({ type: 'error', text: 'Failed to save case study. Storage may be full.' });
    }
  };

  const handleLoad = () => {
    if (!selectedConfigId) {
      setMessage({ type: 'error', text: 'Please select a case study to load' });
      return;
    }

    const savedConfig = getSavedConfig(selectedConfigId);
    if (savedConfig) {
      loadConfig(savedConfig);
      setMessage({ type: 'success', text: 'Case study loaded successfully!' });
      setTimeout(() => setMessage(null), 3000);
    } else {
      setMessage({ type: 'error', text: 'Failed to load case study' });
    }
  };

  const handleDelete = () => {
    if (!selectedConfigId) {
      setMessage({ type: 'error', text: 'Please select a case study to delete' });
      return;
    }

    if (confirm('Are you sure you want to delete this saved case study? This action cannot be undone.')) {
      const success = deleteSavedConfig(selectedConfigId);
      if (success) {
        setMessage({ type: 'success', text: 'Case study deleted successfully!' });
        setSelectedConfigId('');
        refreshSavedConfigs();
        setTimeout(() => setMessage(null), 3000);
      } else {
        setMessage({ type: 'error', text: 'Failed to delete case study' });
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Message Display */}
      {message && (
        <div
          className={`p-3 rounded-md ${
            message.type === 'success'
              ? 'bg-green-900/30 text-green-400 border border-green-700'
              : 'bg-red-900/30 text-red-400 border border-red-700'
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Save Current Config */}
      <div>
        <h3 className="text-lg font-semibold text-orca-light mb-3">Save Current Case Study</h3>
        {!showSaveDialog ? (
          <button
            onClick={() => setShowSaveDialog(true)}
            className="w-full px-4 py-2 bg-orca-accent hover:bg-orca-accent-dark text-orca-dark font-medium rounded-md transition-colors"
          >
            Save Case Study
          </button>
        ) : (
          <div className="space-y-3">
            <input
              type="text"
              value={saveName}
              onChange={(e) => setSaveName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSave()}
              placeholder="Enter a name for this case study"
              className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent"
              autoFocus
            />
            <div className="flex space-x-2">
              <button
                onClick={handleSave}
                className="flex-1 px-4 py-2 bg-orca-accent hover:bg-orca-accent-dark text-orca-dark font-medium rounded-md transition-colors"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setShowSaveDialog(false);
                  setSaveName('');
                }}
                className="px-4 py-2 bg-orca-grey-1 hover:bg-orca-grey-2 text-orca-light rounded-md transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Load Saved Config */}
      <div>
        <h3 className="text-lg font-semibold text-orca-light mb-3">
          Load Saved Case Study ({savedConfigs.length} saved)
        </h3>
        {savedConfigs.length === 0 ? (
          <p className="text-sm text-orca-grey-3">No saved case studies yet</p>
        ) : (
          <div className="space-y-3">
            <select
              value={selectedConfigId}
              onChange={(e) => setSelectedConfigId(e.target.value)}
              className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light focus:outline-none focus:ring-2 focus:ring-orca-accent"
            >
              <option value="">Select a saved case study...</option>
              {savedConfigs.map((saved) => (
                <option key={saved.id} value={saved.id}>
                  {saved.name} - {saved.clientName || 'Untitled'} ({new Date(saved.updatedAt).toLocaleDateString()})
                </option>
              ))}
            </select>
            <div className="flex space-x-2">
              <button
                onClick={handleLoad}
                disabled={!selectedConfigId}
                className="flex-1 px-4 py-2 bg-orca-accent hover:bg-orca-accent-dark disabled:bg-orca-grey-2 disabled:text-orca-grey-3 text-orca-dark font-medium rounded-md transition-colors"
              >
                Load
              </button>
              <button
                onClick={handleDelete}
                disabled={!selectedConfigId}
                className="px-4 py-2 bg-red-900/30 hover:bg-red-900/50 disabled:bg-orca-grey-2 disabled:text-orca-grey-3 text-red-400 font-medium rounded-md transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

