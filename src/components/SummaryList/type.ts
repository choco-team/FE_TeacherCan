type SummaryList = {
  title: string;
  list?: string[];
  guideMessage?: string;
  width?: string;
};

type LayoutProps = {
  width: string;
};

type SummaryTextProps = {
  isLoading?: boolean;
};

export type { SummaryList, LayoutProps, SummaryTextProps };
