import React, {useEffect, useRef, useState} from 'react';

const UseRefComponent = () => {
  const [value, setValue] = useState(0)
  const inputRef = useRef(null);
  const divRef = useRef(null);
  const valueRef = useRef(0)
  // console.log(inputRef);
  console.log('valueRef', valueRef)
  useEffect(() => {
    // document.querySelector("input").focus();
    // inputRef.current.focus();
  
    }, [])
  
    const changeBgColor = () => {
      const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
      // divRef.current.style.backgroundColor =randomColor
      divRef.current.style.backgroundColor =inputRef.current.value
      
    }
    const increase = () => {
      setValue(value + 1);
      valueRef.current += 1
      
    }
  return (
    <div className="useref" ref={divRef}>
      <h2>UseRef Component</h2>
      {/* <input type="color" placeholder="Enter text..." ref={inputRef} onChange={changeBgColor}/> */}
      <input  placeholder="Enter text..." ref={inputRef}/>
      <button onClick={changeBgColor}>Change Color</button>
      <button onClick={increase}>increase</button>
    </div>
  );
};

export default UseRefComponent;
