"use server";

export interface CartState {
  success?: boolean;
  cartSize?: number;
  message?: string;
}

export async function addToCart(prevState: CartState, queryData: FormData): Promise<CartState> {
  console.log("prevState", prevState);
  console.log("queryData", queryData);
  const itemID = queryData.get("itemID");
  if (itemID === "1") {
    return {
      success: true,
      cartSize: 12,
    };
  } else {
    return {
      success: false,
      message: "The item is sold out.",
    };
  }
}
