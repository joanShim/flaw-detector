"use client";

import { IconBug } from "@/components/ui/Icons";
import { motion, SVGMotionProps, useAnimation } from "framer-motion";
import { memo, useEffect, useRef } from "react";

export const SquareBackground = memo(function SquareBackground({
  className,
  ...props
}: SVGMotionProps<SVGSVGElement>) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: -360,
      transition: {
        repeat: Infinity,
        duration: 10,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <motion.svg
      initial={{ rotate: 0 }}
      animate={controls}
      className={className}
      width="1022"
      height="1022"
      viewBox="0 0 1022 1022"
      fill="#6100FF"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_66_35)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M85.0718 237.981C81.9515 234.853 81.9515 229.782 85.0718 226.654L215.601 95.8071C218.721 92.6791 223.78 92.6791 226.9 95.8071L357.429 226.654C360.55 229.782 360.55 234.853 357.429 237.981L226.9 368.828C223.78 371.956 218.721 371.956 215.601 368.828L85.0718 237.981ZM86.4822 226.654C83.3618 229.782 83.3618 234.853 86.4822 237.981L215.601 367.414C218.721 370.542 223.78 370.542 226.901 367.414L356.019 237.981C359.139 234.853 359.139 229.782 356.019 226.654L226.9 97.2208C223.78 94.0928 218.721 94.0928 215.601 97.2208L86.4822 226.654Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M226.478 949.406C223.358 952.534 218.299 952.534 215.178 949.406L84.6494 818.56C81.5291 815.432 81.5291 810.36 84.6494 807.232L215.178 676.385C218.299 673.257 223.358 673.257 226.478 676.385L357.007 807.232C360.127 810.36 360.127 815.432 357.007 818.56L226.478 949.406ZM215.178 947.992C218.299 951.12 223.358 951.12 226.478 947.992L355.596 818.56C358.717 815.432 358.717 810.36 355.596 807.232L226.478 677.799C223.358 674.671 218.299 674.671 215.178 677.799L86.0598 807.232C82.9394 810.36 82.9394 815.432 86.0598 818.56L215.178 947.992Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M611.578 1014C611.578 1018.42 607.996 1022 603.578 1022H419.001C414.583 1022 411.001 1018.42 411.001 1014L411.002 829.196C411.002 824.778 414.583 821.196 419.002 821.196H603.578C607.996 821.196 611.578 824.778 611.578 829.196V1014ZM602.58 1021C606.999 1021 610.58 1017.42 610.58 1013V830.196C610.58 825.777 606.999 822.196 602.58 822.196L419.999 822.195C415.581 822.195 411.999 825.777 411.999 830.195V1013C411.999 1017.42 415.581 1021 419.999 1021H602.58Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M937.436 784.019C940.556 787.147 940.556 792.218 937.436 795.346L806.907 926.193C803.787 929.321 798.728 929.321 795.607 926.193L665.079 795.346C661.958 792.218 661.958 787.147 665.079 784.019L795.607 653.172C798.728 650.044 803.787 650.044 806.907 653.172L937.436 784.019ZM936.026 795.346C939.146 792.218 939.146 787.147 936.026 784.019L806.907 654.586C803.787 651.458 798.728 651.458 795.607 654.586L666.489 784.019C663.369 787.147 663.369 792.218 666.489 795.346L795.607 924.779C798.728 927.907 803.787 927.907 806.907 924.779L936.026 795.346Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M411.004 8C411.004 3.58172 414.586 -3.86258e-07 419.004 0L603.581 1.61362e-05C607.999 1.65224e-05 611.581 3.58174 611.581 8.00001V192.804C611.581 197.222 607.999 200.804 603.581 200.804H419.004C414.586 200.804 411.004 197.222 411.004 192.804V8ZM420.002 0.999022C415.584 0.999022 412.002 4.58073 412.002 8.99901V191.804C412.002 196.223 415.583 199.804 420.002 199.804L602.583 199.805C607.001 199.805 610.583 196.223 610.583 191.805V8.99904C610.583 4.58076 607.001 0.999039 602.583 0.999038L420.002 0.999022Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1014 416.93C1018.42 416.93 1022 420.512 1022 424.93V609.507C1022 613.925 1018.42 617.507 1014 617.507H829.196C824.778 617.507 821.196 613.925 821.196 609.507V424.93C821.196 420.512 824.778 416.93 829.196 416.93H1014ZM1021 425.928C1021 421.51 1017.42 417.928 1013 417.928H830.196C825.777 417.928 822.196 421.51 822.196 425.928V608.509C822.196 612.927 825.777 616.509 830.195 616.509H1013C1017.42 616.509 1021 612.927 1021 608.509V425.928Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M784.02 91.0723C787.148 87.9519 792.219 87.9519 795.347 91.0723L926.194 221.601C929.322 224.721 929.322 229.781 926.194 232.901L795.347 363.43C792.219 366.55 787.148 366.55 784.02 363.43L653.173 232.901C650.045 229.781 650.045 224.721 653.173 221.601L784.02 91.0723ZM795.347 92.4826C792.219 89.3623 787.148 89.3623 784.02 92.4827L654.587 221.601C651.459 224.721 651.459 229.781 654.587 232.901L784.02 362.019C787.148 365.14 792.219 365.14 795.347 362.019L924.78 232.901C927.908 229.781 927.908 224.721 924.78 221.601L795.347 92.4826Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 617.504C3.58172 617.504 -1.93129e-07 613.923 0 609.504L8.0681e-06 424.928C8.26123e-06 420.509 3.58173 416.928 8.00001 416.928H192.804C197.222 416.928 200.804 420.509 200.804 424.928V609.504C200.804 613.923 197.222 617.504 192.804 617.504H8ZM0.999023 608.507C0.999023 612.925 4.58073 616.507 8.99901 616.507H191.804C196.223 616.507 199.804 612.925 199.804 608.507V425.926C199.804 421.507 196.223 417.926 191.805 417.926H8.99903C4.58075 417.926 0.999031 421.507 0.999031 425.926L0.999023 608.507Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_66_35">
          <rect width="1022" height="1022" fill="white" />
        </clipPath>
      </defs>
    </motion.svg>
  );
});

