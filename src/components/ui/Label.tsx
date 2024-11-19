import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const labelVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full tracking-[-0.01em] text-base",
  {
    variants: {
      variant: {
        // 취약점 DB
        hot: "px-3 py-2 h-[2.375rem] bg-accent-red text-white font-semibold leading-[1.4rem]",
        new: "px-3 py-2 h-[2.375rem] bg-accent-blue text-white font-semibold leading-[1.4rem]",
        unselected:
          "px-3 py-2 h-[2.375rem] bg-[#E8E8E8] text-[#ADADAD] font-semibold leading-[1.4rem]",

        // 취약점 DB - grid label
        column:
          "px-[0.5rem] py-[0.75rem] h-[2.625rem] bg-white font-normal border border-gray-dark leading-[1.627rem] rounded-full",

        // MY 저장소 - 메인 (로그인 o) & UI 스크랩
        clipping:
          "px-3 py-2 h-[2.375rem] bg-[#E8F8FF] text-accent-blue font-medium leading-[1.4rem]",
        "clipping-etc":
          "px-3 py-2 h-[2.375rem] bg-bggray-light text-gray-default font-medium leading-[1.4rem]", // 기타
        "clipping-notify":
          "px-3 py-2 h-[2.375rem] bg-primary-50 text-primary-500 font-medium leading-[1.4rem]",

        "clipping-warning":
          "px-3 py-2 h-[2.375rem] bg-red-light text-accent-red font-medium leading-[1.4rem]",
        outline:
          "px-[0.75rem] py-[0.438rem] h-[1.875rem] bg-white font-normal border border-gray-dark leading-4",

        // MY 저장소 - UI 검출된 파일
        "outline-primary":
          "px-[0.75rem] py-[0.438rem] h-[1.875rem] bg-purple-light text-primary-500 font-normal border border-primary-300 leading-4",

        // MY 저장소 - InfoBox 위치 찾기
        location:
          "px-[0.5rem] py-[0.313rem] max-h-[1.813rem] border-2 border-primary-500 font-semibold tracking-[-0.011em] text-primary-500",

        // Landing
        service:
          "py-2 px-3 h-[2.875rem] font-medium border text-xl leading-[1.875rem] tracking-[-0.011em]",
      },
    },
    defaultVariants: {
      variant: "hot",
    },
  },
);

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps<typeof labelVariants> & {};

export type ServiceLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps<typeof labelVariants> & {
    color: "pink" | "green" | "purple" | "blue" | "yellow" | "red";
  };

const Label: React.FC<LabelProps> = ({
  className,
  variant,
  children,
  ...props
}) => {
  return (
    <span className={cn(labelVariants({ variant, className }))} {...props}>
      {children}
    </span>
  );
};

Label.displayName = "Label";

const ServiceLabel: React.FC<ServiceLabelProps> = ({
  className,
  variant = "service",
  color,
  children,
  ...props
}) => {
  let labelColor = "";

  if (color === "pink") {
    labelColor = "text-[#bd466a] bg-[#FFF2F7] border-[#FF81A7]";
  } else if (color === "green") {
    labelColor = "text-[#005d4c] bg-[#DDFFF3] border-[#00987C]";
  } else if (color === "purple") {
    labelColor = "text-[#4c0b8d] bg-[#F5E4FF] border-[#A54CFF]";
  } else if (color === "blue") {
    labelColor = "text-[#12428d] bg-[#E4F2FF] border-[#4C93FF]";
  } else if (color === "yellow") {
    labelColor = "text-[#856C50] bg-[#FFFBE4] border-[#FF8A00]";
  } else if (color === "red") {
    labelColor = "text-[#ac2b02] bg-[#FFEAE4] border-[#FF3D00]";
  }

  return (
    <span
      className={cn(labelVariants({ variant, className }), labelColor)}
      {...props}
    >
      {children}
    </span>
  );
};

ServiceLabel.displayName = "ServiceLabel";

export { Label, ServiceLabel };
