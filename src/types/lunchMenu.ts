export type SuccessLunchMenuRoot = {
  mealServiceDietInfo: MealServiceDietInfo[];
};

export type FailLunchMenuRoot = {
  RESULT: {
    CODE: string;
    MESSAGE: string;
  };
};

export type MealServiceDietInfo = {
  head: Head[];
  row: Row[];
};

export type Head = {
  list_total_count?: number;
  RESULT?: Result;
};

export type Result = {
  CODE: string;
  MESSAGE: string;
};

export type Row = {
  ATPT_OFCDC_SC_CODE: string;
  ATPT_OFCDC_SC_NM: string;
  SD_SCHUL_CODE: string;
  SCHUL_NM: string;
  MMEAL_SC_CODE: string;
  MMEAL_SC_NM: string;
  MLSV_YMD: string;
  MLSV_FGR: string;
  DDISH_NM: string;
  ORPLC_INFO: string;
  CAL_INFO: string;
  NTR_INFO: string;
  MLSV_FROM_YMD: string;
  MLSV_TO_YMD: string;
};
