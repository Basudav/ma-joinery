"use client";

import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";

type BeforeAfterSliderProps = {
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
}: BeforeAfterSliderProps) {
  const [value, setValue] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  /** Convert a clientX position into a 0–100 percentage relative to the container */
  const clientXToPercent = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return 50;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    return Math.min(100, Math.max(0, pct));
  }, []);

  /** Called only when the handle circle is pressed */
  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dragging.current = true;
      // Capture so pointermove fires even if cursor leaves the button
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    []
  );

  /** Move the divider while dragging (fires on the button due to pointer capture) */
  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLButtonElement>) => {
      if (!dragging.current) return;
      setValue(clientXToPercent(e.clientX));
    },
    [clientXToPercent]
  );

  /** Stop dragging */
  const handlePointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="@container relative w-full overflow-hidden rounded-2xl aspect-[4/3] select-none"
    >
      {/* After image — full background */}
      <div className="absolute inset-0">
        {afterSrc ? (
          <SmartImage src={afterSrc} alt={afterAlt} label="After photo" />
        ) : (
          <div className="h-full w-full bg-brand-50" />
        )}
      </div>

      {/* Before image — clipped to left portion */}
      <div
        className="absolute inset-y-0 left-0 z-10 overflow-hidden"
        style={{ width: `${value}%` }}
      >
        <div className="absolute inset-y-0 left-0 h-full w-[100cqw]">
          {beforeSrc ? (
            <SmartImage src={beforeSrc} alt={beforeAlt} label="Before photo" />
          ) : (
            <div className="h-full w-full bg-surface" />
          )}
        </div>

        {/* Vertical divider line */}
        <div className="absolute inset-y-0 right-0 w-0.5 bg-white" />

        {/* Draggable circle handle — drag starts ONLY here */}
        <button
          type="button"
          aria-label="Drag to compare before and after"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="absolute top-1/2 right-0 z-20 flex h-11 w-11 translate-x-1/2 -translate-y-1/2 cursor-ew-resize touch-none items-center justify-center rounded-full border border-line bg-white text-ink shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <MoveHorizontal aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute top-3 left-3 z-20 rounded-full bg-ink/70 px-3 py-1 text-sm text-white">
        Before
      </span>
      <span className="pointer-events-none absolute top-3 right-3 z-20 rounded-full bg-ink/70 px-3 py-1 text-sm text-white">
        After
      </span>
    </div>
  );
}
