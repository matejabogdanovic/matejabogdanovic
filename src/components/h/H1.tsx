const H1 = ({
  children,
  cssAddStyle = "",
}: {
  children: any;
  cssAddStyle?: string;
}) => {
  return (
    <h1 className={"xl:text-8xl text-5xl font-bold my-4 " + cssAddStyle}>
      {children}
    </h1>
  );
};

export default H1;
