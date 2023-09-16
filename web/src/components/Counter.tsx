import { createSignal } from "solid-js";

export default function Counter(props: any) {
  const [count, setCount] = createSignal(0);
  const add = () => setCount(count() + 1);
  const subtract = () => setCount(count() - 1);

  return (
    <>
      <div class="grid grid-cols-3 place-items-center text-4xl mt-12">
        <button onClick={subtract}>-</button>
        <pre>{count()}</pre>
        <button onClick={add}>+</button>
      </div>
      <div class="text-center mt-6 text-2xl">{props.children}</div>
    </>
  );
}
