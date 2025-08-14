import { SVGProps } from "react";
import tailwindConfig from "tailwind.config";

export const AlertIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={props.width ?? 60}
      height={props.height ?? 60}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_977_8657)">
        <path
          d="M19.9991 2.5C21.1084 2.5 22.1319 3.08594 22.6944 4.04688L39.5694 32.7969C40.1397 33.7656 40.1397 34.9609 39.585 35.9297C39.0303 36.8984 37.9913 37.5 36.8741 37.5H3.12407C2.00688 37.5 0.96782 36.8984 0.413132 35.9297C-0.141555 34.9609 -0.133743 33.7578 0.428757 32.7969L17.3038 4.04688C17.8663 3.08594 18.8897 2.5 19.9991 2.5ZM19.9991 12.5C18.96 12.5 18.1241 13.3359 18.1241 14.375V23.125C18.1241 24.1641 18.96 25 19.9991 25C21.0381 25 21.8741 24.1641 21.8741 23.125V14.375C21.8741 13.3359 21.0381 12.5 19.9991 12.5ZM22.4991 30C22.4991 29.337 22.2357 28.7011 21.7668 28.2322C21.298 27.7634 20.6621 27.5 19.9991 27.5C19.336 27.5 18.7001 27.7634 18.2313 28.2322C17.7625 28.7011 17.4991 29.337 17.4991 30C17.4991 30.663 17.7625 31.2989 18.2313 31.7678C18.7001 32.2366 19.336 32.5 19.9991 32.5C20.6621 32.5 21.298 32.2366 21.7668 31.7678C22.2357 31.2989 22.4991 30.663 22.4991 30Z"
          fill={props.color ?? tailwindConfig.theme.extend.colors.othersRed}
        />
      </g>
      <defs>
        <clipPath id="clip0_977_8657">
          <rect
            width="40"
            height="40"
            fill={props.color ?? tailwindConfig.theme.extend.colors.othersRed}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
