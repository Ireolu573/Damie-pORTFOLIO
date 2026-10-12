import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

export type View = { body: ReactNode; caption: string } | null;

export default function Lightbox({ view, onClose }: { view: View; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (view && !d.open) d.showModal();
    if (!view && d.open) d.close();
  }, [view]);

  return (
    <dialog
      ref={ref}
      aria-label="Viewer"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      <div className="lb">{view?.body}</div>
      <div className="lbcap">{view?.caption}</div>
      <button type="button" className="close" onClick={onClose} aria-label="Close">
        <X size={22} />
      </button>
    </dialog>
  );
}
