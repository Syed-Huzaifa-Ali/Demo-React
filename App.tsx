import * as React from 'react';
import './style.css';

export default function App() {
  const count = React.useRef<HTMLInputElement>(null);
  const num = React.useRef<HTMLInputElement>(null);
  const [list, setList] = React.useState([]);

  const listNumber = () => {
    const li = [];

    for (let i = 0; i < Number(count.current.value); i++) {
      if (Number(num.current.value) % i == 0) {
        li.push(`0 - ${Math.ceil((i + 1) / 2)}`);
      } else {
        li.push(`1 - ${Math.ceil((i + 1) / 2)}`);
      }
    }

    setList(li);
  };

  return (
    <div>
      <h1>My Website</h1>
      <label>Enter Number: </label>
      <input type="number" title="Count" ref={num} required />

      <br />
      <label>Enter Count: </label>
      <input type="number" title="Count" ref={count} required />

      <button className="submit" onClick={() => listNumber()}>
        Submit
      </button>
      <div>
        <dl>
          {list &&
            list.map((x, index) => {
              return (
                <dt className="listItem" onClick={() => {}}>
                  {x}
                </dt>
              );
            })}
        </dl>
      </div>
    </div>
  );
}
