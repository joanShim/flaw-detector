import { cn } from "@/lib/utils";

export default function IconCaretDown({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="17"
      height="9"
      viewBox="0 0 17 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-gray-dark", className)}
      {...props}
    >
      <path d="M7.81225 8.34845L0.821839 1.72595C0.165583 1.10424 0.605592 0 1.50958 0L15.4904 0C16.3944 0 16.8344 1.10424 16.1782 1.72595L9.18774 8.34845C8.80205 8.71385 8.19795 8.71385 7.81225 8.34845Z" />
    </svg>
  );
}
