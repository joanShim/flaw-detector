export default function IconMultiSelect({
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-[#343330]"
      {...props}
    >
      <path
        d="M14.026 8.03497L5.62605 16.285C5.48577 16.423 5.29688 16.5003 5.10011 16.5003C4.90334 16.5003 4.71445 16.423 4.57417 16.285L0.974175 12.7497C0.903938 12.6806 0.847993 12.5984 0.809533 12.5077C0.771074 12.417 0.750853 12.3196 0.750026 12.2211C0.749199 12.1226 0.767782 12.0249 0.804713 11.9336C0.841644 11.8423 0.896201 11.7591 0.965268 11.6889C1.03434 11.6186 1.11656 11.5627 1.20725 11.5242C1.29794 11.4858 1.39531 11.4656 1.49381 11.4647C1.59232 11.4639 1.69002 11.4825 1.78134 11.5194C1.87266 11.5563 1.95581 11.6109 2.02605 11.68L5.10011 14.6987L12.9751 6.96434C13.1171 6.82486 13.3087 6.74748 13.5077 6.74924C13.6062 6.75011 13.7036 6.77038 13.7943 6.8089C13.8851 6.84741 13.9673 6.90342 14.0364 6.97372C14.1054 7.04402 14.16 7.12723 14.1969 7.21861C14.2338 7.30999 14.2523 7.40774 14.2515 7.50628C14.2506 7.60483 14.2303 7.70224 14.1918 7.79295C14.1533 7.88366 14.0973 7.9659 14.027 8.03497H14.026ZM23.0354 6.97372C22.9664 6.90337 22.8842 6.84731 22.7934 6.80876C22.7027 6.77021 22.6053 6.74992 22.5067 6.74905C22.4082 6.74818 22.3104 6.76675 22.219 6.80369C22.1276 6.84063 22.0444 6.89522 21.9742 6.96434L14.0992 14.6987L12.3339 12.9643C12.1919 12.825 12.0004 12.7477 11.8014 12.7496C11.6025 12.7514 11.4124 12.8322 11.2731 12.9742C11.1337 13.1162 11.0565 13.3077 11.0583 13.5066C11.0602 13.7056 11.141 13.8956 11.2829 14.035L13.5732 16.285C13.7135 16.423 13.9024 16.5003 14.0992 16.5003C14.2959 16.5003 14.4848 16.423 14.6251 16.285L23.0251 8.03497C23.0955 7.96599 23.1516 7.88381 23.1903 7.79313C23.2289 7.70245 23.2493 7.60504 23.2502 7.50648C23.2512 7.40792 23.2327 7.31013 23.1959 7.21872C23.159 7.1273 23.1045 7.04405 23.0354 6.97372Z"
        fill="black"
      />
    </svg>
  );
}
