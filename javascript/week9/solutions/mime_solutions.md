## 정답

1.

- 디바운스 : 짧은 시간 간격을 이벤트가 연속해서 발생하면 이벤트 핸드러를 호출하지 않다가 일정 시간이 경과한 이후에 이벤트 핸들러가 `한번`만 호출(input이벤트)
- 스로틀 : 짧은 시간 간격으로 이벤트가 연속해서 발생할때, `일정 시간 간격으로` 이벤트 핸들러를 `한번`만 호출(scroll이벤트)

2. 자바스크립트를 사용하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고 서버가 응답한 데이터를 수신하여 웹페이지를 동적으로 갱신하는 프로그래밍 방식

- 참고

```
●　XHR: XHR은 복잡한 사용법과 API를 가지고 있습니다. 비동기적으로 데이터를 가져오기 위해 이벤트 핸들러를 설정해야 하며, 요청을 설정하고 보내는 등의 다양한 단계를 거쳐야 합니다.
●　Fetch API: Fetch API는 더 간단하고 직관적인 사용법을 제공합니다. fetch() 함수를 사용하여 요청을 보내고, then() 메서드를 사용하여 응답을 처리합니다. 또한, Promise를 사용하기 때문에 비동기 코드를 더 쉽게 작성할 수 있습니다.
```

3.

- REST: HTTP의 장점을 살려 최대한 활용할 수 있게하는 `아키텍쳐`
  or http를 기반으로 클라이언트가 서버의 리소스 접근하는 `방식을 규정한 아키텍쳐`
- RESTful : REST의 기본원칙을 성실히 지킨 서비스 디자인
- REST api : REST를 기반으로 서비스 api를 구현한 것

- **추가문제 답**

- URI (Uniform Resource Identifier) = URL + URN
- url(Uniform Resource Locator) : 웹에서 리소스 위치 지정
- urn(Uniform Resource Name) : 리소스의 이름을 나타냅니다. 즉, 리소스의 위치가 아닌 리소스의 식별자

```
URL과 URI는 웹에서 리소스를 식별하는 데 사용되는 용어입니다. 여기서 URI는 "Uniform Resource Identifier"의 약자이고, URL은 "Uniform Resource Locator"의 약자입니다.

URI(Uniform Resource Identifier)는 자원을 유일하게 식별하기 위한 일반적인 방법을 제공하는 개념입니다. URI는 두 가지 형태의 식별자인 URL과 URN으로 구성됩니다.

●　URL(Uniform Resource Locator): URL은 웹에서 리소스의 위치를 지정합니다. 즉, 리소스가 어디에 위치하는지를 나타내며, 특정한 네트워크 프로토콜(일반적으로 HTTP 또는 HTTPS)을 사용하여 리소스에 액세스하는 방법을 제공합니다. 예를 들어, "https://www.example.com/index.html"은 웹 페이지의 URL입니다.

●　URN(Uniform Resource Name): URN은 리소스의 이름을 나타냅니다. 즉, 리소스의 위치가 아닌 리소스의 식별자입니다. URN은 리소스가 위치해 있는 곳에 관계없이 유일한 이름을 제공합니다. 예를 들어, ISBN(국제 표준 도서 번호)이 URN의 한 예입니다.
따라서 URL은 리소스의 위치를 식별하고, URN은 리소스의 이름을 식별합니다. URI는 이러한 두 가지 개념(위치 및 이름)을 모두 포함하는 개념이며, URL과 URN은 URI의 하위 개념입니다.
```
