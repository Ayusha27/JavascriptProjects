import { useState, useEffect } from 'react';
import InputFieldTestClosure from './InputFieldTestClosure';

function UseEffectPract() {
  const saveDocument = (content) => {
    console.log("Document saved:", content);
  };

  const [content, setContent] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      saveDocument(content);
    }, 5000);

    return () => clearInterval(timer);
  }, [content]); 

  return (
    <div>
      <h2>Auto-save Text Editor</h2>
      <textarea 
        value={content} 
        onChange={(e) => 
            setContent(e.target.value)
        } 
        placeholder="Type here... (auto-saves every 5 seconds)"
        rows={10}
        cols={50}
      />
      <InputFieldTestClosure />
    </div>
  );
}

export default UseEffectPract;