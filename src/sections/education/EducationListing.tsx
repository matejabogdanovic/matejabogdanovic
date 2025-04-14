const EducationListing = ({
  from,
  to,
  school,
  field,
}: {
  from: any;
  to: any;
  school: any;
  field: any;
}) => {
  return (
    <div className="flex items-stretch gap-2 min-h-[3lh]">
      <div className=" flex flex-col justify-between items-center text-dark">
        <div>{to}</div>
        <div className="w-1 h-full bg-dark rounded-full"></div>
        <div>{from}</div>
      </div>
      <div className="flex flex-col justify-start">
        <div className="text-dark">{school}</div>
        <hr className="border-dark" />
        <div>{field}</div>
      </div>
    </div>
  );
};

export default EducationListing;
