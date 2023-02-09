import { useMemo, useState } from "react";

const NumberCubed = () => {
  const [number, setNumber] = useState(0);
  const [test, setTest] = useState(1);
  const numberCubed = useMemo(() => updateNumber(number), [number]);

  return (
    <section>
      <h3>useMemo</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      {numberCubed}
      <button onClick={() => setTest(test + 1)}>Re-render</button>
      {test}
    </section>
  );
};

function updateNumber(n) {
  console.log("Number Update is called");
  return Math.pow(parseInt(n), 3);
}

export default NumberCubed;
