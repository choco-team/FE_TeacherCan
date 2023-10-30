import { School } from '@Types/classManagement/school';

export type SearchResultProps = {
  isLoading: boolean;
  schoolList: School[] | null;
};
