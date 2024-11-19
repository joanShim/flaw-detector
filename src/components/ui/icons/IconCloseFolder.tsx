export default function IconCloseFolder({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M5.43135 2.35438C5.23644 2.15947 4.97485 2.05176 4.703 2.05176H2.05122C1.48702 2.05176 1.03052 2.51338 1.03052 3.07759L1.02539 9.23259C1.02539 9.7968 1.48702 10.2584 2.05122 10.2584H10.2579C10.8221 10.2584 11.2837 9.7968 11.2837 9.23259V4.10342C11.2837 3.53922 10.8221 3.07759 10.2579 3.07759H6.15456L5.43135 2.35438Z" />
    </svg>
  );
}
