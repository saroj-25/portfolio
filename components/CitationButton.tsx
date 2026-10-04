"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { publication } from "@/data/redesign";

export default function CitationButton() {
  const [status, setStatus] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(`${publication.authors} (${publication.year}). ${publication.title}. ${publication.venue}, ${publication.pages}. ${publication.url}`);
      setStatus("Citation copied.");
    } catch {
      setStatus("Copy unavailable. Use the paper link to view and copy its citation.");
    }
  }
  return <div className="citation-action">
    <button type="button" onClick={copy}>{status === "Citation copied." ? <Check size={15} /> : <Copy size={15} />} Copy citation</button>
    <span role="status">{status}</span>
  </div>;
}
