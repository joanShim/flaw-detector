"use client";

import { useRef, useState } from "react";
import { useFileViewerStore } from "@/stores/useFileViewerStore";
import { cn, getLanguage } from "@/lib/utils";
import dynamic from "next/dynamic";
import IconCheck from "@/components/ui/icons/IconCheck";

const IconCopy = dynamic(() => import("@/components/ui/icons/IconCopy"));

export default function CodeBlock({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  const preRef = useRef<HTMLPreElement>(null);
  const [isMouseOverCodeBlock, setIsMouseOverCodeBlock] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const currentFile = useFileViewerStore((state) => state.currentFile);

  const onClickCopy = async () => {
    const code = preRef.current?.innerText;
    await navigator.clipboard.writeText(code ?? "");

    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "leading=[1.575rem] my-[0.625rem] max-w-[88rem] rounded-[0.625rem] bg-neutral-80 text-lg tracking-[1.5%]",
        className,
      )}
      onMouseOver={() => setIsMouseOverCodeBlock(true)}
      onMouseOut={() => setIsMouseOverCodeBlock(false)}
    >
      <div className="flex-between-center h-fit px-5 py-4 text-gray-light">
        <span>{currentFile ? getLanguage(currentFile) : "javascript"}</span>
        {(isMouseOverCodeBlock || isCopied) && (
          <button
            onClick={onClickCopy}
            className={cn(
              "relative flex items-center gap-x-[0.625rem] transition-all hover:fill-white hover:text-white",
              isCopied && "transition-shadow duration-200 ease-in-out",
            )}
            disabled={isCopied}
          >
            {isCopied ? (
              <IconCheck className="size-5 fill-gray-light" />
            ) : (
              <IconCopy className="size-5" />
            )}
            <span className={isCopied ? "text-white" : ""}>
              {isCopied ? "복사완료" : "코드복사"}
            </span>
          </button>
        )}
      </div>
      <pre className="h-fit px-5 py-4 text-white" ref={preRef} {...props}>
        <code className="whitespace-pre-wrap">{children}</code>
      </pre>
    </div>
  );
}
