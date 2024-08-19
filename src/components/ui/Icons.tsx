import { cn } from "@/lib/utils";

export function IconRoundedDoc({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.53 9.43998L12.53 2.43998C12.3827 2.3137 12.194 2.24607 12 2.24998H9C6.37665 2.24998 4.25 4.37662 4.25 6.99998V17C4.25 19.6233 6.37665 21.75 9 21.75H15C17.6234 21.75 19.75 19.6233 19.75 17V9.99998C19.7534 9.7916 19.6743 9.59032 19.53 9.43998ZM12.75 4.78998L17.21 9.24998H14C13.3096 9.24998 12.75 8.69033 12.75 7.99998V4.78998ZM5.75 17C5.75549 18.7926 7.20735 20.2445 9 20.25H15C16.7926 20.2445 18.2445 18.7926 18.25 17V10.75H14C12.4812 10.75 11.25 9.51876 11.25 7.99998V3.74998H9C7.20735 3.75547 5.75549 5.20733 5.75 6.99998V17Z"
      />
    </svg>
  );
}

export function IconClose({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <path d="M7.30975 5.99999L9.78007 3.53061C9.84975 3.46093 9.90502 3.37821 9.94273 3.28716C9.98045 3.19612 9.99986 3.09854 9.99986 2.99999C9.99986 2.90144 9.98045 2.80386 9.94273 2.71282C9.90502 2.62177 9.84975 2.53905 9.78007 2.46936C9.71038 2.39968 9.62766 2.34441 9.53661 2.30669C9.44557 2.26898 9.34799 2.24957 9.24944 2.24957C9.15089 2.24957 9.05331 2.26898 8.96227 2.30669C8.87122 2.34441 8.7885 2.39968 8.71881 2.46936L6.24944 4.93968L3.78007 2.46936C3.63934 2.32863 3.44846 2.24957 3.24944 2.24957C3.05042 2.24957 2.85955 2.32863 2.71882 2.46936C2.57808 2.61009 2.49902 2.80097 2.49902 2.99999C2.49902 3.19901 2.57808 3.38988 2.71882 3.53061L5.18913 5.99999L2.71882 8.46936C2.64913 8.53905 2.59386 8.62177 2.55615 8.71282C2.51843 8.80386 2.49902 8.90144 2.49902 8.99999C2.49902 9.09854 2.51843 9.19612 2.55615 9.28716C2.59386 9.37821 2.64913 9.46093 2.71882 9.53061C2.7885 9.6003 2.87122 9.65557 2.96227 9.69328C3.05331 9.731 3.15089 9.75041 3.24944 9.75041C3.34799 9.75041 3.44557 9.731 3.53661 9.69328C3.62766 9.65557 3.71038 9.6003 3.78007 9.53061L6.24944 7.0603L8.71881 9.53061C8.7885 9.6003 8.87122 9.65557 8.96227 9.69328C9.05331 9.731 9.15089 9.75041 9.24944 9.75041C9.34799 9.75041 9.44557 9.731 9.53661 9.69328C9.62766 9.65557 9.71038 9.6003 9.78007 9.53061C9.84975 9.46093 9.90502 9.37821 9.94273 9.28716C9.98045 9.19612 9.99986 9.09854 9.99986 8.99999C9.99986 8.90144 9.98045 8.80386 9.94273 8.71282C9.90502 8.62177 9.84975 8.53905 9.78007 8.46936L7.30975 5.99999Z" />
    </svg>
  );
}

export function IconKebabMenu({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="3"
      height="17"
      viewBox="0 0 3 17"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("cursor-pointer fill-black", className)}
      {...props}
    >
      <circle cx="1.5" cy="1.5" r="1.5" />
      <circle cx="1.5" cy="8.5" r="1.5" />
      <circle cx="1.5" cy="15.5" r="1.5" />
    </svg>
  );
}

