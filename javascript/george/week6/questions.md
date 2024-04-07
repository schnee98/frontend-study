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

### 2. input과 같은 요소 노드는 초기 상태, 최신 상태 2개의 상태를 관리해야 합니다. 각 상태는 어떻게 관리 되는지 설명하세요.

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
        // 이 부분에 JavaScript 코드를 작성하여 아래와 같이 박스의 순서를 변경하세요:
        // 1. box1과 box2의 위치를 변경하세요.
        // 2. box3를 box2와 box1 사이에 위치하도록 변경하세요.
        // 결과 = 2, 3, 1
    </script>
</body>

</html>
```