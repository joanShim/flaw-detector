"use client";

import Image from "next/image";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import IconArrow from "./icons/IconArrow";
import { forwardRef } from "react";

const cardVariants = cva("relative flex flex-col w-full", {
  variants: {
    variant: {
      default: "justify-between border hover:bg-purple-light",
      article: "justify-between border border-[#c3c3c3]",
      image: "justify-end hover:bg-opacity-70",
      service:
        "justify-center items-center bg-white before:content-[''] before:absolute before:inset-0 before:shadow-[0_5rem_3.75rem_-2.5rem_rgba(0,0,0,0.25)] before:rounded-[2.5rem] before:z-30",
    },
    size: {
      default:
        "h-[14.063rem] max-w-[19.375rem] rounded-[1.25rem] border-primary-100 p-5",
      extended:
        "h-[13.563rem] max-w-[26.375rem] gap-6 rounded-lg border-[#c3c3c3] p-7 [&>*:nth-child(2)]:mt-[-1.25rem]",
      short: "h-[17.188rem] max-w-[25.875rem] gap-6 rounded-lg p-7",
      long: "h-[16.125rem] max-w-[54.063rem] gap-6 rounded-lg p-7",
      main: "h-[24.375rem] max-w-[39.063rem] rounded-[1.25rem] p-9",
      sub: "h-[24.375rem] max-w-[19.75rem] rounded-[1.25rem] p-9",
      service: "h-[28.829rem] max-w-[21.208rem] rounded-[2.5rem]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const cardContentVariants = cva("", {
  variants: {
    variant: {
      default: "h-[3.688rem] w-full rounded-2xl p-5",
      emoji: "flex-center-center mb-[2.344rem] mt-[1.694rem] h-fit w-full",
    },
    bgColor: {
      default: "bg-bggray-light",
      white: "bg-white",
      transparent: "bg-transparent",
    },
  },
  defaultVariants: {
    variant: "default",
    bgColor: "default",
  },
});

export type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants> & {
    children?: React.ReactNode;
  };

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  hasMenu?: boolean;
};

export type CardTitleProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "big" | "small" | "xsmall" | "default";
  weight?: "bold" | "default" | "normal";
  color?: string;
  isSingleLine?: boolean;
};

export type CardContentProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardContentVariants>;

function Card({ variant, size, className, ...props }: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, size }), className)}
      {...props}
    />
  );
}

function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn(
        "flex-col-center-start relative h-fit flex-wrap items-center gap-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function CardTitleWrapper({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col justify-end gap-y-[0.625rem]", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function CardTitle({
  size = "default",
  weight = "default",
  color,
  className,
  children,
  ...props
}: CardTitleProps) {
  const textSize = {
    big: "text-[1.75rem] leading-[2.45rem]", // 28px
    default: "text-2xl leading-9", // 24px
    small: "text-xl leading-[1.513rem]", // 20px
    xsmall: "text-lg leading-[1.361rem]", // 18px
  };
  const textWeight = {
    bold: "font-semibold", // 600
    default: "font-medium", // 500
    normal: "font-normal", // 400
  };
  const textColor = color ? { color } : { color: "#3F3F3F" };

  return (
    <p
      className={cn(
        "line-clamp-2 text-ellipsis tracking-[-0.01em]",
        textSize[size],
        textWeight[weight],
        className,
      )}
      style={textColor}
      {...props}
    >
      {children}
    </p>
  );
}

function CardSubTitle({
  size = "default",
  color,
  isSingleLine = false,
  className,
  children,
  ...props
}: CardTitleProps) {
  const textSize = {
    big: "text-xl",
    small: "text-xs",
    xsmall: "text-xs",
    default: "text-base",
  };
  const textColor = color ? { color } : { color: "text-gray-default" };
  return (
    <span
      className={cn(
        "flex items-center tracking-[-0.01em] text-gray-default",
        textSize[size],
        isSingleLine && "basis-full",
        className,
      )}
      style={textColor}
      {...props}
    >
      {children}
    </span>
  );
}

function CardContent({
  variant,
  bgColor,
  className,
  children,
  ...props
}: CardContentProps) {
  return (
    <div
      className={cn(cardContentVariants({ variant, bgColor }), className)}
      {...props}
    >
      {variant === "default" ? (
        <p className="text-base leading-[1.21rem]">{children}</p>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}

function CardCoverImage({
  src,
  alt,
  className,
  ...props
}: React.ComponentProps<typeof Image>) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{ objectFit: "cover", objectPosition: "center" }}
      className={cn("-z-10 rounded-[1.25rem]", className)}
      {...props}
    />
  );
}

const CardLinkButton = forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
  return (
    <a
      className={cn(
        "flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-[50%] bg-white opacity-70",
        className,
      )}
      ref={ref}
      {...props}
    >
      <IconArrow
        direction="right"
        className="fill-black stroke-black stroke-[0.1rem]"
      />
    </a>
  );
});
CardLinkButton.displayName = "CardLinkButton";

function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex justify-between", className)} {...props}>
      {children}
    </div>
  );
}

export {
  Card,
  CardCoverImage,
  CardHeader,
  CardTitleWrapper,
  CardTitle,
  CardSubTitle,
  CardContent,
  CardLinkButton,
  CardFooter,
};
