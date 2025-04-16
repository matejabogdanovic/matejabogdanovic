import { useEffect, useRef } from "react";

const ListingScrollGallery = ({
  data,
  mapFunction,
  mapContainerStyle = " ",
  className = " ",
}: {
  data: any[];
  mapFunction: (value: any, index: number, array: any[]) => React.ReactNode;
  mapContainerStyle?: string;
  className?: string;
}) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [data]);
  return (
    <div className={className}>
      <div className={mapContainerStyle} ref={scrollContainer}>
        {data.map(mapFunction)}
      </div>
    </div>
  );
};

export default ListingScrollGallery;
