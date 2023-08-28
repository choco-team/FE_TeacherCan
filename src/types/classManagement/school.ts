type Pagination = {
  pageNumber: number;
  totalPageNumber: number;
  dataSize: number;
};

export type School = {
  schoolName: string;
  schoolAddress: string;
  schoolCode: string;
  areaCode: string;
};

export type SearchSchoolList =
  | {
      pagination: Pagination;
      schoolList: School[];
    }
  | null
  | 'notFound';
