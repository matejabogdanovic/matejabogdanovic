const H2 = ({
  children,
  cssAddStyle = "",
}: {
  children: any;
  cssAddStyle?: string;
}) => {
  return (
    <h2 className={"xl:text-7xl text-4xl font-bold my-4 " + cssAddStyle}>
      {children}
    </h2>
  );
};

export default H2;
