export default function IconList({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M15.37 10.5H5.75C5.33579 10.5 5 10.1642 5 9.75C5 9.33579 5.33579 9 5.75 9H15.37C15.7842 9 16.12 9.33579 16.12 9.75C16.12 10.1642 15.7842 10.5 15.37 10.5Z"
        fill="black"
      />
      <path
        d="M5.75 14H18.57C18.9842 14 19.32 14.3358 19.32 14.75C19.32 15.1642 18.9842 15.5 18.57 15.5H5.75C5.33579 15.5 5 15.1642 5 14.75C5 14.3358 5.33579 14 5.75 14Z"
        fill="black"
      />
    </svg>
  );
}