export function IconArrow({
  direction = "up",
  className,
  ...props
}: React.ComponentProps<"svg">) {
  const paths: Record<string, string> = {
    up: "M26.0612 15.0613C25.9219 15.2011 25.7563 15.3121 25.574 15.3878C25.3917 15.4635 25.1962 15.5025 24.9987 15.5025C24.8013 15.5025 24.6059 15.4635 24.4235 15.3878C24.2412 15.3121 24.0756 15.2011 23.9362 15.0613L17.5 8.62505V27C17.5 27.3979 17.342 27.7794 17.0607 28.0607C16.7794 28.342 16.3978 28.5 16 28.5C15.6022 28.5 15.2206 28.342 14.9393 28.0607C14.658 27.7794 14.5 27.3979 14.5 27V8.62505L8.06125 15.0613C7.77946 15.3431 7.39726 15.5014 6.99875 15.5014C6.60023 15.5014 6.21804 15.3431 5.93625 15.0613C5.65446 14.7795 5.49615 14.3973 5.49615 13.9988C5.49615 13.6003 5.65446 13.2181 5.93625 12.9363L14.9362 3.9363C15.0756 3.79646 15.2412 3.6855 15.4235 3.6098C15.6058 3.53409 15.8013 3.49512 15.9987 3.49512C16.1962 3.49512 16.3916 3.53409 16.574 3.6098C16.7563 3.6855 16.9219 3.79646 17.0612 3.9363L26.0612 12.9363C26.2011 13.0757 26.312 13.2412 26.3878 13.4236C26.4635 13.6059 26.5024 13.8014 26.5024 13.9988C26.5024 14.1962 26.4635 14.3917 26.3878 14.574C26.312 14.7564 26.2011 14.9219 26.0612 15.0613Z",
    right:
      "M17.4622 26.5846C17.3224 26.4453 17.2114 26.2797 17.1357 26.0974C17.06 25.915 17.021 25.7196 17.021 25.5221C17.021 25.3247 17.06 25.1292 17.1357 24.9469C17.2114 24.7646 17.3224 24.599 17.4622 24.4596L23.8984 18.0234H5.52344C5.12562 18.0234 4.74409 17.8653 4.46278 17.584C4.18148 17.3027 4.02344 16.9212 4.02344 16.5234C4.02344 16.1256 4.18148 15.744 4.46278 15.4627C4.74409 15.1814 5.12562 15.0234 5.52344 15.0234L23.8984 15.0234L17.4622 8.58463C17.1804 8.30284 17.0221 7.92065 17.0221 7.52213C17.0221 7.12362 17.1804 6.74143 17.4622 6.45963C17.744 6.17784 18.1262 6.01953 18.5247 6.01953C18.9232 6.01953 19.3054 6.17784 19.5872 6.45963L28.5872 15.4596C28.727 15.599 28.838 15.7646 28.9137 15.9469C28.9894 16.1292 29.0284 16.3247 29.0284 16.5221C29.0284 16.7196 28.9894 16.915 28.9137 17.0974C28.838 17.2797 28.727 17.4453 28.5872 17.5846L19.5872 26.5846C19.4478 26.7245 19.2822 26.8354 19.0999 26.9111C18.9176 26.9868 18.7221 27.0258 18.5247 27.0258C18.3273 27.0258 18.1318 26.9868 17.9495 26.9111C17.7671 26.8354 17.6015 26.7245 17.4622 26.5846Z",
  };

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("cursor-pointer fill-primary-500", className)}
      {...props}
    >
      <path d={paths[direction]} />
    </svg>
  );
}

