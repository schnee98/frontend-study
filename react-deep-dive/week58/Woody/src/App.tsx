import { addToCart, CartState } from "./actions";
import useCustomActionState from "./useCustomActionState.js";

function AddToCartForm({ itemID, itemTitle }: { itemID: string; itemTitle: string }) {
  // const [formState, formAction] = useActionState(addToCart, {});
  const [formState, formAction, isPending] = useCustomActionState<CartState>(addToCart, {});

  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit" disabled={isPending}>
        {isPending ? "Adding..." : "Add to Cart"}
      </button>
      {formState?.success && (
        <div className="toast">
          Added to cart! Your cart now has {formState.cartSize} items.
        </div>
      )}
      {formState?.success === false && (
        <div className="error">Failed to add to cart: {formState.message}</div>
      )}
    </form>
  );
}

export default function App() {
  return (
    <>
      <AddToCartForm itemID="1" itemTitle="JavaScript: The Definitive Guide" />
      <AddToCartForm itemID="2" itemTitle="JavaScript: The Good Parts" />
    </>
  );
}
