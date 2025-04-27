import { useId, useMemo } from "react";
import { useCustomId, setIdentifierPrefix } from "./hook/useCustomId";

// 예시를 위해 앱 시작 시 ID 접두사 설정
setIdentifierPrefix('my-second-app-');
// const root2 = createRoot(document.getElementById('root2'), {
//   identifierPrefix: 'my-second-app-'
// });

function App() {
    // React의 내장 useId
    const reactId = useId();
    // 직접 구현한 useCustomId
    const customId = useCustomId();
    // const customId2 = useCustomId();

    const initData = useMemo(() => [
      {
        id: `${customId.prefix}-ready`,
        title: 'Ready',
      },
      {
        id: `${customId.prefix}-in-progress`,
        title: 'In Progress',
      },
      {
        id: `${customId.prefix}-done`,
        title: 'Done',
      },
    ], [customId]);
    
  return (
    <>
      <h2>useId 테스트</h2>
      <div style={{ marginBottom: '1rem' }}>
        <p>React useId: {reactId}</p>
        <p>useCustomId: {customId}</p>
      </div>
      
      {initData.map(({id, title}) => (
        <div key={id} style={{ marginBottom: '1rem' }}>
          <label htmlFor={`${id}-name`} style={{ marginRight: '1rem' }}>{title}</label>
          <input id={`${id}-name`} type="text" />
        </div>
      ))} 
    </>
  )
}

export default App