export function IconPin({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("cursor-pointer fill-primary-500", className)}
      {...props}
    >
      <path d="M29.415 10.1709L21.8287 2.58595C21.643 2.40018 21.4225 2.25282 21.1798 2.15228C20.9371 2.05175 20.677 2 20.4143 2C20.1517 2 19.8916 2.05175 19.6489 2.15228C19.4062 2.25282 19.1857 2.40018 19 2.58595L12.2962 9.31095C10.9637 8.89345 7.92122 8.3897 4.74622 10.9534C4.52738 11.1294 4.34805 11.3495 4.2199 11.5994C4.09175 11.8493 4.01766 12.1233 4.00245 12.4037C3.98724 12.6841 4.03125 12.9646 4.13161 13.2269C4.23198 13.4891 4.38645 13.7273 4.58497 13.9259L10.625 19.9634L5.29247 25.2922C5.10483 25.4798 4.99942 25.7343 4.99942 25.9997C4.99942 26.2651 5.10483 26.5196 5.29247 26.7072C5.48011 26.8948 5.73461 27.0003 5.99997 27.0003C6.26534 27.0003 6.51983 26.8948 6.70747 26.7072L12.0362 21.3747L18.0725 27.4109C18.258 27.5973 18.4785 27.7452 18.7213 27.8462C18.9641 27.9473 19.2245 27.9994 19.4875 27.9997C19.535 27.9997 19.5812 27.9997 19.6287 27.9997C19.9138 27.9799 20.1913 27.8991 20.4424 27.7625C20.6935 27.626 20.9122 27.437 21.0837 27.2084C23.5387 23.9459 23.3025 21.2934 22.7325 19.7084L29.4162 12.9997C29.6019 12.8139 29.7492 12.5933 29.8496 12.3506C29.95 12.1079 30.0017 11.8477 30.0015 11.5851C30.0014 11.3224 29.9496 11.0623 29.8489 10.8197C29.7483 10.577 29.6008 10.3566 29.415 10.1709ZM28 11.5859L20.8412 18.7684C20.6934 18.9168 20.5959 19.1079 20.5625 19.3147C20.529 19.5215 20.5614 19.7335 20.655 19.9209C21.8375 22.2872 20.43 24.7447 19.4875 25.9984L5.99997 12.5097C7.50997 11.2922 8.95497 10.9709 10.06 10.9709C10.7611 10.9614 11.4565 11.0989 12.1012 11.3747C12.2893 11.4688 12.5023 11.5013 12.7099 11.4674C12.9175 11.4335 13.1091 11.335 13.2575 11.1859L20.415 3.9997L28 11.5847V11.5859Z" />
    </svg>
  );
}

export function IconShare({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("cursor-pointer fill-primary-500", className)}
      {...props}
    >
      <path d="M29.7075 13.2933L19.7075 3.29329C19.5677 3.15335 19.3896 3.05801 19.1956 3.01932C19.0016 2.98063 18.8005 3.00033 18.6178 3.07593C18.435 3.15152 18.2788 3.27962 18.1688 3.44403C18.0588 3.60843 18.0001 3.80175 18 3.99954V9.04329C14.7575 9.32079 11.1762 10.9083 8.22998 13.407C4.68248 16.417 2.47374 20.2958 2.00999 24.3283C1.97374 24.6418 2.03731 24.9587 2.19164 25.234C2.34597 25.5093 2.58319 25.7289 2.86956 25.8616C3.15592 25.9942 3.47683 26.0332 3.78661 25.9729C4.0964 25.9126 4.37927 25.7562 4.59498 25.5258C5.96998 24.062 10.8625 19.4333 18 19.0258V23.9995C18.0001 24.1973 18.0588 24.3906 18.1688 24.555C18.2788 24.7195 18.435 24.8475 18.6178 24.9231C18.8005 24.9987 19.0016 25.0184 19.1956 24.9798C19.3896 24.9411 19.5677 24.8457 19.7075 24.7058L29.7075 14.7058C29.8945 14.5183 29.9995 14.2643 29.9995 13.9995C29.9995 13.7347 29.8945 13.4808 29.7075 13.2933ZM20 21.5858V17.9995C20 17.7343 19.8946 17.48 19.7071 17.2924C19.5196 17.1049 19.2652 16.9995 19 16.9995C15.49 16.9995 12.0712 17.9158 8.83874 19.7245C7.19242 20.6498 5.6585 21.7622 4.26748 23.0395C4.99248 20.0595 6.81999 17.2258 9.52374 14.932C12.4262 12.4708 15.9687 10.9995 19 10.9995C19.2652 10.9995 19.5196 10.8942 19.7071 10.7066C19.8946 10.5191 20 10.2648 20 9.99954V6.41454L27.5862 13.9995L20 21.5858Z" />
    </svg>
  );
}

