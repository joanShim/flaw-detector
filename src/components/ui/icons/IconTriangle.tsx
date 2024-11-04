import { cn } from "@/lib/utils";

export default function IconTriangle({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="23"
      height="20"
      viewBox="0 0 23 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-accent-orange", className)}
      {...props}
    >
      <path d="M9.80419 0.958085C10.5579 -0.319361 12.4421 -0.319362 13.1958 0.958083L22.7347 17.1257C23.4884 18.4032 22.5463 20 21.0389 20H1.96108C0.453689 20 -0.488429 18.4032 0.265264 17.1257L9.80419 0.958085Z" />
    </svg>
  );
}
