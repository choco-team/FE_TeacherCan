import { SearchSchoolListResult } from '@Types/classManagement/school';

export type PagiNationButtonProps = {
  hasPage: boolean;
  schoolList: SearchSchoolListResult;
  pagiNationSearchSchool: (pageNumber: number) => void;
};

export type LayoutProps = {
  hasPage: boolean;
};
