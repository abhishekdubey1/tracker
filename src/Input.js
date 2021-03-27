import { useState, useEffect, useMemo } from "react";
import { useOnPageLeave } from "./useOnPageLeave";
const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const tagsArr = useMemo(() => ({ cats: false, dogs: false }), []);
  useEffect(() => {
    Object.keys(tagsArr).forEach((el, i) => {
      if (inputValue.includes(el)) {
        tagsArr[el] = true;
      } else {
        tagsArr[el] = false;
      }
    });
  }, [inputValue, tagsArr]);
  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };
  useOnPageLeave(() => alert("dont go"));

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onKeyPress={({ key }) => alert(key)}
        onChange={handleChange}
      />
      <div>
        <ul>
          {Object.keys(tagsArr).map((el, i) =>
            tagsArr[el] ? (
              <li
                key={el}
                style={{
                  listStyle: "none",
                  backgroundColor: "springgreen",
                  width: "max-content",
                  display: "inline",
                  padding: "10px",
                  marginRight: "10px",
                }}
              >
                {"#" + el}
                <button>X</button>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
};
export default Input;
