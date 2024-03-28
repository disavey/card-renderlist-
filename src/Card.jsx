import { useState } from "react";

function Card(props) {
  const [value, setValue] = useState(0);
  const [status, setStatus] = useState(true);

  let limitProduct = 10;

  function handleStatus() {
    setStatus(!status);
  }

  function increment() {
    setValue(value + 1);
    console.log(`manjadi angka ${value}`);
  }

  function decrement() {
    setValue(value - 1);
  }

  return (
    <>
      <div className="h-full rounded-md shadow-lg">
        <img className="w-full h-52 rounded-t-md" src={props.image} />
        <div className="flex justify-between mt-2 p-2 font-semibold">
          <p>{props.name}</p>
          <p>{props.price}</p>
        </div>
        <div className="mt-4 p-2 text-slate-500">
          <p>{props.desc}</p>
        </div>
        <div
          className={
            value > 0
              ? " border border-blue-500 p-2 rounded-md w-full flex justify-center gap-4 "
              : "bg-blue-600 p-2 text-white rounded-md w-full flex justify-center gap-4 "
          }
        >
          {value > 0 ? (
            <>
              <button onClick={decrement}>-</button>
              <button>{value >= limitProduct ? "Product Full" : value}</button>
              <button onClick={increment}>
                {value >= limitProduct ? "" : "+"}
              </button>
            </>
          ) : (
            <button onClick={increment}>Add to Cart</button>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