export function IconExternalLink({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("cursor-pointer fill-primary-500", className)}
      {...props}
    >
      <path d="M23.8467 4.03667C23.7082 3.71424 23.3926 3.50383 23.0417 3.5H17.2083C16.7251 3.5 16.3333 3.89175 16.3333 4.375C16.3333 4.85825 16.7251 5.25 17.2083 5.25H20.93L14.2567 11.9233C13.9155 12.265 13.9155 12.8184 14.2567 13.16C14.5983 13.5012 15.1517 13.5012 15.4933 13.16L22.1667 6.48667V10.2083C22.1667 10.6916 22.5584 11.0833 23.0417 11.0833C23.5249 11.0833 23.9167 10.6916 23.9167 10.2083V4.375C23.9161 4.25869 23.8923 4.14367 23.8467 4.03667Z" />
      <path d="M20.7083 12.8333C20.2277 12.8396 19.8396 13.2277 19.8333 13.7083V18.375C19.8269 20.4664 18.1331 22.1603 16.0417 22.1667H9.04167C6.95025 22.1603 5.25641 20.4664 5.25 18.375V11.375C5.25641 9.28358 6.95025 7.58974 9.04167 7.58333H13.7083C14.1916 7.58333 14.5833 7.19158 14.5833 6.70833C14.5833 6.22508 14.1916 5.83333 13.7083 5.83333H9.04167C5.98109 5.83333 3.5 8.31442 3.5 11.375V18.375C3.5 21.4356 5.98109 23.9167 9.04167 23.9167H16.0417C19.1022 23.9167 21.5833 21.4356 21.5833 18.375V13.7083C21.5771 13.2277 21.189 12.8396 20.7083 12.8333Z" />
    </svg>
  );
}

export function IconFolder({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.45 7.625V7.905C19.9453 8.52698 20.146 9.33343 20 10.115L17.92 16.615C17.5115 17.6736 16.4947 18.3727 15.36 18.375H2.7C1.21076 18.3427 0.015841 17.1345 1.51304e-08 15.645V4.375C-0.000182366 2.3233 1.64848 0.652356 3.7 0.625H8C9.38071 0.625 10.5 1.74429 10.5 3.125C10.5 3.67728 10.9477 4.125 11.5 4.125H16C17.9134 4.15234 19.4502 5.71136 19.45 7.625ZM3.7 2.125C2.45736 2.125 1.45 3.13236 1.45 4.375V11.495L2.52 8.715C2.91802 7.63378 3.94784 6.91529 5.1 6.915H17.35C17.523 6.89995 17.697 6.89995 17.87 6.915C17.5751 6.13835 16.8308 5.62489 16 5.625H11.5C10.1216 5.61952 9.00548 4.50344 9 3.125C9 2.57272 8.55229 2.125 8 2.125H3.7Z"
      />
    </svg>
  );
}

export function IconDoc({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <path
        d="M20.0306 7.71938L14.7806 2.46938C14.7109 2.39975 14.6282 2.34454 14.5371 2.3069C14.4461 2.26926 14.3485 2.24992 14.25 2.25H5.25C4.85218 2.25 4.47064 2.40804 4.18934 2.68934C3.90804 2.97064 3.75 3.35218 3.75 3.75V20.25C3.75 20.6478 3.90804 21.0294 4.18934 21.3107C4.47064 21.592 4.85218 21.75 5.25 21.75H18.75C19.1478 21.75 19.5294 21.592 19.8107 21.3107C20.092 21.0294 20.25 20.6478 20.25 20.25V8.25C20.2501 8.15148 20.2307 8.05391 20.1931 7.96286C20.1555 7.87182 20.1003 7.78908 20.0306 7.71938ZM15 4.81031L17.6897 7.5H15V4.81031ZM18.75 20.25H5.25V3.75H13.5V8.25C13.5 8.44891 13.579 8.63968 13.7197 8.78033C13.8603 8.92098 14.0511 9 14.25 9H18.75V20.25Z"
        fill="#969696"
      />
    </svg>
  );
}

