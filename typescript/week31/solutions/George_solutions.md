## 1. 아래 코드는 컴파일 시점과 런타임 시점 중 어느 곳에서 에러가 발생하나요? 에러가 나는 이유를 설명하고, processUser함수를 개선해보세요.

```ts
interface User {
    name: string;
    address?: {
        city: string;
    };
}

const user: User = {
    name: "홍길동",
    address: {
        city: "서울"
    }
};

function removeUserAddress(user: User) {
    user.address = undefined;
}

function processUser(user: User) {
    if (user.address) {
        console.log(user.address.city);
        
        removeUserAddress(user);
        console.log(`${user.address.city}가 제거되었습니다.`);
    }
}

processUser(user);
```

- 런타임 에러
- if (user.address) 체크 이후에 타입스크립트는 해당 블록 내에서 user.address가 항상 존재한다고 가정합니다. 이는 블록 내에서 user.address의 값이 변경될 수 있다는 것을 고려하지 않습니다.
- 타입스크립트는 removeUserAddress(user) 함수 호출이 user.address를 변경할 수 있다는 것을 추적하지 않습니다. 함수 호출의 모든 가능한 부수 효과를 분석하는 것은 매우 복잡하고 비용이 많이 들기 때문입니다.

```ts
function processUser(user: User) {
    const {address} = user;
    if (address) {
        console.log(address.city);
        
        removeUserAddress(user);
        console.log(`${address.city} 주소가 제거되었습니다.`);
    }
}
```

## 2. 아래 코드는 컴파일 시점에서 에러가 나지 않지만 런타임에 에러가 납니다. 이유를 설명하고 개선해보세요.

```ts
interface player {
    name: string;
    team: string;
    salary: number;
}

const players: player[] = [
    { name: "LeBron James", team: "LAL", salary: 37436858 },
    { name: "Stephen Curry", team: "GSW", salary: 40231758 },
];

const teamToPlayers = {};
for (const player of players) {
    const { team } = player;
    teamToPlayers[team] = teamToPlayers[team] || [];
    teamToPlayers[team].push(player);
}

console.log(teamToPlayers)
```

- teamToPlayers는 초기에 빈 객체로 선언되어 있어, 타입스크립트는 이를 {} 타입으로 추론합니다. 이는 어떤 속성도 허용하지 않는 빈 객체 타입입니다.
- 루프 내에서 teamToPlayers[team]에 접근하려 할 때, 타입스크립트는 {} 타입에 문자열 인덱스로 접근하는 것을 허용하지 않아 오류가 발생합니다.

```ts
const teamToPlayers: { [team: string]: Player[] } = {};
//
const teamToPlayers = {} as { [team: string]: Player[] };
//
const teamToPlayers: Record<string, Player[]> = {};
```

## 3. 아래 코드에서 case 1은 정상적으로 작동하지만, case 2에서는 타입 에러가 발생합니다. 그 이유를 문맥적 타입 추론의 관점에서 설명하고, 개선해보세요.

```ts
type Language = "JavaScript" | "TypeScript" | "Python";
interface GovernedLanguage {
    language: Language;
    organization: string;
}

function complain(language: GovernedLanguage) {}

// case 1
complain({language: "TypeScript", organization: "Microsoft"})

// case 2
const ts = {
    language: "TypeScript",
    organization: "Microsoft",
}

complain(ts)

```
- 문맥적 타입 추론: 문맥적 타입 추론은 표현식의 타입을 그 표현식이 나타나는 위치의 문맥에 기반하여 추론하는 타입스크립트의 기능입니다.

1. case 1
   - 타입스크립트는 함수 호출의 문맥에서 객체 리터럴의 타입을 추론합니다. complain 함수가 GovernedLanguage 타입의 인자를 기대하므로, 객체 리터럴은 이 타입에 맞춰 검사됩니다.

2. case 2
   - case 2에서는 객체를 변수에 할당한 후 그 변수를 함수에 전달하고 있습니다. 
   - 이 경우 타입스크립트는 'ts' 변수의 타입을 { language: string; organization: string; }으로 추론합니다. 
   - 이 타입은 GovernedLanguage 인터페이스와 구조적으로 호환되지만, 'language' 속성의 타입이 더 넓은(string) 타입으로 추론되어 에러가 발생합니다.

```ts
const ts = {
    language: "TypeScript" as const,
    organization: "Microsoft",
}
//
const ts = {
    language: "TypeScript" as Language,
    organization: "Microsoft",
}
//
const ts: GovernedLanguage = {
    language: "TypeScript",
    organization: "Microsoft",
}
```