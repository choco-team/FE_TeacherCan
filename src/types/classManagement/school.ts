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

export type SchoolList = {
  pagination: Pagination;
  schoolList: School[];
};

export type SearchSchoolListResult = SchoolList | null | 'notFound';
