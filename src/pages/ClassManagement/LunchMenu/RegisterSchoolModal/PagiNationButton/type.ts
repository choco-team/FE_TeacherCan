import { Pagination } from '@Types/classManagement/school';

export type PagiNationButtonProps = {
  hasPage: boolean;
  pagination: Pagination | null;
  pagiNationSearchSchool: (pageNumber: number) => void;
};

export type LayoutProps = {
  hasPage: boolean;
};
