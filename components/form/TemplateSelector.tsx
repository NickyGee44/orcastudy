'use client';

import { useState } from 'react';
import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';
import { getTemplates, applyTemplate, TemplateType } from '@/lib/templates';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function TemplateSelector() {
  const { loadConfig } = useCaseStudyConfig();
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const templates = getTemplates();

  const handleApplyTemplate = async (templateId: TemplateType) => {
    if (isApplying) return;
    
    const confirmed = window.confirm(
      'This will replace your current case study with the selected template. Continue?'
    );
    
    if (!confirmed) return;

    setIsApplying(true);
    setSelectedTemplate(templateId);
    
    try {
      const templateConfig = applyTemplate(templateId);
      loadConfig(templateConfig);
      
      // Reset selection after a brief delay
      setTimeout(() => {
        setSelectedTemplate(null);
        setIsApplying(false);
      }, 1000);
    } catch (error) {
      console.error('Error applying template:', error);
      alert('Failed to apply template. Please try again.');
      setIsApplying(false);
      setSelectedTemplate(null);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-h3 font-bold text-orca-light mb-2">Start with a Template</h3>
        <p className="text-caption text-orca-grey-3">
          Choose a template to get started quickly, or start with a blank case study.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => handleApplyTemplate(template.id)}
            className="cursor-pointer"
          >
            <Card
              padding="md"
              hover
              className={`
              transition-all duration-200
              ${selectedTemplate === template.id ? 'ring-2 ring-orca-accent' : ''}
            `}
            >
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <h4 className="text-body font-semibold text-orca-light">
                  {template.name}
                </h4>
                {selectedTemplate === template.id && isApplying && (
                  <svg 
                    className="animate-spin h-4 w-4 text-orca-accent flex-shrink-0" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                    style={{ width: '16px', height: '16px', minWidth: '16px', minHeight: '16px', maxWidth: '16px', maxHeight: '16px' }}
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
              </div>
              <p className="text-caption text-orca-grey-3">
                {template.description}
              </p>
              <Button
                variant="secondary"
                size="sm"
                className="w-full mt-3"
                disabled={isApplying}
              >
                {selectedTemplate === template.id && isApplying ? 'Applying...' : 'Use Template'}
              </Button>
            </div>
          </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

