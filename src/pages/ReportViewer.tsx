import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Download, AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ReportViewer() {
  const { filename } = useParams<{ filename: string }>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Keep viewer routes and static PDF URLs separate to avoid recursive page rendering.
  const reportUrl = filename ? `/pdf-assets/${encodeURIComponent(filename)}` : '';

  useEffect(() => {
    // Set dynamic SEO title
    if (filename) {
      const displayName = filename.replace('.pdf', '').replace(/-/g, ' ').toUpperCase();
      document.title = `Test Report - ${displayName}`;
    }

    // Check if file exists
    const checkFile = async () => {
      if (!filename || !filename.toLowerCase().endsWith('.pdf')) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(reportUrl, { method: 'HEAD' });
        const contentType = response.headers.get('content-type')?.toLowerCase() ?? '';
        if (!response.ok || !contentType.includes('pdf')) {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    checkFile();

    return () => {
      document.title = 'The Humble Muse';
    };
  }, [filename, reportUrl]);

  if (loading) {
    return (
      <div className="pt-40 pb-32 flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse text-muted uppercase tracking-widest text-xs">Loading Report...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-40 pb-32 px-6 max-w-xl mx-auto text-center space-y-8">
        <div className="w-20 h-20 bg-ink/5 rounded-full flex items-center justify-center mx-auto">
          <AlertCircle size={32} className="text-muted" />
        </div>
        <h1 className="text-4xl font-serif">Report Not Found</h1>
        <p className="text-muted font-light">
          The requested report "{filename}" could not be located in our archives.
        </p>
        <div className="pt-8">
          <Link to="/test-reports" className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold border-b border-ink pb-1">
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  const displayName = filename?.replace('.pdf', '').replace(/-/g, ' ');

  return (
    <div className="pt-40 pb-32 px-6 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8"
      >
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted block mb-4">Document Viewer</span>
          <h1 className="text-5xl font-serif">Test Report - <span className="italic">{displayName}</span></h1>
        </div>
        
        <a 
          href={reportUrl} 
          download={filename}
          className="inline-flex items-center justify-center space-x-3 bg-ink text-paper px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-ink/90 transition-colors shadow-lg"
        >
          <Download size={16} />
          <span>Download PDF</span>
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-ink/5 aspect-[3/4] md:aspect-auto md:h-[800px] relative"
      >
        <iframe 
          src={`${reportUrl}#toolbar=0`} 
          className="w-full h-full border-none"
          title={`Report: ${filename}`}
        />
        
        {/* Fallback for mobile or browsers that don't support iframe PDF */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-paper/10 backdrop-blur-sm pointer-events-none md:hidden">
          <FileText size={48} className="text-muted mb-4" />
          <p className="text-xs uppercase tracking-widest text-muted">PDF Preview</p>
        </div>
      </motion.div>

      <div className="mt-12 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted">
          Hermit Cove LLP — Quality Assurance Division
        </p>
      </div>
    </div>
  );
}
