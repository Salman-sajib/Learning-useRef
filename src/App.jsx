import { useEffect, useRef } from 'react';

function App() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log('Component rendered');
  });

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = 'yellow';
    inputRef2.current.style.backgroundColor = '';
    inputRef3.current.style.backgroundColor = '';
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = '';
    inputRef2.current.style.backgroundColor = 'yellow';
    inputRef3.current.style.backgroundColor = '';
  }

  function handleClick3() {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = '';
    inputRef2.current.style.backgroundColor = '';
    inputRef3.current.style.backgroundColor = 'yellow';
  }

  return (
    <div className='bg-teal-100 min-h-svh flex flex-col gap-2 items-center justify-center'>
      <div>
        <button
          className='bg-violet-500 px-5 py-2 rounded mr-3 text-white'
          onClick={handleClick1}
        >
          Click me!
        </button>
        <input className='border p-2 rounded' ref={inputRef1} type='text' />
      </div>

      <div>
        <button
          className='bg-violet-500 px-5 py-2 rounded mr-3 text-white'
          onClick={handleClick2}
        >
          Click me!
        </button>
        <input className='border p-2 rounded' ref={inputRef2} type='text' />
      </div>

      <div>
        <button
          className='bg-violet-500 px-5 py-2 rounded mr-3 text-white'
          onClick={handleClick3}
        >
          Click me!
        </button>
        <input className='border p-2 rounded' ref={inputRef3} type='text' />
      </div>
    </div>
  );
}

export default App;
