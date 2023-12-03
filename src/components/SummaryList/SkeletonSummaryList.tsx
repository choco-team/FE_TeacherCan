import { SummaryList as TypeSummaryList } from './type';

import SummaryList from '.';

function SkeletonSummaryList({ title }: Pick<TypeSummaryList, 'title'>) {
  return <SummaryList title={title} isLoading={true} />;
}

export default SkeletonSummaryList;
