type ReactSymbolMap = {
  [key: string]: symbol | number;
};

// 이 심볼들은 ReactElement 계열 타입들을 식별(tag)하는 데 사용됩니다.
// 만약 현재 환경에 native Symbol이나 폴리필이 없다면,
// 성능상의 이유로 일반 숫자 값(plain number)이 대신 사용됩니다.
// Symbol은 ES6부터 도입된 기능입니다.
// 만약 브라우저가 Symbol을 지원하지 않거나, 폴리필도 없는 경우를 대비해 숫자 값으로 대체할 수 있게 준비해둡니다.
// https://github.dev/facebook/react/tree/main/fixtures/legacy-jsx-runtimes/react-14/cjs/react-jsx-dev-runtime.development.js

export const REACT_SYMBOLS: ReactSymbolMap = {
  REACT_ELEMENT_TYPE: 0xeac7,
  REACT_PORTAL_TYPE: 0xeaca,
  Fragment: 0xeacb,
  REACT_STRICT_MODE_TYPE: 0xeacc,
  REACT_PROFILER_TYPE: 0xead2,
  REACT_PROVIDER_TYPE: 0xeacd,
  REACT_CONTEXT_TYPE: 0xeace,
  REACT_FORWARD_REF_TYPE: 0xead0,
  REACT_SUSPENSE_TYPE: 0xead1,
  REACT_SUSPENSE_LIST_TYPE: 0xead8,
  REACT_MEMO_TYPE: 0xead3,
  REACT_LAZY_TYPE: 0xead4,
  REACT_BLOCK_TYPE: 0xead9,
  REACT_SERVER_BLOCK_TYPE: 0xeada,
  REACT_FUNDAMENTAL_TYPE: 0xead5,
  REACT_SCOPE_TYPE: 0xead7,
  REACT_OPAQUE_ID_TYPE: 0xeae0,
  REACT_DEBUG_TRACING_MODE_TYPE: 0xeae1,
  REACT_OFFSCREEN_TYPE: 0xeae2,
  REACT_LEGACY_HIDDEN_TYPE: 0xeae3,
};

if (typeof Symbol === 'function' && Symbol.for) {
  const symbolFor = Symbol.for;
  REACT_SYMBOLS.REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_SYMBOLS.REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_SYMBOLS.Fragment = symbolFor('react.fragment');
  REACT_SYMBOLS.REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_SYMBOLS.REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_SYMBOLS.REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_SYMBOLS.REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_SYMBOLS.REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SYMBOLS.REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SYMBOLS.REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_SYMBOLS.REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_SYMBOLS.REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_SYMBOLS.REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SYMBOLS.REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_SYMBOLS.REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SYMBOLS.REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_SYMBOLS.REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_SYMBOLS.REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_SYMBOLS.REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_SYMBOLS.REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}