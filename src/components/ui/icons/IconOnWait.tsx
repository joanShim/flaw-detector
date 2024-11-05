export default function IconOnWait({ ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-gray-default"
      {...props}
    >
      <path
        d="M10 5.00008V10.0001L13.3333 11.6667M18.3333 10.0001C18.3333 14.6025 14.6024 18.3334 10 18.3334C5.39763 18.3334 1.66667 14.6025 1.66667 10.0001C1.66667 5.39771 5.39763 1.66675 10 1.66675C14.6024 1.66675 18.3333 5.39771 18.3333 10.0001Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
