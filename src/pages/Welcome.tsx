import React, { useRef, useState } from 'react';
import { Button, Input } from 'antd';

const Welcome: React.FC = () => {
  const [name, setName] = useState('');
  const inputRef = useRef<Input>(null);

  return (
    <div>
      <p>welcome page</p>
      <div style={{ width: 400, display: 'flex' }}>
        <Input ref={inputRef} />
        <Button
          type="primary"
          onClick={e => {
            e.preventDefault();
            setName(inputRef.current!.input.value);
          }}
        >
          Welcome
        </Button>
      </div>
      {name && <p>Welcome, {name}</p>}
    </div>
  );
};

export default Welcome;
