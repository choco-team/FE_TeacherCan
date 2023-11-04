import { rest } from 'msw';

const schoolListResponse = {
  code: 2000,
  data: {
    pagination: { pageNumber: 1, dateSize: 6, totalPageNumber: 1 },
    schoolList: [
      {
        schoolName: '티처캔초등학교',
        schoolAddress: '서울특별시 관악구 남부순환로172길 97',
        schoolCode: '159732',
        areaCode: 'B10',
      },
      {
        schoolName: '초코초등학교',
        schoolAddress: '서울특별시 서초구 신반포로15길 6',
        schoolCode: '159732',
        areaCode: 'B10',
      },
      {
        schoolName: '딸기초등학교',
        schoolAddress: '북서울중학교',
        schoolCode: '159732',
        areaCode: 'B10',
      },
    ],
  },
  message: null,
  result: true,
};

const lunchMenuResponse = {
  code: 2000,
  data: {
    lunchMenu: [
      {
        date: '2023-08-21',
        mealType: '중식',
        menu: [
          { dish: '차조리밥', allergy: [] },
          { dish: '쇠고기묵국', allergy: [5, 6, 16] },
          { dish: '완자어묵조림', allergy: [1, 5, 6, 12, 13] },
          { dish: '오이배생체', allergy: [13] },
          { dish: '쇠불고기', allergy: [5, 6, 13, 16] },
          { dish: '오징어파전', allergy: [1, 5, 6, 13, 17] },
        ],
        origin: [
          { ingredient: '배추', place: '국내산' },
          { ingredient: '명태', place: '러시아산' },
        ],
      },
      {
        date: '2023-08-22',
        mealType: '중식',
        menu: [
          { dish: '현미찹쌀밥', allergy: [] },
          { dish: '배추된장국', allergy: [5, 6, 13] },
          { dish: '오이배생채', allergy: [13] },
          { dish: '쇠불고기', allergy: [5, 6, 13, 16] },
          { dish: '오징어파전', allergy: [1, 5, 6, 13, 17] },
          { dish: '배추김치', allergy: [9, 13] },
        ],
        origin: [
          { ingredient: '쌀', place: '국내산' },
          { ingredient: '쇠고기', place: '국내산' },
          { ingredient: '오리고기', place: '국내산' },
          { ingredient: '돼지고기', place: '국내산' },
        ],
      },
      {
        date: '2023-08-23',
        mealType: '중식',
        menu: [
          { dish: '오므라이스', allergy: [1, 5, 6, 10, 12, 13] },
          { dish: '팽이버섯두부국', allergy: [5, 6, 13] },
          { dish: '숙주미나리무침', allergy: [5, 6] },
          { dish: '국물떡볶이와 만두', allergy: [1, 5, 6, 10, 13] },
          { dish: '배추김치', allergy: [9, 13] },
          { dish: '멜론', allergy: [1, 5, 6, 13, 17] },
        ],
        origin: [
          { ingredient: '배추', place: '국내산' },
          { ingredient: '명태', place: '러시아산' },
        ],
      },
      {
        date: '2023-08-24',
        mealType: '중식',
        menu: [
          { dish: '기장밥', allergy: [] },
          { dish: '또띠아옥수수치즈구이', allergy: [1, 2, 5, 6, 10, 12, 13] },
          { dish: '홍합살미역국', allergy: [5, 6, 9, 13, 18] },
          { dish: '돼지갈비감자찜', allergy: [5, 6, 10, 13] },
          { dish: '유채나물된장무침', allergy: [5, 6] },
          { dish: '배추김치', allergy: [9, 13] },
        ],
        origin: [
          { ingredient: '배추', place: '국내산' },
          { ingredient: '명태', place: '러시아산' },
        ],
      },
      {
        date: '2023-08-25',
        mealType: '중식',
        menu: [
          { dish: '검정쌀밥', allergy: [] },
          { dish: '쇠고기묵국', allergy: [5, 6, 13, 16] },
          { dish: '도토리묵양상추무침', allergy: [5, 6, 13] },
          { dish: '연어살구이', allergy: [13] },
          { dish: '배추김치', allergy: [1, 5, 6, 13] },
          { dish: '귤', allergy: [] },
        ],
        origin: [
          { ingredient: '배추', place: '국내산' },
          { ingredient: '명태', place: '러시아산' },
        ],
      },
    ],
  },
  message: null,
  result: true,
};

export const schoolHandlers = [
  // 학교 검색
  rest.get('/api/school/list', (req, res, ctx) => {
    console.log(req);
    return res(ctx.status(200), ctx.json(schoolListResponse), ctx.delay(100));
  }),

  // 점심 메뉴 검색
  rest.get('/api/school/lunch-menu', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(lunchMenuResponse), ctx.delay(1000));
  }),
];
