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
        <h3 className="text-lg font-semibold text-orca-light mb-3 flex items-center space-x-2">
          <span className="inline-flex items-center justify-center w-5 h-5 flex-shrink-0 text-orca-accent" style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px', maxWidth: '20px', maxHeight: '20px' }}>
            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} style={{ width: '100%', height: '100%', display: 'block' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
          </span>
          <span>Save Current Case Study</span>
        </h3>
        {!showSaveDialog ? (
          <button
            onClick={() => setShowSaveDialog(true)}
            className="w-full max-w-xs px-4 py-2 bg-gradient-to-r from-orca-accent to-orca-accent-dark hover:from-orca-accent-dark hover:to-orca-accent text-orca-dark font-semibold rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Save Case Study</span>
          </button>
        ) : (
          <div className="space-y-3">
            <input
              type="text"
              value={saveName}
              onChange={(e) => setSaveName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSave()}
              placeholder="Enter a name for this case study"
              className="w-full px-4 py-2 bg-orca-grey-1/50 border border-orca-grey-2/50 rounded-lg text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent focus:border-orca-accent transition-all text-sm"
              autoFocus
            />
            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-gradient-to-r from-orca-accent to-orca-accent-dark hover:from-orca-accent-dark hover:to-orca-accent text-orca-dark font-semibold rounded-lg transition-all shadow-md text-sm"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setShowSaveDialog(false);
                  setSaveName('');
                }}
                className="px-4 py-2 bg-orca-grey-1/50 hover:bg-orca-grey-1 border border-orca-grey-2/50 text-orca-light rounded-lg transition-all font-medium text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Load Saved Config */}
      <div>
        <h3 className="text-lg font-semibold text-orca-light mb-3 flex items-center space-x-2">
          <span className="inline-flex items-center justify-center w-5 h-5 flex-shrink-0 text-orca-accent" style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px', maxWidth: '20px', maxHeight: '20px' }}>
            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} style={{ width: '100%', height: '100%', display: 'block' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </span>
          <span>Load Saved Case Study</span>
          <span className="text-sm font-normal text-orca-grey-3">({savedConfigs.length} saved)</span>
        </h3>
        {savedConfigs.length === 0 ? (
          <div className="p-4 bg-orca-grey-1/20 border border-orca-grey-2/50 rounded-lg text-center">
            <p className="text-sm text-orca-grey-3">No saved case studies yet. Save your first one above!</p>
          </div>
        ) : (
          <div className="space-y-3">
            <select
              value={selectedConfigId}
              onChange={(e) => setSelectedConfigId(e.target.value)}
              className="w-full px-4 py-3 bg-orca-grey-1/50 border border-orca-grey-2/50 rounded-lg text-orca-light focus:outline-none focus:ring-2 focus:ring-orca-accent focus:border-orca-accent transition-all cursor-pointer"
            >
              <option value="">Select a saved case study...</option>
              {savedConfigs.map((saved) => (
                <option key={saved.id} value={saved.id}>
                  {saved.name} - {saved.clientName || 'Untitled'} ({new Date(saved.updatedAt).toLocaleDateString()})
                </option>
              ))}
            </select>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleLoad}
                disabled={!selectedConfigId}
                className="px-4 py-2 bg-gradient-to-r from-orca-accent to-orca-accent-dark hover:from-orca-accent-dark hover:to-orca-accent disabled:from-orca-grey-2 disabled:to-orca-grey-2 disabled:text-orca-grey-3 text-orca-dark font-semibold rounded-lg transition-all shadow-md disabled:shadow-none text-sm"
              >
                Load
              </button>
              <button
                onClick={handleDelete}
                disabled={!selectedConfigId}
                className="px-4 py-2 bg-red-900/30 hover:bg-red-900/50 disabled:bg-orca-grey-2 disabled:text-orca-grey-3 text-red-400 font-semibold rounded-lg transition-all border border-red-700/50 disabled:border-transparent text-sm"
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

