"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { trainingPhotos, trainingTopics } from "@/data/training";

type Photo = (typeof trainingPhotos)[number];
function PhotoImage({
  photo,
  expanded = false,
}: {
  photo: Photo;
  expanded?: boolean;
}) {
  const visibleHeight = photo.height - photo.cropTop - photo.cropBottom;
  const style = {
    aspectRatio: `${photo.width} / ${visibleHeight}`,
    "--photo-offset": `${(-photo.cropTop / photo.height) * 100}%`,
    ...(expanded
      ? { width: `min(100%, calc(68dvh * ${photo.width / visibleHeight}))` }
      : {}),
  } as CSSProperties;
  return (
    <div
      className={`training-image-window ${expanded ? "" : "training-grid-image"}`}
      style={style}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes={
          expanded
            ? "(max-width: 800px) 94vw, 1100px"
            : "(max-width: 640px) 100vw, (max-width: 900px) 50vw, 380px"
        }
        className="training-image"
        loading={expanded ? "eager" : "lazy"}
      />
    </div>
  );
}

export default function TrainingGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const photo = selected === null ? null : trainingPhotos[selected];
  useEffect(() => {
    const element = dialog.current;
    if (!element || selected === null) return;
    if (!element.open) element.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  function changePhoto(direction: number) {
    setSelected((index) =>
      index === null
        ? null
        : (index + direction + trainingPhotos.length) % trainingPhotos.length,
    );
  }
  function thumbnail(index: number) {
    const item = trainingPhotos[index];
    return (
      <figure
        key={item.src}
        className="training-photo"
      >
        <button
          className="training-image-button"
          type="button"
          onClick={() => setSelected(index)}
          aria-label={`Enlarge photo: ${item.title}`}
        >
          <PhotoImage photo={item} />
          <span className="training-expand" aria-hidden="true">
            <Expand size={16} />
          </span>
        </button>
        <figcaption>
          <span>{item.title}</span>
          <span className="photo-number">
            {String(index + 1).padStart(2, "0")}
          </span>
        </figcaption>
      </figure>
    );
  }

  return (
    <section
      id="training"
      className="training-section container"
      aria-labelledby="training-title"
      data-reveal
    >
      <div className="editorial-heading">
        <div>
          <p className="eyebrow">TRAINING SESSIONS / LEARNING BY DOING</p>
          <h2 id="training-title">
            From concepts
            <br />
            to <em>working code.</em>
          </h2>
        </div>
        <p className="training-count">
          <strong>10+</strong>
          <span>professional classes conducted</span>
        </p>
      </div>
      <p className="training-intro">
        I have conducted more than 10 professional classes covering Python,
        Python with AI, machine learning, neural networks, retrieval-augmented
        generation (RAG), agentic AI, natural language processing (NLP), and
        large language models (LLMs).
      </p>
      <div className="training-topics" aria-label="Training topics">
        {trainingTopics.map((topic) => (
          <span key={topic}>{topic}</span>
        ))}
      </div>
      <div className="training-photo-grid">
        {trainingPhotos.map((_, index) => thumbnail(index))}
      </div>
      <p className="training-gallery-note">
        Classroom learning, live demonstrations, and online training. Select a
        photo for a closer look.
      </p>
      <dialog
        ref={dialog}
        className="training-lightbox"
        aria-labelledby="training-photo-title"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            changePhoto(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            changePhoto(1);
          }
        }}
      >
        {photo && (
          <div className="training-lightbox-content">
            <div className="training-lightbox-header">
              <p id="training-photo-title">{photo.title}</p>
              <button
                type="button"
                onClick={() => dialog.current?.close()}
                aria-label="Close photo"
                autoFocus
              >
                <X size={22} />
              </button>
            </div>
            <PhotoImage photo={photo} expanded />
            <div className="training-lightbox-footer">
              <button
                type="button"
                onClick={() => changePhoto(-1)}
                aria-label="Previous photo"
              >
                <ArrowLeft size={21} />
              </button>
              <p aria-live="polite">
                {(selected ?? 0) + 1} / {trainingPhotos.length}
              </p>
              <button
                type="button"
                onClick={() => changePhoto(1)}
                aria-label="Next photo"
              >
                <ArrowRight size={21} />
              </button>
            </div>
            <p className="training-photo-description">{photo.alt}</p>
          </div>
        )}
      </dialog>
    </section>
  );
}
