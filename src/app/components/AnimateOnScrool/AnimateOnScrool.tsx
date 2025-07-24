"use client";

import { InView } from "react-intersection-observer";
import "@/app/styles/animacoes.sass";
import React from "react";

interface AnimateOnScroolProps {
  children: React.ReactNode;
  className: string;
  threshold?: number;
}

function AnimateOnScrool({
  children,
  className,
  threshold = 0.2,
}: AnimateOnScroolProps) {
  return (
    <>
      <InView triggerOnce={true} threshold={threshold}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`${className} ${inView ? "is-visible" : ""}`}
          >
            {children}
          </div>
        )}
      </InView>
    </>
  );
}

export default AnimateOnScrool;
