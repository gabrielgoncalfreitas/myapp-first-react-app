import { useState } from 'react';

function App() {

  const [name, setName] = useState();

  return (
    <main>
      <div className="container d-flex justify-content-center">
        <textarea className='form-control text-center fs-1 my-5 p-3'
          type='text'
          name='name'
          onChange={() => { setName(document.querySelector('textarea[name=name]').value); }} />
      </div>

      <div className='container text-center text-white text-break'>
        <h1>{name}</h1>
      </div>
    </main>
  );
}

export default App;
