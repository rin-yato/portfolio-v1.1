import React from "react";

interface Props {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function Preloader({ loading, setLoading }: Props) {
  const [loadingTime, setLoadingTime] = React.useState<number>(0);
  React.useEffect(() => {
    if (loadingTime < 130) {
      setTimeout(() => {
        setLoadingTime(loadingTime + 1);
      }, 20);
    }
  }, [loadingTime]);
  
  React.useEffect(() => {
    if (loadingTime === 100) {
      setTimeout(() => {
        setLoading(false);
      }, 1300);
    }
  }, [loadingTime]);
  return (
    <div
      className={`fixed inset-0 bg-[#f6f6f6] z-[99999] flex flex-col items-center justify-center ${
        loadingTime > 120 ? "opacity-0" : ""
      } duration-500 ease-in-out`}
    >
      <div className="khmer text-slate-600 text-3xl md:text-5xl lg:text-7xl">ចាំតិច ហើយឡូវហើយ!</div>
      <div className="text-slate-600 text-3xl md:text-5xl lg:text-7xl mt-5 lg:mt-36">%{loadingTime <= 100 ? loadingTime : '100'}</div>
    </div>
  );
}

export default Preloader;
