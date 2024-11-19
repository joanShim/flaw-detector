import { cn } from "@/lib/utils";

export default function IconOnProcess({
  className,
  size = 20,
  ...props
}: React.ComponentProps<"svg"> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className, "animate-spin")}
      {...props}
    >
      <rect x="0.5" width="40" height="40" rx="20" fill="#6100FF" />
      <path
        d="M27.2959 25.2041C27.4008 25.3086 27.484 25.4328 27.5408 25.5695C27.5976 25.7063 27.6268 25.8529 27.6268 26.0009C27.6268 26.149 27.5976 26.2956 27.5408 26.4324C27.484 26.5691 27.4008 26.6933 27.2959 26.7978C27.19 26.9028 24.6709 29.3769 20.5 29.3769C17.3397 29.3769 14.9359 27.74 13.375 26.2025V27.5C13.375 27.7984 13.2565 28.0845 13.0455 28.2955C12.8345 28.5065 12.5484 28.625 12.25 28.625C11.9516 28.625 11.6655 28.5065 11.4545 28.2955C11.2435 28.0845 11.125 27.7984 11.125 27.5V23C11.125 22.7016 11.2435 22.4155 11.4545 22.2045C11.6655 21.9935 11.9516 21.875 12.25 21.875H16.75C17.0484 21.875 17.3345 21.9935 17.5455 22.2045C17.7565 22.4155 17.875 22.7016 17.875 23C17.875 23.2984 17.7565 23.5845 17.5455 23.7955C17.3345 24.0065 17.0484 24.125 16.75 24.125H14.5113C15.7394 25.4675 17.8 27.125 20.5 27.125C23.7466 27.125 25.6853 25.2237 25.7041 25.2041C25.8085 25.0995 25.9326 25.0165 26.0692 24.9599C26.2058 24.9033 26.3522 24.8741 26.5 24.8741C26.6478 24.8741 26.7942 24.9033 26.9308 24.9599C27.0674 25.0165 27.1915 25.0995 27.2959 25.2041ZM28.75 11.375C28.4516 11.375 28.1655 11.4935 27.9545 11.7045C27.7435 11.9155 27.625 12.2016 27.625 12.5V13.7994C26.0641 12.2619 23.6603 10.625 20.5 10.625C16.3319 10.625 13.81 13.0991 13.7041 13.2041C13.4927 13.4154 13.374 13.7021 13.374 14.0009C13.374 14.2998 13.4927 14.5865 13.7041 14.7978C13.9154 15.0092 14.2021 15.1279 14.5009 15.1279C14.7998 15.1279 15.0865 15.0092 15.2978 14.7978C15.3147 14.7763 17.2534 12.875 20.5 12.875C23.2 12.875 25.2606 14.5325 26.4888 15.875H24.25C23.9516 15.875 23.6655 15.9935 23.4545 16.2045C23.2435 16.4155 23.125 16.7016 23.125 17C23.125 17.2984 23.2435 17.5845 23.4545 17.7955C23.6655 18.0065 23.9516 18.125 24.25 18.125H28.75C29.0484 18.125 29.3345 18.0065 29.5455 17.7955C29.7565 17.5845 29.875 17.2984 29.875 17V12.5C29.875 12.2016 29.7565 11.9155 29.5455 11.7045C29.3345 11.4935 29.0484 11.375 28.75 11.375Z"
        fill="white"
      />
    </svg>
  );
}