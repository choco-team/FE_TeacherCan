import { rest } from 'msw';

const lunchMenuResponse = {
  lunchMenu: [
    {
      date: new Date('2023/08/14'),
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
      date: new Date('2023/08/14'),
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
      date: new Date('2023/08/14'),
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
      date: new Date('2023/08/14'),
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
      date: new Date('2023/08/14'),
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
