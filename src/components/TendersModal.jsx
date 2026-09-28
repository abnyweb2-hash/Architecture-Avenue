import React, { useState } from 'react';
import { X, FileText, Download, ShieldCheck, ExternalLink, Search, CheckCircle2 } from 'lucide-react';
import { TENDERS_DATA } from '../data/portfolioData';

export default function TendersModal({ isOpen, onClose, onOpenConsultation }) {
  const [downloadSuccess, setDownloadSuccess] = useState(null);

  if (!isOpen) return null;

  const handleDownload = (refNo) => {
    setDownloadSuccess(refNo);
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-300 text-left">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#121212] border border-white/10 shadow-2xl p-6 sm:p-8 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Government, Institutional &amp; EPC Portal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-monumental font-bold text-white">
              Notice Inviting Tenders (NIT) &amp; DSR
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full glass-pill hover:bg-white/20 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informative notice */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-300 leading-relaxed mb-6">
          Architecture Avenue is empanelled as a Class-A Architecture &amp; Masterplanning Consultant with major statutory urban development authorities, PWD, and institutional hospitality trusts across India and the GCC.
        </div>

        {/* Tenders List */}
        <div className="space-y-4 mb-8">
          {TENDERS_DATA.map((tender) => (
            <div
              key={tender.refNo}
              className="p-5 rounded-2xl bg-[#181818] border border-white/5 hover:border-[#D4AF37]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center space-x-2 text-xs font-mono">
                  <span className="text-[#D4AF37] font-bold">{tender.refNo}</span>
                  <span className="text-neutral-500">&bull;</span>
                  <span className="text-neutral-400">{tender.location}</span>
                </div>
                <h4 className="text-base font-bold text-white leading-snug">{tender.title}</h4>
                <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 pt-1">
                  <span>Client: <strong className="text-neutral-200">{tender.client}</strong></span>
                  <span>Est. Value: <strong className="text-[#D4AF37]">{tender.value}</strong></span>
                  <span>Deadline: <strong className="text-neutral-200">{tender.deadline}</strong></span>
                </div>
              </div>

              <div className="flex items-center space-x-2 flex-shrink-0">
                <button
                  onClick={() => handleDownload(tender.refNo)}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#D4AF37] hover:text-black text-white text-xs font-mono tracking-wider transition-all flex items-center space-x-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{downloadSuccess === tender.refNo ? 'Dossier Downloaded' : 'Download RFP (PDF)'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer actions */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <span>Need specialized DSR Schedule of Rates or Pre-qualification credentials?</span>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="px-5 py-2.5 rounded-full bg-[#D4AF37] hover:bg-[#c49f2e] text-black font-bold uppercase tracking-wider transition-all"
          >
            Request Institutional Credentials
          </button>
        </div>
      </div>
    </div>
  );
}
