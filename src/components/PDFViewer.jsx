import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PDFViewer = ({ url, viewerType = 'local', title = 'Document' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [currentViewer, setCurrentViewer] = useState(viewerType);

  const getViewerUrl = () => {
    try {
      // Ensure the URL is absolute
      const baseUrl = url.startsWith('http') ? url : window.location.origin + url;
      
      switch (currentViewer) {
        case 'local':
          // Use object tag for local PDFs
          return baseUrl;
        case 'google':
          // Use Google Docs viewer
          return `https://docs.google.com/viewer?url=${encodeURIComponent(baseUrl)}&embedded=true`;
        case 'office':
          // Use Microsoft Office viewer
          return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(baseUrl)}`;
        default:
          return baseUrl;
      }
    } catch (error) {
      console.error('Error generating viewer URL:', error);
      return '';
    }
  };

  const handleLoadError = () => {
    console.log(`PDF load error with viewer: ${currentViewer}, retry: ${retryCount}`);
    
    if (retryCount < 2) {
      setRetryCount(prev => prev + 1);
      setIsLoading(true);
    } else {
      // Try different viewers in sequence
      switch (currentViewer) {
        case 'local':
          setCurrentViewer('google');
          break;
        case 'google':
          setCurrentViewer('office');
          break;
        case 'office':
          setIsLoading(false);
          setError('Could not load PDF. Please try downloading it instead.');
          return;
        default:
          setCurrentViewer('local');
      }
      setRetryCount(0);
      setIsLoading(true);
    }
  };

  const handleLoad = (event) => {
    setIsLoading(false);
    setError(null);
  };

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    if (!url) {
      setError('PDF URL is missing');
      setIsLoading(false);
      return;
    }

    // Check if file exists
    fetch(url, { method: 'HEAD' })
      .then(response => {
        if (!response.ok) throw new Error('PDF not found');
      })
      .catch(() => {
        console.log('PDF pre-check failed, trying direct load anyway');
      });
  }, [url, currentViewer]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pdf-viewer-container relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden bg-white shadow-xl"
    >
      <div className="bg-stone/5 border-b border-sand px-4 py-3 flex justify-between items-center">
        <span className="text-coffee font-medium truncate">{title}</span>
        <div className="flex items-center gap-2">
          <a
            href={url}
            download
            className="px-3 py-1.5 bg-white text-sm text-coffee hover:text-stone rounded-lg transition-colors flex items-center gap-2 border border-sand hover:border-stone/20"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </a>
          <button
            onClick={() => window.open(url, '_blank')}
            className="px-3 py-1.5 bg-white text-sm text-coffee hover:text-stone rounded-lg transition-colors flex items-center gap-2 border border-sand hover:border-stone/20"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open in New Tab
          </button>
        </div>
      </div>

      <div className="relative bg-white">
        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-white z-10"
            >
              <div className="flex flex-col items-center">
                <div className="loading-spinner"></div>
                <p className="mt-4 text-coffee">Loading PDF...</p>
              </div>
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-white z-10"
            >
              <div className="text-center p-8">
                <div className="mb-4 text-red-500">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <p className="text-coffee mb-4">{error}</p>
                <div className="flex justify-center gap-4">
                  <a
                    href={url}
                    download
                    className="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors"
                  >
                    Download PDF
                  </a>
                  {retryCount < 3 && (
                    <button
                      onClick={() => {
                        setIsLoading(true);
                        setError(null);
                        setRetryCount(0);
                        setCurrentViewer('local');
                      }}
                      className="px-4 py-2 border border-brand-500 text-brand-500 rounded-lg hover:bg-brand-50 transition-colors"
                    >
                      Try Again
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {currentViewer === 'local' ? (
          <object
            data={url}
            type="application/pdf"
            className="w-full min-h-[600px] border-0"
            onLoad={handleLoad}
            onError={handleLoadError}
          >
            <div className="p-8 text-center">
              <p className="text-coffee mb-4">Unable to display PDF directly.</p>
              <a
                href={url}
                download
                className="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors inline-block"
              >
                Download PDF
              </a>
            </div>
          </object>
        ) : (
          <motion.iframe
            key={`${currentViewer}-${retryCount}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            src={getViewerUrl()}
            className="w-full min-h-[600px] border-0"
            onLoad={handleLoad}
            onError={handleLoadError}
            title={`PDF Viewer - ${title}`}
            loading="lazy"
          />
        )}
      </div>
    </motion.div>
  );
};

export default PDFViewer; 