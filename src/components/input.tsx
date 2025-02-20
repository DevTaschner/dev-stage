import { ComponentProps } from "react";

export const InputContent = ({
  className,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={[
        "group-data-[error=true]:!ring-danger group-data-[error=true]:!text-danger flex h-12 w-full items-center gap-2 rounded-xl bg-gray-800 px-4 text-gray-400 ring-1 ring-gray-600 transition-all duration-200 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 focus-within:ring-gray-100",
        className,
      ].join(" ")}
      {...props}
    />
  );
};

interface InputRootProps extends ComponentProps<"div"> {
  error?: boolean;
}
export const InputRoot = ({
  className,
  error = false,
  ...props
}: InputRootProps) => {
  return (
    <div
      data-error={error}
      className={["group space-y-1", className].join(" ")}
      {...props}
    />
  );
};

export const InputBox = ({ className, ...props }: ComponentProps<"input">) => {
  return (
    <input
      className={[
        "flex-1 text-gray-100 outline-0 placeholder:text-gray-400",
        className,
      ].join(" ")}
      {...props}
    />
  );
};

export const InputMessage = ({
  className,
  ...props
}: ComponentProps<"span">) => {
  return (
    <span
      className={[
        "group-data-[error=true]:text-danger text-xs font-bold",
        className,
      ].join(" ")}
      {...props}
    />
  );
};