export function IconDone({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <path
        d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM13.5672 8.56719L9.19219 12.9422C9.13415 13.0003 9.06522 13.0464 8.98934 13.0779C8.91347 13.1093 8.83214 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51067 13.0779C8.43479 13.0464 8.36586 13.0003 8.30782 12.9422L6.43282 11.0672C6.31554 10.9499 6.24966 10.7909 6.24966 10.625C6.24966 10.4591 6.31554 10.3001 6.43282 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04086 9.99965 7.19992 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7504 8.04288 13.7504 8.125C13.7504 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z"
        fill="#00C308"
      />
    </svg>
  );
}

export function IconOnProcess({
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

export function IconError() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.3796 12.9196L12.6796 4.21959C12.0926 3.15854 10.9756 2.5 9.76298 2.5C8.55035 2.5 7.43337 3.15854 6.84631 4.21959L2.07131 12.9113C1.51031 13.9435 1.53416 15.1949 2.1341 16.2051C2.73403 17.2152 3.82144 17.8349 4.99631 17.8363H14.4463C15.6202 17.8363 16.7075 17.2189 17.3089 16.2108C17.9104 15.2027 17.9372 13.9526 17.3796 12.9196ZM9.04631 8.11959C9.04631 7.77441 9.32613 7.49459 9.67131 7.49459C10.0165 7.49459 10.2963 7.77441 10.2963 8.11959V10.6946C10.2963 11.0398 10.0165 11.3196 9.67131 11.3196C9.32613 11.3196 9.04631 11.0398 9.04631 10.6946V8.11959ZM9.67964 13.7446C10.0248 13.7446 10.3046 13.4648 10.3046 13.1196L10.2963 13.1113C10.2963 12.7707 10.0202 12.4946 9.67964 12.4946C9.33634 12.4991 9.05913 12.7763 9.05464 13.1196C9.05464 13.4648 9.33447 13.7446 9.67964 13.7446Z"
        fill="#FF6D6D"
      />
    </svg>
  );
}

