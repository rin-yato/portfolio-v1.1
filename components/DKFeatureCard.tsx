import React from "react";

type Props = {
  children: React.ReactNode;
};

function DKFeatureCard({ children }: Props) {
  return <div className=" py-7 px-10 my-20 bg-slate-200 rounded-lg">{children}</div>;
}

export default DKFeatureCard;
