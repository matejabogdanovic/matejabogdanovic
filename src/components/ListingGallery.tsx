import { useEffect, useRef, useState } from "react";

const Listing = ({
  data,
  maxShowCnt = 3,
  showStep = 1,
  mapFunction,
  iconLess,
  iconMore,
  mapContainerStyle = " ",
  iconContainerStyle = " ",
  className = " ",
}: {
  data: any[];
  maxShowCnt?: number;
  showStep?: number;
  mapFunction: (value: any, index: number, array: any[]) => React.ReactNode;
  iconLess: any;
  iconMore: any;
  mapContainerStyle?: string;
  iconContainerStyle?: string;
  className?: string;
}) => {
  const [showingData, setShowingData] = useState<any[]>([]);
  const disabledLess = useRef<boolean>(true);
  const disabledMore = useRef<boolean>(true);

  const start = useRef<number>(0);
  const end = useRef<number>(0);

  const changeDisabled = () => {
    disabledLess.current = start.current === 0;
    disabledMore.current = end.current === data.length;
  };
  const changeShowingData = () => {
    setShowingData(data.slice(start.current, end.current));
  };

  useEffect(() => {
    //if (data.length === 0) return;
    start.current = 0;
    end.current = Math.min(maxShowCnt, data.length);
    disabledLess.current = true;
    disabledMore.current = data.length <= maxShowCnt;

    changeShowingData();
  }, [data]);

  const onMore = () => {
    end.current = Math.min(end.current + showStep, data.length); // max to data.len
    // if the end is reached, make sure it's showing maxShowCnt cards, not just new data
    if (end.current === data.length) start.current = end.current - maxShowCnt;
    else start.current = start.current + showStep;
    changeDisabled();
    changeShowingData();
  };

  const onLess = () => {
    end.current = Math.max(end.current - showStep, maxShowCnt); // min to maxShowCnt
    start.current = Math.max(start.current - showStep, 0); // min to 0
    changeDisabled();
    changeShowingData();
  };

  return (
    <div className={className}>
      <div className={mapContainerStyle}>{showingData.map(mapFunction)}</div>
      <div className={iconContainerStyle}>
        <button
          onClick={onLess}
          disabled={disabledLess.current}
          className={
            " active:scale-105 transition-all " +
            (disabledLess.current ? " opacity-50 " : "")
          }
        >
          {iconLess}
        </button>

        <button
          onClick={onMore}
          disabled={disabledMore.current}
          className={
            " active:scale-105 transition-all " +
            (disabledMore.current ? " opacity-50 " : "")
          }
        >
          {iconMore}
        </button>
      </div>
    </div>
  );
};

export default Listing;