export function IconOnWait({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
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

export function IconCaretLeft({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-primary-500", className)}
      {...props}
    >
      <path d="M20.7073 25.2926C20.8002 25.3855 20.8739 25.4958 20.9242 25.6172C20.9745 25.7386 21.0004 25.8687 21.0004 26.0001C21.0004 26.1315 20.9745 26.2616 20.9242 26.383C20.8739 26.5044 20.8002 26.6147 20.7073 26.7076C20.6144 26.8005 20.5041 26.8742 20.3827 26.9245C20.2613 26.9747 20.1312 27.0006 19.9998 27.0006C19.8684 27.0006 19.7383 26.9747 19.6169 26.9245C19.4955 26.8742 19.3852 26.8005 19.2923 26.7076L9.29231 16.7076C9.19933 16.6147 9.12557 16.5044 9.07525 16.383C9.02493 16.2616 8.99902 16.1315 8.99902 16.0001C8.99902 15.8687 9.02493 15.7385 9.07525 15.6171C9.12557 15.4957 9.19933 15.3854 9.29231 15.2926L19.2923 5.29257C19.48 5.10493 19.7344 4.99951 19.9998 4.99951C20.2652 4.99951 20.5197 5.10493 20.7073 5.29257C20.895 5.48021 21.0004 5.7347 21.0004 6.00007C21.0004 6.26543 20.895 6.51993 20.7073 6.70757L11.4136 16.0001L20.7073 25.2926Z" />
    </svg>
  );
}

export function IconCaretDown({
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

export function IconCheck({
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
      className={cn("fill-[#343330]", className)}
      {...props}
    >
      <path d="M21.7959 7.54597L9.7959 19.546C9.69138 19.6509 9.56719 19.7341 9.43044 19.7909C9.2937 19.8476 9.14709 19.8769 8.99902 19.8769C8.85096 19.8769 8.70435 19.8476 8.5676 19.7909C8.43086 19.7341 8.30666 19.6509 8.20215 19.546L2.95215 14.296C2.8475 14.1913 2.76449 14.0671 2.70785 13.9304C2.65122 13.7936 2.62207 13.6471 2.62207 13.4991C2.62207 13.3511 2.65122 13.2046 2.70785 13.0678C2.76449 12.9311 2.8475 12.8069 2.95215 12.7022C3.05679 12.5976 3.18103 12.5146 3.31776 12.4579C3.45448 12.4013 3.60103 12.3721 3.74902 12.3721C3.89702 12.3721 4.04356 12.4013 4.18029 12.4579C4.31702 12.5146 4.44125 12.5976 4.5459 12.7022L8.99996 17.1563L20.204 5.9541C20.4154 5.74276 20.702 5.62402 21.0009 5.62402C21.2998 5.62402 21.5864 5.74276 21.7978 5.9541C22.0091 6.16544 22.1278 6.45209 22.1278 6.75098C22.1278 7.04986 22.0091 7.33651 21.7978 7.54785L21.7959 7.54597Z" />
    </svg>
  );
}

export function IconTriangle({
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

export function IconCircle({
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


export function IconBug({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      width="191"
      height="196"
      viewBox="0 0 191 196"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M95.3023 20.0367C69.6385 20.0367 50.4865 38.8569 50.4865 60.1101C50.4865 65.6431 46.0277 70.1284 40.5274 70.1284C35.0272 70.1284 30.5684 65.6431 30.5684 60.1101C30.5684 26.0366 60.467 0 95.3023 0C130.138 0 160.036 26.0366 160.036 60.1101C160.036 65.6431 155.577 70.1284 150.077 70.1284C144.577 70.1284 140.118 65.6431 140.118 60.1101C140.118 38.8569 120.966 20.0367 95.3023 20.0367Z"
        fill="#6100FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.5274 120.477C46.0277 120.477 50.4865 124.962 50.4865 130.495C50.4865 151.749 69.6385 170.569 95.3023 170.569C120.966 170.569 140.118 151.749 140.118 130.495C140.118 124.962 144.577 120.477 150.077 120.477C155.577 120.477 160.036 124.962 160.036 130.495C160.036 164.569 130.138 190.605 95.3023 190.605C60.467 190.605 30.5684 164.569 30.5684 130.495C30.5684 124.962 35.0272 120.477 40.5274 120.477Z"
        fill="#6100FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 96.2024C0 90.7404 4.49142 86.3125 10.0319 86.3125H180.574C186.114 86.3125 190.606 90.7404 190.606 96.2024C190.606 101.664 186.114 106.092 180.574 106.092H10.0319C4.49142 106.092 0 101.664 0 96.2024Z"
        fill="#6100FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M96.2024 131.267C101.664 131.267 106.092 135.658 106.092 141.075V175.404C106.092 180.821 101.664 185.212 96.2024 185.212C90.7404 185.212 86.3125 180.821 86.3125 175.404V141.075C86.3125 135.658 90.7404 131.267 96.2024 131.267Z"
        fill="#6100FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.4274 3.00955C37.2395 -1.00318 43.4201 -1.00318 47.2322 3.00955L61.8744 18.4224C65.6865 22.4351 65.6865 28.941 61.8744 32.9538C58.0623 36.9665 51.8817 36.9665 48.0696 32.9538L33.4274 17.5409C29.6153 13.5282 29.6153 7.02227 33.4274 3.00955Z"
        fill="#6100FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M157.178 3.00955C160.99 7.02227 160.99 13.5282 157.178 17.5409L142.536 32.9538C138.724 36.9665 132.543 36.9665 128.731 32.9538C124.919 28.941 124.919 22.4351 128.731 18.4224L143.373 3.00955C147.185 -1.00318 153.366 -1.00318 157.178 3.00955Z"
        fill="#6100FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.8744 163.047C65.6865 167.059 65.6865 173.565 61.8744 177.578L47.2322 192.991C43.4201 197.004 37.2395 197.004 33.4274 192.991C29.6153 188.978 29.6153 182.472 33.4274 178.459L48.0696 163.047C51.8817 159.034 58.0623 159.034 61.8744 163.047Z"
        fill="#6100FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M128.731 163.047C132.543 159.034 138.724 159.034 142.536 163.047L157.178 178.459C160.99 182.472 160.99 188.978 157.178 192.991C153.366 197.004 147.185 197.004 143.373 192.991L128.731 177.578C124.919 173.565 124.919 167.059 128.731 163.047Z"
        fill="#6100FF"

export function IconMagnifierWithPlus({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-primary-500", className)}
      {...props}
    >
      <path d="M28.4999 21.5004C28.4999 21.8983 28.3419 22.2798 28.0606 22.5611C27.7793 22.8424 27.3978 23.0004 26.9999 23.0004H22.4999V27.5004C22.4999 27.8983 22.3419 28.2798 22.0606 28.5611C21.7793 28.8424 21.3978 29.0004 20.9999 29.0004C20.6021 29.0004 20.2206 28.8424 19.9393 28.5611C19.658 28.2798 19.4999 27.8983 19.4999 27.5004V23.0004H14.9999C14.6021 23.0004 14.2206 22.8424 13.9393 22.5611C13.658 22.2798 13.4999 21.8983 13.4999 21.5004C13.4999 21.1026 13.658 20.7211 13.9393 20.4398C14.2206 20.1585 14.6021 20.0004 14.9999 20.0004H19.4999V15.5004C19.4999 15.1026 19.658 14.7211 19.9393 14.4398C20.2206 14.1585 20.6021 14.0004 20.9999 14.0004C21.3978 14.0004 21.7793 14.1585 22.0606 14.4398C22.3419 14.7211 22.4999 15.1026 22.4999 15.5004V20.0004H26.9999C27.3978 20.0004 27.7793 20.1585 28.0606 20.4398C28.3419 20.7211 28.4999 21.1026 28.4999 21.5004ZM43.0612 43.5617C42.9219 43.7011 42.7564 43.8118 42.5743 43.8873C42.3923 43.9628 42.1971 44.0016 41.9999 44.0016C41.8028 44.0016 41.6076 43.9628 41.4255 43.8873C41.2434 43.8118 41.078 43.7011 40.9387 43.5617L31.5524 34.1736C28.2856 36.8946 24.0955 38.2515 19.8538 37.9619C15.6121 37.6723 11.6453 35.7585 8.77864 32.6187C5.91198 29.4789 4.36617 25.3548 4.46277 21.1042C4.55937 16.8537 6.29094 12.8041 9.29728 9.79777C12.3036 6.79143 16.3533 5.05985 20.6038 4.96325C24.8543 4.86665 28.9784 6.41247 32.1182 9.27912C35.258 12.1458 37.1718 16.1126 37.4614 20.3543C37.751 24.596 36.3941 28.7861 33.6731 32.0529L43.0612 41.4392C43.2007 41.5785 43.3113 41.7439 43.3868 41.926C43.4623 42.1081 43.5011 42.3033 43.5011 42.5004C43.5011 42.6975 43.4623 42.8927 43.3868 43.0748C43.3113 43.2569 43.2007 43.4224 43.0612 43.5617ZM20.9999 35.0004C23.67 35.0004 26.2801 34.2087 28.5001 32.7253C30.7202 31.2419 32.4505 29.1335 33.4723 26.6667C34.4941 24.1999 34.7614 21.4855 34.2405 18.8667C33.7196 16.248 32.4339 13.8425 30.5459 11.9545C28.6579 10.0665 26.2524 8.78073 23.6337 8.25983C21.0149 7.73893 18.3005 8.00627 15.8337 9.02805C13.3669 10.0498 11.2585 11.7802 9.7751 14.0002C8.2917 16.2203 7.49994 18.8304 7.49994 21.5004C7.50391 25.0796 8.9275 28.5111 11.4584 31.042C13.9893 33.5729 17.4207 34.9965 20.9999 35.0004Z" />
    </svg>
  );
}
        
export function IconEmptyFolder({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 15.5V12.5C4.5 11.7044 4.81607 10.9413 5.37868 10.3787C5.94129 9.81607 6.70435 9.5 7.5 9.5H17.4994C18.1482 9.50161 18.7793 9.71198 19.2994 10.1L24.9 14.3C25.0576 14.4182 25.1903 14.5663 25.2907 14.7358C25.3911 14.9053 25.4571 15.0929 25.4849 15.2879C25.5128 15.4829 25.502 15.6815 25.4531 15.8723C25.4042 16.0631 25.3182 16.2424 25.2 16.4C25.0818 16.5576 24.9337 16.6904 24.7642 16.7907C24.5947 16.8911 24.4071 16.9571 24.2121 16.9849C24.0171 17.0128 23.8185 17.002 23.6277 16.9531C23.4369 16.9042 23.2576 16.8182 23.1 16.7L17.4994 12.5H7.5V15.5C7.5 15.8978 7.34196 16.2794 7.06066 16.5607C6.77936 16.842 6.39782 17 6 17C5.60218 17 5.22064 16.842 4.93934 16.5607C4.65804 16.2794 4.5 15.8978 4.5 15.5ZM16.5 38H7.5V36.5C7.5 36.1022 7.34196 35.7206 7.06066 35.4393C6.77936 35.158 6.39782 35 6 35C5.60218 35 5.22064 35.158 4.93934 35.4393C4.65804 35.7206 4.5 36.1022 4.5 36.5V38.1162C4.50099 38.8808 4.80513 39.6137 5.34573 40.1543C5.88632 40.6949 6.61924 40.999 7.38375 41H16.5C16.8978 41 17.2794 40.842 17.5607 40.5607C17.842 40.2794 18 39.8978 18 39.5C18 39.1022 17.842 38.7206 17.5607 38.4393C17.2794 38.158 16.8978 38 16.5 38ZM30 38H24C23.6022 38 23.2206 38.158 22.9393 38.4393C22.658 38.7206 22.5 39.1022 22.5 39.5C22.5 39.8978 22.658 40.2794 22.9393 40.5607C23.2206 40.842 23.6022 41 24 41H30C30.3978 41 30.7794 40.842 31.0607 40.5607C31.342 40.2794 31.5 39.8978 31.5 39.5C31.5 39.1022 31.342 38.7206 31.0607 38.4393C30.7794 38.158 30.3978 38 30 38ZM42 27.5C41.6022 27.5 41.2206 27.658 40.9393 27.9393C40.658 28.2206 40.5 28.6022 40.5 29V38H37.5C37.1022 38 36.7206 38.158 36.4393 38.4393C36.158 38.7206 36 39.1022 36 39.5C36 39.8978 36.158 40.2794 36.4393 40.5607C36.7206 40.842 37.1022 41 37.5 41H40.6669C41.418 40.999 42.138 40.7002 42.6691 40.1691C43.2002 39.638 43.499 38.918 43.5 38.1669V29C43.5 28.6022 43.342 28.2206 43.0607 27.9393C42.7794 27.658 42.3978 27.5 42 27.5ZM40.5 14H31.5C31.1022 14 30.7206 14.158 30.4393 14.4393C30.158 14.7206 30 15.1022 30 15.5C30 15.8978 30.158 16.2794 30.4393 16.5607C30.7206 16.842 31.1022 17 31.5 17H40.5V21.5C40.5 21.8978 40.658 22.2794 40.9393 22.5607C41.2206 22.842 41.6022 23 42 23C42.3978 23 42.7794 22.842 43.0607 22.5607C43.342 22.2794 43.5 21.8978 43.5 21.5V17C43.5 16.2044 43.1839 15.4413 42.6213 14.8787C42.0587 14.3161 41.2957 14 40.5 14ZM6 30.5C6.39782 30.5 6.77936 30.342 7.06066 30.0607C7.34196 29.7794 7.5 29.3978 7.5 29V23C7.5 22.6022 7.34196 22.2206 7.06066 21.9393C6.77936 21.658 6.39782 21.5 6 21.5C5.60218 21.5 5.22064 21.658 4.93934 21.9393C4.65804 22.2206 4.5 22.6022 4.5 23V29C4.5 29.3978 4.65804 29.7794 4.93934 30.0607C5.22064 30.342 5.60218 30.5 6 30.5Z"
        fill="#343330"
      />
    </svg>
  );
}
