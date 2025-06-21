import useCustomActionState from "./useCustomActionState";
import { addToCart } from "./action";

function AddToCartForm({ itemID, itemTitle }: {itemID: string, itemTitle: string}) {
  const [message, formAction, isPending] = useCustomActionState(addToCart, null);

  console.log(isPending)
  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit">Add to Cart</button>
      {isPending ? "Loading..." : message}
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
