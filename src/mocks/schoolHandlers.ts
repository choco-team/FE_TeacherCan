import { rest } from 'msw';

const lunchMenuResponse = {
  statusCode: 200,
  data: {
    lunchMenu: [
      { menu: '차조리밥', allergy: [] },
      { menu: '쇠고기묵국', allergy: [5, 6, 16] },
      { menu: '완자어묵조림', allergy: [1, 5, 6, 12, 13] },
      { menu: '오이배생체', allergy: [13] },
      { menu: '쇠불고기', allergy: [5, 6, 13, 16] },
      { menu: '오징어파전', allergy: [1, 5, 6, 13, 17] },
    ],
    origins: [
      { ingredient: '배추', origin: '국내산' },
      { ingredient: '명태', origin: '러시아산' },
    ],
  },
};

export const schoolHandlers = [
  rest.get('/user/lunch-menu/:areaCode/:schoolCode/:date', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(lunchMenuResponse), ctx.delay(500));
  }),
];
