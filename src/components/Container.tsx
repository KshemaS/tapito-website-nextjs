import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  headerMargin?: boolean;
};

const Container: React.FC<ContainerProps> = ({
  children,
  headerMargin,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "w-full mx-auto px-6 sm:px-10 lg:px-16",
        "max-w-[100%] md:max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1720px] 4xl:max-w-[1840px]",
        headerMargin && "mt-10 md:mt-20 lg:mt-24 xl:mt-32",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
