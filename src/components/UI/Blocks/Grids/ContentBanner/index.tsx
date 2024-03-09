import { FC } from "react";
import { IContentBannerProps } from "./ContentBanner.types";
import OneXTwoGrid from "@/components/UI/Organisms/Grids/OneXTwoGrid";

const ContentBanner: FC<IContentBannerProps> = ({}) => {
  return (
    <section>
      <OneXTwoGrid componentOne={<div></div>} componentTwo={} />
    </section>
  );
};

export default ContentBanner;
