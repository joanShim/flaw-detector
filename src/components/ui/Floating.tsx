"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import dynamic from "next/dynamic";

const IconChat = dynamic(() => import("@/components/ui/icons/IconChat"));
const IconArrow = dynamic(() => import("@/components/ui/icons/IconArrow"));

const floatingVariants = cva(
  "w-[4.75rem] h-[4.75rem] border-[0.091rem] border-primary-500 rounded-full text-primary-500 flex-center-center flex-col z-20",
  {
    variants: {
      variant: {
        top: "text-lg font-normal tracking-[-1%]",
        chat: "p-[1.281rem]",
      },
    },
  },
);

export type FloatingProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof floatingVariants> & {};

const Floating = React.forwardRef<HTMLButtonElement, FloatingProps>(
  ({ className, variant, ...props }, ref) => {
    const isTopFloating = variant === "top";
    return (
      <button
        type="button"
        aria-label={isTopFloating ? "맨 위로 이동하기" : "채팅하기 (미지원)"}
        className={cn(
          floatingVariants({ variant }),
          className,
          "bg-white text-primary-500 transition-all duration-75 hover:bg-primary-500 hover:text-white",
        )}
        ref={ref}
        {...props}
      >
        {isTopFloating ? <IconArrow className="h-7 w-7" /> : <IconChat />}
        {isTopFloating && <span>TOP</span>}
      </button>
    );
  },
);
Floating.displayName = "Floating";

export { Floating };