export default function LandingFeatureSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let timeouts: number[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            const timeoutId = window.setTimeout(() => {
              target.classList.add("animate-fade-up");
            }, index * 300);
            timeouts.push(timeoutId);
          } else {
            target.classList.remove("animate-fade-up");
          }
        });
      },
      { threshold: 0.9 },
    );

    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll(".fade-up-element");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll(".fade-up-element");
        elements.forEach((el) => observer.unobserve(el));
      }
      timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []);

  return (
    <section
      className="flex-end-center snap-box relative max-h-screen min-h-[calc(100dvh-8.5rem)] w-full overflow-hidden bg-primary-50 bg-cover bg-center text-primary-500"
      ref={sectionRef}
    >
      <div className="mx-auto flex w-full max-w-screen-xl items-center p-12 lg:justify-between xl:p-4">
        <article className="lg:max-w-dvw h-auto w-auto leading-tight lg:max-w-[55%]">
          <h2 className="flex-col-start-center w-full space-y-3 whitespace-nowrap text-clamp-4xl font-bold tracking-[-0.01em]">
            <span className="fade-up-element opacity-0">쉽고 편하게</span>
            <span className="fade-up-element opacity-0">취약점을 발견하다</span>
          </h2>
          <p className="mt-[3.75rem] flex flex-col space-y-3 text-clamp-md font-bold tracking-[-0.01em] text-gray-dark">
            <span>코드보안</span>
            <span>어떻게 관리하시나요?</span>
          </p>
          <p className="flex-col-start-center mb-2 mt-7 space-y-2 text-clamp-sm tracking-[-0.01em] text-gray-default">
            <span>플로디텍터는 안전한 소프트웨어 개발을 위한 필수 도구로,</span>
            <span>코드의 보안 취약점을 사전에 수정함으로써</span>
            <span>개발자들에게 편의와 안전한 개발 환경을 제공합니다.</span>
          </p>
        </article>
        <article className="hidden lg:block">
          <div className="relative z-10 overflow-hidden rounded-lg bg-white p-[3vw] shadow-[0_2.6vw_2.6vw_-1vw_rgba(97,0,255,0.25)] md:flex">
            <IconBug width="7.5vw" height="7.65vw" />
          </div>
          <SquareBackground className="absolute -right-[22%] bottom-[18%] h-[50vw] w-[50vw] overflow-hidden xl:-bottom-[12%]" />
        </article>
      </div>
    </section>
  );
}
