import { SearchSchoolList } from '@Types/classManagement/school';

export type PagiNationButtonProps = {
  hasPage: boolean;
  schoolList: SearchSchoolList;
  searchSchool: (page: number) => void;
};

export type LayoutProps = {
  hasPage: boolean;
};
