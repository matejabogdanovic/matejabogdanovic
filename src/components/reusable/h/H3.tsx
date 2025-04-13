const H3 = ({
  children,
  cssAddStyle = "",
}: {
  children: any;
  cssAddStyle?: string;
}) => {
  return (
    <h3 className={"xl:text-4xl text-3xl font-bold my-4 " + cssAddStyle}>
      {children}
    </h3>
  );
};

export default H3;
