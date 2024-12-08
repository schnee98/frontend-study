1. nextjs의 `Link` 컴포넌트와 `react-router-dom`의 Navigation의 차이는 무엇일까요?

답: react-router-dom은 내비게이션이 실행되면 해당하는 컴포넌트를 리렌더링 하는데, `Link` 컴포넌트는 페이지 안에 있을 때, 해당 링크의 컴포넌트들을 자동으로 prefetch (사전에 로딩) 한다.

2. 다음 컴포넌트는 요청을 직렬적으로 보내서 Waterfall을 발생시킵니다. 이 요청들을 병렬적으로 처리하도록 수정해주세요.

```typescript
import { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "@/app/lib/data";

export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const { totalPaidInvoices, totalPendingInvoices, numberOfInvoices, numberOfCustomers } = await fetchCardData();

  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card title="Total Customers" value={numberOfCustomers} type="customers" />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
```

답:

```typescript
import { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "@/app/lib/data";

export default async function Page() {
  const [revenue, latestInvoices, cardData] = await Promise.all([
    fetchRevenue(),
    fetchLatestInvoices(),
    fetchCardData(),
  ]);
  const { totalPaidInvoices, totalPendingInvoices, numberOfInvoices, numberOfCustomers } = cardData;

  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card title="Total Customers" value={numberOfCustomers} type="customers" />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
```

3. 다음 리스트는 코드스쿼드 2024 프론트엔드 과정에서 진행되었던 프로젝트 목록들입니다. 각 프로젝트마다 알맞은 렌더링 방식 (정적/동적) 을 선택해주세요.

- 뉴스스탠드
- 이벤트 루프
- 데이터 패칭
- 이슈 트래커
- 노션

답:

- 뉴스스탠드: 정적
- 이벤트 루프: 정적
- 데이터 패칭: 정적
- 이슈 트래커: 정적
- 노션: 동적
