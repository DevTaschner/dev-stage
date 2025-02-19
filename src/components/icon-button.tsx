import { ComponentProps } from "react";

export const IconButton = ({
  className,
  ...props
}: ComponentProps<"button">) => {
  return (
    <button
      className={[
        "text-blue hover:bg-blue flex size-8 w-full cursor-pointer items-center justify-between rounded-md bg-gray-500 px-5 transition-colors duration-300 hover:text-gray-900",
        className,
      ].join(" ")}
      {...props}
    />
  );
};
