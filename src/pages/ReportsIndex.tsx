import { motion } from 'motion/react';
import { FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ReportsIndex() {
  const reports = Array.from({ length: 10 }, (_, i) => `report${i + 1}`);

  return (
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted block mb-4">Archives</span>
        <h1 className="text-6xl font-serif">Test Reports</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reports.map((report, index) => (
          <motion.div
            key={report}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link 
              to={`/test-reports/${report}.pdf`}
              className="group block bg-white p-8 rounded-2xl border border-ink/5 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-ink/5 rounded-full flex items-center justify-center">
                  <FileText size={20} className="text-ink" />
                </div>
                <ArrowRight size={16} className="text-muted group-hover:text-ink group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-xl font-serif capitalize">{report.replace(/(\d+)/, ' $1')}</h3>
              <p className="text-xs uppercase tracking-widest text-muted mt-2">PDF Document</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
