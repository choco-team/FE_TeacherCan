import { rest } from 'msw';

const lunchMenuResponse = {
  lunchMenu: [
    {
      date: new Date('2023/08/21'),
      menu: [
        { name: '차조리밥', allergy: [] },
        { name: '쇠고기묵국', allergy: [5, 6, 16] },
        { name: '완자어묵조림', allergy: [1, 5, 6, 12, 13] },
        { name: '오이배생체', allergy: [13] },
        { name: '쇠불고기', allergy: [5, 6, 13, 16] },
        { name: '오징어파전', allergy: [1, 5, 6, 13, 17] },
      ],
      origins: [
        { ingredient: '배추', origin: '국내산' },
        { ingredient: '명태', origin: '러시아산' },
      ],
    },
    {
      date: new Date('2023/08/22'),
      menu: [
        { name: '현미찹쌀밥', allergy: [] },
        { name: '배추된장국', allergy: [5, 6, 13] },
        { name: '오이배생채', allergy: [13] },
        { name: '쇠불고기', allergy: [5, 6, 13, 16] },
        { name: '오징어파전', allergy: [1, 5, 6, 13, 17] },
        { name: '배추김치', allergy: [9, 13] },
      ],
      origins: [
        { ingredient: '쌀', origin: '국내산' },
        { ingredient: '쇠고기', origin: '국내산' },
        { ingredient: '오리고기', origin: '국내산' },
        { ingredient: '돼지고기', origin: '국내산' },
      ],
    },
    {
      date: new Date('2023/08/23'),
      menu: [
        { name: '오므라이스', allergy: [1, 5, 6, 10, 12, 13] },
        { name: '팽이버섯두부국', allergy: [5, 6, 13] },
        { name: '숙주미나리무침', allergy: [5, 6] },
        { name: '국물떡볶이와 만두', allergy: [1, 5, 6, 10, 13] },
        { name: '배추김치', allergy: [9, 13] },
        { name: '멜론', allergy: [1, 5, 6, 13, 17] },
      ],
      origins: [
        { ingredient: '배추', origin: '국내산' },
        { ingredient: '명태', origin: '러시아산' },
      ],
    },
    {
      date: new Date('2023/08/24'),
      menu: [
        { name: '기장밥', allergy: [] },
        { name: '또띠아옥수수치즈구이', allergy: [1, 2, 5, 6, 10, 12, 13] },
        { name: '홍합살미역국', allergy: [5, 6, 9, 13, 18] },
        { name: '돼지갈비감자찜', allergy: [5, 6, 10, 13] },
        { name: '유채나물된장무침', allergy: [5, 6] },
        { name: '배추김치', allergy: [9, 13] },
        { name: '사과', allergy: [] },
      ],
      origins: [
        { ingredient: '배추', origin: '국내산' },
        { ingredient: '명태', origin: '러시아산' },
      ],
    },
    {
      date: new Date('2023/08/25'),
      menu: [
        { name: '검정쌀밥', allergy: [] },
        { name: '쇠고기묵국', allergy: [5, 6, 13, 16] },
        { name: '도토리묵양상추무침', allergy: [5, 6, 13] },
        { name: '연어살구이', allergy: [13] },
        { name: '배추김치', allergy: [1, 5, 6, 13] },
        { name: '귤', allergy: [] },
      ],
      origins: [
        { ingredient: '배추', origin: '국내산' },
        { ingredient: '명태', origin: '러시아산' },
      ],
    },
  ],
};

export const schoolHandlers = [
  rest.get(
    '/school/lunch-menu?areaCode=123&schoolCode=123}&date=123&type=123',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(lunchMenuResponse), ctx.delay(1000));
    },
  ),
];
