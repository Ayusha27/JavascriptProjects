import { useState, useEffect } from 'react';

function InputFieldTestClosure() {
    const [inputValue, setInputValue] = useState('');
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };

    return (
        <div>
            <input 
            type="text" 
            value={inputValue} 
            onChange={handleChange} 
            />
        </div>
    );
}

export default InputFieldTestClosure;