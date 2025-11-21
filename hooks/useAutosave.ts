'use client';

import { useEffect, useRef, useState } from 'react';

interface UseAutosaveOptions {
  onSave: () => void;
  delay?: number;
}

/**
 * Hook to show autosave indicator when data changes
 */
export function useAutosave({ onSave, delay = 1000 }: UseAutosaveOptions) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const triggerSave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsSaving(true);
    timeoutRef.current = setTimeout(() => {
      onSave();
      setIsSaving(false);
      setLastSaved(new Date());
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { isSaving, lastSaved, triggerSave };
}

