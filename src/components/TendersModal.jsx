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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#2A2A2A]/70 backdrop-blur-xl animate-in fade-in duration-300 text-left">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#F2F0EC] border border-[#2A2A2A]/15 shadow-2xl p-6 sm:p-8 flex flex-col text-[#2A2A2A]">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#2A2A2A]/10 mb-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#D8A56E] uppercase tracking-wider mb-1 font-bold">
              <ShieldCheck className="w-4 h-4 text-[#D8A56E]" />
              <span>Government, Institutional &amp; EPC Portal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-monumental font-bold text-[#2A2A2A]">
              Notice Inviting Tenders (NIT) &amp; DSR
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#E1DDD4] hover:bg-[#D8A56E] text-[#2A2A2A] border border-[#2A2A2A]/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informative notice */}
        <div className="p-4 rounded-2xl bg-[#E1DDD4] border border-[#2A2A2A]/10 text-xs text-[#2A2A2A]/85 leading-relaxed mb-6 font-medium">
          Architecture Avenue is empanelled as a Class-A Architecture &amp; Masterplanning Consultant with major statutory urban development authorities, PWD, and institutional hospitality trusts across India and the GCC.
        </div>

        {/* Tenders List */}
        <div className="space-y-4 mb-8">
          {TENDERS_DATA.map((tender) => (
            <div
              key={tender.refNo}
              className="p-5 rounded-2xl bg-[#E1DDD4] border border-[#2A2A2A]/10 hover:border-[#D8A56E] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm"
            >
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center space-x-2 text-xs font-mono">
                  <span className="text-[#D8A56E] font-bold">{tender.refNo}</span>
                  <span className="text-[#2A2A2A]/40">&bull;</span>
                  <span className="text-[#2A2A2A]/70">{tender.location}</span>
                </div>
                <h4 className="text-base font-bold text-[#2A2A2A] leading-snug">{tender.title}</h4>
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#2A2A2A]/70 pt-1">
                  <span>Client: <strong className="text-[#2A2A2A]">{tender.client}</strong></span>
                  <span>Est. Value: <strong className="text-[#D8A56E]">{tender.value}</strong></span>
                  <span>Deadline: <strong className="text-[#2A2A2A]">{tender.deadline}</strong></span>
                </div>
              </div>

              <div className="flex items-center space-x-2 flex-shrink-0">
                <button
                  onClick={() => handleDownload(tender.refNo)}
                  className="px-4 py-2.5 rounded-xl bg-[#F2F0EC] hover:bg-[#D8A56E] text-[#2A2A2A] border border-[#2A2A2A]/15 text-xs font-mono tracking-wider transition-all flex items-center space-x-2 shadow-sm font-semibold"
                >
                  <Download className="w-3.5 h-3.5 text-[#D8A56E]" />
                  <span>{downloadSuccess === tender.refNo ? 'Dossier Downloaded' : 'Download RFP (PDF)'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer actions */}
        <div className="pt-6 border-t border-[#2A2A2A]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#2A2A2A]/70">
          <span>Need specialized DSR Schedule of Rates or Pre-qualification credentials?</span>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="px-5 py-2.5 rounded-full bg-[#D8A56E] hover:bg-[#BD8750] text-[#2A2A2A] font-bold uppercase tracking-wider transition-all shadow-md shadow-[#D8A56E]/20"
          >
            Request Institutional Credentials
          </button>
        </div>
      </div>
    </div>
  );
}
