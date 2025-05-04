# React의 createPortal 존재 이유와 필요성

`createPortal`은 React에서 컴포넌트 트리의 DOM 계층 구조와 무관하게 컴포넌트를 렌더링할 수 있게 해주는 기능입니다.

## 1. createPortal 없을 때 생기는 문제점

`createPortal` 없이는 React 컴포넌트는 항상 부모 컴포넌트 내부의 DOM에만 렌더링됩니다. 이로 인해 다음과 같은 문제가 발생합니다:

- **CSS 스타일 상속 문제**: 모달, 툴팁, 드롭다운 등이 부모 컴포넌트의 스타일(특히 `overflow: hidden`, `z-index`)에 제약받음
- **이벤트 버블링 제한**: 부모 요소의 DOM 구조에 갇혀 전체 페이지에 영향을 주기 어려움
- **접근성 문제**: 스크린 리더 등 보조 기술이 모달 등의 컴포넌트를 논리적으로 인식하기 어려움

## createPortal이 필요한 상황 예시

### 1. 모달 다이얼로그

가장 대표적인 예시는 모달 다이얼로그입니다.

```jsx
function App() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="app" style={{ overflow: 'hidden', height: '100vh' }}>
      <h1>메인 앱 컨텐츠</h1>
      <button onClick={() => setShowModal(true)}>모달 열기</button>
      
      {/* createPortal 없이 모달 구현 시 */}
      {showModal && (
        <div className="modal">
          <h2>안녕하세요, 모달입니다!</h2>
          <p>이 모달은 부모 컴포넌트의 overflow: hidden에 영향을 받습니다.</p>
          <button onClick={() => setShowModal(false)}>닫기</button>
        </div>
      )}
    </div>
  );
}
```

이 경우, 부모 컴포넌트에 `overflow: hidden`이 적용되면 모달이 잘려 보일 수 있고, `z-index` 관리도 복잡해집니다.

### 2. 툴팁 및 드롭다운 메뉴

스크롤 영역 안에 있는 요소에 툴팁이나 드롭다운 메뉴를 표시할 때 문제가 발생합니다.

```jsx
function ProductList() {
  return (
    <div className="product-list" style={{ overflow: 'auto', height: '300px' }}>
      {products.map(product => (
        <div className="product-item">
          <h3>{product.name}</h3>
          <button>상세 정보
            {/* createPortal 없이 툴팁 구현 시 */}
            <div className="tooltip">
              이 툴팁은 스크롤 영역을 벗어나지 못할 수 있습니다.
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}
```

스크롤 영역 경계에 가까운 아이템의 툴팁은 잘려 보일 수 있습니다.

### 3. 알림 토스트

페이지 전체에 영향을 주는 알림 토스트 메시지도 `createPortal` 없이 구현하기 어렵습니다.

```jsx
function DeepNestedComponent() {
  const [showToast, setShowToast] = useState(false);
  
  return (
    <div className="nested-component">
      <button onClick={() => setShowToast(true)}>알림 표시</button>
      
      {/* createPortal 없이 토스트 구현 시 */}
      {showToast && (
        <div className="toast">
          저장되었습니다!
        </div>
      )}
    </div>
  );
}
```

이 토스트는 깊이 중첩된 컴포넌트 내부에 갇혀 전체 화면에 표시되기 어렵습니다.

## 2. createPortal 없이 대안 구현 방법

`createPortal` 이전에는 다음과 같은 방법으로 비슷한 기능을 구현했습니다:

### 1. 전역 상태 관리와 최상위 컴포넌트 활용

```jsx
// 모달 상태 관리를 위한 전역 상태 (Redux, Context API 등)
const ModalContext = React.createContext();

function ModalProvider({ children }) {
  const [modalContent, setModalContent] = useState(null);
  
  return (
    <ModalContext.Provider value={{ setModalContent }}>
      {children}
      
      {/* 항상 최상위에 모달 컨테이너 배치 */}
      {modalContent && (
        <div className="modal-container">
          {modalContent}
        </div>
      )}
    </ModalContext.Provider>
  );
}

// 사용 예시
function App() {
  return (
    <ModalProvider>
      <MainContent />
    </ModalProvider>
  );
}

function DeepNestedComponent() {
  const { setModalContent } = useContext(ModalContext);
  
  const openModal = () => {
    setModalContent(
      <div className="modal">
        <h2>모달 내용</h2>
        <button onClick={() => setModalContent(null)}>닫기</button>
      </div>
    );
  };
  
  return <button onClick={openModal}>모달 열기</button>;
}
```

### 2. 직접 DOM 조작 (명령형 접근)

jQuery 방식처럼 직접 DOM을 조작하는 방법도 사용했습니다:

```jsx
function Modal({ children, onClose }) {
  useEffect(() => {
    // 직접 DOM 요소 생성
    const modalEl = document.createElement('div');
    modalEl.className = 'modal-container';
    document.body.appendChild(modalEl);
    
    // React로 모달 내용 렌더링
    const modalRoot = ReactDOM.render(
      <div className="modal">
        {children}
        <button onClick={onClose}>닫기</button>
      </div>,
      modalEl
    );
    
    // 정리 함수
    return () => {
      document.body.removeChild(modalEl);
    };
  }, []);
  
  // 실제 컴포넌트에서는 아무것도 렌더링하지 않음
  return null;
}
```

### 3. iframe 사용

스타일 격리를 위해 iframe을 사용하는 방법도 있었습니다:

```jsx
function ModalWithIframe({ children, onClose }) {
  const iframeRef = useRef(null);
  
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    
    const iframeDoc = iframe.contentDocument;
    iframeDoc.body.innerHTML = '<div id="modal-root"></div>';
    
    // iframe 내부에 스타일 주입
    const style = iframeDoc.createElement('style');
    style.textContent = `
      body { margin: 0; font-family: sans-serif; }
      .modal { ... }
    `;
    iframeDoc.head.appendChild(style);
    
    // React로 내용 렌더링
    ReactDOM.render(
      <div className="modal">
        {children}
        <button onClick={onClose}>닫기</button>
      </div>,
      iframeDoc.getElementById('modal-root')
    );
  }, [children, onClose]);
  
  return (
    <iframe 
      ref={iframeRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none',
        zIndex: 1000
      }}
    />
  );
}
```

## 결론

`createPortal`이 생기기 전에는 이런 우회 방법들이 필요했지만, 모두 한계가 있었습니다:

1. **복잡한 코드와 상태 관리**: 전역 상태, 컨텍스트 등의 복잡한 패턴이 필요했습니다
2. **선언적이지 않은 접근**: React의 선언적 프로그래밍 모델에서 벗어나는 방식이었습니다
3. **이벤트 버블링 문제**: 직접 DOM 조작 시 React 이벤트 시스템과의 통합이 어려웠습니다
4. **컴포넌트 생명주기 관리 어려움**: 부모 컴포넌트와 동기화된 생명주기 관리가 복잡했습니다

`createPortal`은 이런 모든 문제를 해결하면서도 React의 선언적 모델을 유지할 수 있게 해주는 우아한 해결책입니다.