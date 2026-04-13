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
        `
          w-full
          px-[16px] 
          sm:px-[24px] 
          md:px-0
          md:max-w-[95%]
          2xl:max-w-[calc(1620px-200px)]
          3xl:max-w-[calc(1620px-100px)]
          4xl:max-w-[1620px] 
          mx-auto
        `,
        headerMargin &&
          "mt-5 md:mt-[55px] lg:mt-[76px] xl:mt-[96px] 2xl:mt-[122px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
