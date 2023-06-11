/**
 * 키-값을 가지는 객체의 배열(readonly)을 첫번째 제네릭으로 받습니다.
 * 추출하고 싶은 키를 두번째 제네릭으로 받습니다.
 * 해당 키에 대한 값만 요소로 가지는 readonly 배열을 만듭니다.
 */
export type ArrTransform<Arr extends readonly object[], Key extends string> = {
  [Idx in keyof Arr]: Arr[Idx] extends { [K in Key]: infer Value }
    ? Value
    : never;
};
