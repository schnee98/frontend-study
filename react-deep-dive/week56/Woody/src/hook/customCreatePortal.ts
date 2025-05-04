import { ReactNode } from "react";

/**
 * 일부 JSX와 렌더링할 DOM 노드를 전달합니다.
 * @param children JSX의 일부(<div /> 또는 <SomeComponent />), <Fragment>(<>...</>), 문자열이나 숫자 또는 이들의 배열과 같이 React로 렌더링할 수 있는 모든 것입니다.
 * @param domNode document.getElementById()가 반환하는 것과 같은 일부 DOM 노드. 노드가 이미 존재해야 합니다. 업데이트 중에 다른 DOM 노드를 전달하면 Portal 콘텐츠가 다시 생성됩니다.
 * @returns  JSX를 포함하거나 React 컴포넌트를 반환할 수 있는 React 노드를 반환합니다.
 */
export const customCreatePortal = (children: ReactNode, domNode: HTMLElement) => {

  // console.log(domNode);

  // domNode.appendChild(children as unknown as HTMLElement);

  // return ;
};

/** NOTE: 
 * 주의 사항 
Portal의 이벤트는 DOM 트리가 아닌 React 트리를 따라 전파됩니다. 
예를 들어, Portal 내부를 클릭했을 때 포털이 <div onClick>으로 감싸져 있으면 해당 onClick 핸들러가 실행됩니다. 
이로 인해 문제가 발생하면 Portal 내부에서 이벤트 전파를 중지하거나 Portal 자체를 React 트리에서 위로 이동하세요.
*/

