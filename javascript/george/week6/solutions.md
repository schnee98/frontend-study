### 1. 아래 예제는 두 번째 li의 class가 blue로 바뀌지 않습니다. 그 이유를 설명하고 HTMLCollection과 NodeList의 차이점을 설명하세요.
```
<!DOCTYPE html>
<head>
    <style>
        .red { color: red; }
        .blue { color: blue; }
    </style>
</head>
<body>
    <ul class="fruits">
        <li class="red">Apple</li>
        <li class="red">Banana</li>
        <li class="red">Orange</li>
    </ul>
    <script>
        const $elems = document.getElementsByClassName('red');
        for (let i = 0; i < $elems.length; i++) $elems[i].className = 'blue';
    </script>
</body>
</html>
```

- getElementsByClassName는 HTMLCollection 객체를 반환하는데 HTMLCollection는 상태변화를 실시간으로 반영한다. 첫번째 for문을 돌때 첫 번째 li의 class가 blue로 바뀌면 $elems에서 실시간으로 제거되어 $elems의 길이는 2가 된다. 두번째 for문을 돌때 $elems[i]의 값은 원래 $elems값의 세 번째 li요소가 된다. 이 세 번째 li요소의 class가 blue로 바뀌고 for문이 종료되기 때문에 두번째 li의 class는 바뀌지 않는다.

- HTMLCollection 객체는 상태변화를 실시간으로 반영
- NodeList는 상태변화를 실시간으로 반영하지 않는다.

### 2. input과 같은 요소 노드는 초기 상태, 최신 상태 2개의 상태를 관리해야 합니다. 각 상태는 어떻게 관리 되는지 설명하세요.

- 초기 상태는 HTML 어트리뷰트가 관리하며, 이 초기 상태는 변하지 않는다.
- 최신 상태는 DOM 프로퍼티가 관리하며, 상태 변화에 반응하여 언제나 최신 상태를 유지한다.

### 3.
```
<!DOCTYPE html>
<head>
    <title>순서 변경하기</title>
    <style>
        .container {
            display: flex;
        }

        .box {
            width: 100px;
            height: 100px;
            background-color: #f0f0f0;
            margin: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="box" id="box1">1</div>
        <div class="box" id="box2">2</div>
        <div class="box" id="box3">3</div>
    </div>

    <script>
        const $container = document.querySelector(".container");
        const [$box1, $box2, $box3] = $container.children;
        
        $container.insertBefore($box2, $box1)
        $container.insertBefore($box3, $box1)
    </script>
</body>

</html>
```