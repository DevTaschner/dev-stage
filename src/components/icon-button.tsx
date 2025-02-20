import { ComponentProps } from "react";

export const IconButton = ({
  className,
  ...props
}: ComponentProps<"button">) => {
  return (
    <button
      className={[
        "text-blue hover:bg-blue flex size-8 cursor-pointer items-center justify-center rounded-md bg-gray-500 px-1.5 transition-colors duration-300 hover:text-gray-900",
        className,
      ].join(" ")}
      {...props}
    />
  );
};
