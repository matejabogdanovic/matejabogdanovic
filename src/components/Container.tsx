const Container = ({
  children,

  containerCssAdd = "",
}: {
  children: React.ReactNode;

  containerCssAdd?: string;
}) => {
  return (
    <div
      className={`container max-w-[1400px] my-0 mx-auto px-2 ${containerCssAdd}`}
    >
      {children}
    </div>
  );
};

export default Container;
