import { useState, useCallback, useEffect , useRef} from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [password, setPassword] = useState("");
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);

  // You can make this project without useCallback , here it is used only to learn useCallback
  const getPassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "0123456789";
    if (characters) str += '!@#$%^&*()_-+={[}]|:;"<,>.?/';

    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * str.length);
      pass += str[random];
    }
    setPassword(pass);
  }, [length, numbers, characters]);

  useEffect(() => getPassword(), [length, numbers, characters]);

  const copyPassword = useCallback(() => {

    // ? to check that it is not null
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,45);  // using this you can bound user to select only in particular range
    window.navigator.clipboard.writeText(password);

  }, [password]);

  // we are using ref to give a selected view to user while copying the password to clipboard
  const passwordRef = useRef(null);


  // Take a note that we didn't not use useState for copying the password , instead we use useCallback() and calls it when user click copy method 

  return (
    <div className="w-full bg-black h-screen flex justify-center items-center">
      <div className="w-5/12 bg-gray-600 text-center p-5 flex gap-3 flex-col text-white rounded-lg">
        <h1 className="tracking-widest text-2xl"> Password Generator</h1>
        <div className="rounded-md overflow-hidden flex p-2 justify-center items-center">
          <input
            type="text"
            value={password}
            placeholder="password"
            readOnly
            className="w-full px-3 py-1 text-lg outline-none text-black"
            style={{ width: "100%" }}
            ref={passwordRef}
          />
          <button
            className="bg-blue-600 px-3 py-1 text-lg border-none"
            onClick={() => {
              copyPassword();
            }}
          >
            copy
          </button>
        </div>
        <div className="flex gap-3 p-2 justify-center items-center">
          <div className="flex gap-1 items-center text-lg">
            <input
              type="range"
              id="range"
              value={length}
              min={3}
              max={50}
              onChange={(e) => setlength(e.target.value)}
            />
            <label htmlFor="range">length:{length}</label>
          </div>
          <div className="flex gap-1 items-center text-lg">
            <input
              type="checkbox"
              id="checkboxNumber"
              onChange={() => {
                setNumbers(!numbers);
              }}
            />
            <label htmlFor="checkboxNumber">Numbers</label>
          </div>
          <div className="flex gap-1 items-center text-lg">
            <input
              type="checkbox"
              id="checkboxCharacters"
              onChange={() => {
                setCharacters(!characters);
              }}
            />
            <label htmlFor="checkboxCharacters">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
