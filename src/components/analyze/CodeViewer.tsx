"use client";

import { useFileViewerStore } from "@/stores/useFileViewerStore";

import { getLanguage } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Alert } from "../ui/Alert";
import { IconMagnifierWithPlus } from "../ui/Icons";
import { useFileProcessStore } from "@/stores/useFileProcessStore";

const SyntaxHighlighter = dynamic(
  () => import("react-syntax-highlighter").then((mod) => mod.Prism),
  { ssr: false },
);

export default function CodeViewer() {
  const { currentFile, fileContent, isLoading, error } = useFileViewerStore();
  const fileStatuses = useFileProcessStore((state) => state.fileStatuses);
  const status = Array.from(fileStatuses.values())[0];

  const [highlighterStyle, setHighlighterStyle] = useState({});
  const [hasAlertBeenSet, setHasAlertBeenSet] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  useEffect(() => {
    import("react-syntax-highlighter/dist/esm/styles/prism/one-light").then(
      (mod) => setHighlighterStyle(mod.default),
    );
  }, []);

  useEffect(() => {
    if (status && !hasAlertBeenSet) {
      setIsAlertOpen(true);
      setHasAlertBeenSet(true);
    }
  }, [status, hasAlertBeenSet]);

  const renderContent = (): string => {
    if (isLoading) {
      return "Loading...";
    }

    if (error) {
      return `Error: ${error}`;
    }

    if (currentFile && fileContent) {
      return `// ${currentFile}\n\n${fileContent}`;
    }

    return "";
  };

  if (!currentFile && !isLoading && !error) {
    return (
      <div className="flex-center-center h-full flex-col gap-8 rounded-lg border border-[#c3c3c3]">
        <IconMagnifierWithPlus />
        <div className="text-2xl text-primary-500">파일을 선택하세요</div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-[#c3c3c3]">
      {/* <ProcessStatus status={status} /> */}
      <SyntaxHighlighter
        language={currentFile ? getLanguage(currentFile) : "text"}
        style={highlighterStyle}
        // showLineNumbers
        wrapLines
        className="p-11"
        PreTag={({ children, ...props }) => (
          <pre {...props} className="!m-0 h-full">
            {children}
          </pre>
        )}
      >
        {renderContent()}
      </SyntaxHighlighter>
      {isAlertOpen && <Alert status={status} />}
    </div>
  );
}
