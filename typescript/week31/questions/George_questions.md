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