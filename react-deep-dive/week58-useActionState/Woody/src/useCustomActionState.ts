import { useState, useCallback } from "react";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default function useCustomActionState<T extends { success?: boolean; message?: string }>(
  action: (state: T, data: FormData) => Promise<T>,
  initState: T
): [T | null, (formData: FormData) => Promise<void>, boolean] {
  // 상태 관리
  const [formState, setFormState] = useState<T | null>(initState ?? null);
  const [isPending, setIsPending] = useState(false);

  // 폼 액션 핸들러 함수
  const formAction = useCallback(
    async (formData: FormData) => {
      
      try {
        // 로딩 상태 설정...........??????
        setIsPending(true);

        await delay(2000);

        // 액션 함수 호출 (현재 상태와 폼 데이터 전달)
        const result = await action(formState as T, formData);

        // 결과 상태 업데이트
        setFormState(result);
      } catch (error) {
        // 에러 처리
        setFormState({
          ...initState,
          success: false,
          message: error || "액션 실행 중 오류가 발생했습니다.",
        } as T);

        console.error("Action error:", error);
      } finally {
        // 로딩 상태 해제
        setIsPending(false);
      }
    },
    [action, formState, initState]
  );

  return [formState, formAction, isPending];
}
