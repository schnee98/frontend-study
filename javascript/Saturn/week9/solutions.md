1. X (브라우저 환경과 node.js 환경에서 모두 전역 객체의 메서드로서 제공되는 호스트 객체)
2. (1) 변경할 부분을 갱신하는 데 필요한 데이터만 서버로부터 전송받기 때문에 불필요한 데이터 통신 X
   (2) 변경할 필요가 없는 부분은 다시 렌더링하지 않음. 따라서 화면 깜박임 없음
   (3) 클라이언트와 서버와의 통신이 비동기 방식으로 동작하기 때문에 서버에게 요청을 보낸 이후 블로킹이 발생하지 않음.
3. GET, DELETE
