import { cn } from "@/lib/utils";

export default function IconPin({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <path
        d="M25.4155 8.17095L17.8292 0.585948C17.6435 0.400182 17.423 0.252823 17.1803 0.152285C16.9376 0.0517467 16.6775 0 16.4148 0C16.1522 0 15.892 0.0517467 15.6494 0.152285C15.4067 0.252823 15.1862 0.400182 15.0005 0.585948L8.29671 7.31095C6.96421 6.89345 3.92171 6.3897 0.746712 8.95345C0.527869 9.12942 0.348536 9.34951 0.220388 9.59938C0.0922392 9.84926 0.0181477 10.1233 0.00293644 10.4037C-0.0122749 10.6841 0.0317348 10.9646 0.132101 11.2269C0.232467 11.4891 0.386939 11.7273 0.585462 11.9259L6.62546 17.9634L1.29296 23.2922C1.10532 23.4798 0.999906 23.7343 0.999906 23.9997C0.999906 24.2651 1.10532 24.5196 1.29296 24.7072C1.4806 24.8948 1.7351 25.0003 2.00046 25.0003C2.26583 25.0003 2.52032 24.8948 2.70796 24.7072L8.03671 19.3747L14.073 25.4109C14.2585 25.5973 14.479 25.7452 14.7218 25.8462C14.9646 25.9473 15.225 25.9994 15.488 25.9997C15.5355 25.9997 15.5817 25.9997 15.6292 25.9997C15.9143 25.9799 16.1918 25.8991 16.4429 25.7625C16.6939 25.626 16.9127 25.437 17.0842 25.2084C19.5392 21.9459 19.303 19.2934 18.733 17.7084L25.4167 10.9997C25.6024 10.8139 25.7497 10.5933 25.8501 10.3506C25.9505 10.1079 26.0022 9.84775 26.002 9.58506C26.0019 9.32238 25.9501 9.06229 25.8494 8.81966C25.7488 8.57702 25.6013 8.35659 25.4155 8.17095ZM24.0005 9.58595L16.8417 16.7684C16.6939 16.9168 16.5964 17.1079 16.5629 17.3147C16.5295 17.5215 16.5619 17.7335 16.6555 17.9209C17.838 20.2872 16.4305 22.7447 15.488 23.9984L2.00046 10.5097C3.51046 9.2922 4.95546 8.97095 6.06046 8.97095C6.76162 8.96138 7.457 9.09892 8.10171 9.3747C8.2898 9.46883 8.50279 9.50126 8.71037 9.46737C8.91796 9.43349 9.10957 9.33501 9.25796 9.18595L16.4155 1.9997L24.0005 9.5847V9.58595Z"
        fill="#6100FF"
      />
      <path
        d="M24.0005 9.58595L16.8417 16.7684C16.6939 16.9168 16.5964 17.1079 16.5629 17.3147C16.5295 17.5215 16.5619 17.7335 16.6555 17.9209C17.838 20.2872 16.4305 22.7447 15.488 23.9984L2.00046 10.5097C3.51046 9.2922 4.95546 8.97095 6.06046 8.97095C6.76162 8.96138 7.457 9.09892 8.10171 9.3747C8.2898 9.46883 8.50279 9.50126 8.71037 9.46737C8.91796 9.43349 9.10957 9.33501 9.25796 9.18595L16.4155 1.9997L24.0005 9.5847V9.58595Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
