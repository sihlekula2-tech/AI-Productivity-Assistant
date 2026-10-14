import { Copy, RefreshCw, Download, Loader2 } from "lucide-react";
import { toast } from "sonner";

export const DISCLAIMER = "AI-generated content may contain errors. Please review before use.";

function downloadPdf(title: string, text: string) {
  const w = window.open("", "_blank");
  if (!w) return toast.error("Allow pop-ups to download the PDF.");
  const esc = text.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  w.document.write(`<html><head><title>${title}</title></head><body style="font-family:sans-serif;padding:32px;white-space:pre-wrap;line-height:1.5"><h2>${title}</h2>${esc}<p style="color:#888;font-size:12px">${DISCLAIMER}</p></body></html>`);
  w.document.close();
  w.focus();
  w.print();
}

export function AIOutput({ title, text, loading, error, onRegenerate }: { title: string; text: string; loading: boolean; error: string; onRegenerate: () => void }) {
  if (!loading && !text && !error) return null;
  return (
    <div className="mt-6 rounded-2xl border bg-card p-5 shadow-soft" aria-live="polite">
      {loading ? (
        <p className="flex items-center gap-2 text-muted-foreground"><Loader2 className="animate-spin" size={18} /> Thinking…</p>
      ) : error ? (
        <p className="text-destructive">{error}</p>
      ) : (
        <div className="whitespace-pre-wrap text-sm leading-relaxed">{text}</div>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={onRegenerate} disabled={loading} className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm font-semibold hover:bg-secondary disabled:opacity-50"><RefreshCw size={14} /> Regenerate</button>
        {text && !loading && (
          <>
            <button onClick={() => { navigator.clipboard.writeText(text); toast.success("Copied"); }} className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm font-semibold hover:bg-secondary"><Copy size={14} /> Copy</button>
            <button onClick={() => downloadPdf(title, text)} className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm font-semibold hover:bg-secondary"><Download size={14} /> PDF</button>
          </>
        )}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">{DISCLAIMER}</p>
    </div>
  );
}
