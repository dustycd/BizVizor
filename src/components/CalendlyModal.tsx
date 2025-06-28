import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  url?: string;
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({ 
  isOpen, 
  onClose, 
  url = "https://calendly.com/bizvisor/consultation" 
}) => {
  useEffect(() => {
    if (isOpen) {
      // Load Calendly widget script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = 'unset';
        // Clean up script if needed
        const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-grey-200">
          <div>
            <h2 className="text-2xl font-bold text-heading-dark">Schedule Your Free Consultation</h2>
            <p className="text-grey-600 mt-1">Choose a convenient time to discuss your UAE business setup needs</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-grey-100 hover:bg-grey-200 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-grey-600" />
          </button>
        </div>
        
        {/* Calendly Widget */}
        <div className="h-full pb-20">
          <div
            className="calendly-inline-widget h-full"
            data-url={url}
            style={{ minWidth: '320px', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendlyModal;