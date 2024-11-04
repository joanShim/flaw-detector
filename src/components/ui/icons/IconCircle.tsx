import { cn } from "@/lib/utils";

export default function IconCircle({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-accent-green", className)}
      {...props}
    >
      <circle cx="11" cy="11" r="11" />
    </svg>
  );
}
