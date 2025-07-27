import _ from "lodash";

export default function pick(
  object: Record<string, any>,
  ...paths: (string | string[])[]
): Record<string, any> {
  // paths를 평탄화하여 모든 키를 하나의 배열로 만들기
  const flatPaths = Array.isArray(paths) ? paths.flat() : paths;
  const result: Record<string, any> = {};

  for (const path of flatPaths) {
    if (path in object) {
      result[path] = object[path];
    }
  }

  return result;
}

/**
 * NOTE: 실용적인 활용 사례

  [ 1. API 응답에서 민감한 정보 제거 ]
  const userFromDB = {
    id: 123,
    username: 'john_doe',
    email: 'john@example.com',
    password: 'hashed_password',
    salt: 'random_salt',
    created_at: '2023-01-01'
  };

  // 클라이언트에 보낼 때 민감한 정보 제외
  const safeUser = _.pick(userFromDB, ['id', 'username', 'email', 'created_at']);

  [ 2. 폼 데이터 검증 시 필요한 필드만 추출 ]
  const formData = {
    name: 'Product A',
    price: 1000,
    description: 'Great product',
    _token: 'csrf_token',
    _method: 'POST'
  };

  // 실제 저장할 데이터만 선택
  const productData = _.pick(formData, ['name', 'price', 'description']);
  유사한 함수들과의 비교

  _.omit(): pick과 반대로 지정한 속성들을 제외한 객체를 반환
  _.pickBy(): 조건 함수를 사용해서 속성을 선택

  const obj = { a: 1, b: 2, c: 3, d: 4 };

  _.pick(obj, ['a', 'c']);    // { a: 1, c: 3 }
  _.omit(obj, ['a', 'c']);    // { b: 2, d: 4 }
  _.pickBy(obj, val => val > 2);  // { c: 3, d: 4 }
  _.pick()은 데이터를 안전하게 필터링하고 필요한 속성만 추출할 때 매우 유용한 함수입니다.
 */
