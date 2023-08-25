import React, { useState, useEffect } from "react";
import "./PasswordGenerator.css";

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [list, setList] = useState([]);

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  const generatePassword = () => {
    let allTogether = "";
    let password = "";

    if (includeLowercase) allTogether += lowercase;
    if (includeUppercase) allTogether += uppercase;
    if (includeNumbers) allTogether += numbers;
    if (includeSymbols) allTogether += symbols;

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allTogether.length);
      const char = allTogether[randomIndex];
      password += char;
    }
    setGeneratedPassword(password);
  };

  useEffect(() => {
    generatePassword();
  }, []);

  useEffect(() => {
    if (generatedPassword === "") return;
    //Papildymas:
    //Pasiimti pries tai issaugota informacija
    //Ja issifruoti is JSON
    //Masyvo papildymas
    //Uzsifravimas
    //Issaugojimas
    let data = localStorage.getItem("passwords");
    if (data) {
      data = JSON.parse(data);
      data.push(generatedPassword);
    } else {
      data = [generatedPassword];
    }
    localStorage.setItem("passwords", JSON.stringify(data));
    setList(data);
  }, [generatedPassword]);

  return (
    <div className="container">
      <h1>Need a password? Try Password Generator</h1>
      <h5>Generate secure, random passwords to stay safe online.</h5>
      {/* <div className="d-flex justify-content-center">
        <button className="generateButton" onClick={generatePassword}>
          Generate Password:
        </button>
      </div> */}
      <div className="d-flex justify-content-center">
        <div className="password" value={generatedPassword}>
          {generatedPassword.split("").map((char) => {
            if (symbols.includes(char))
              return <span className="red">{char}</span>;
            if (numbers.includes(char))
              return <span className="blue">{char}</span>;
            else return char;
          })}
        </div>
      </div>

      <div className="containerLength">
        <label>
          <h5 className="length">Password Length:</h5>
          <input
            type="number"
            className="form-control"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </label>
      </div>

      <div className="containerChecked">
        <div className="checks">
          <label className="form-control">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase((val) => !val)}
            />
            <h6>LowerCase</h6>
          </label>
        </div>

        <div className="checks">
          <label className="form-control">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase((val) => !val)}
            />
            <h6>UpperCase</h6>
          </label>
        </div>

        <div className="checks">
          <label className="form-control">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers((val) => !val)}
            />
            <h6>Numbers</h6>
          </label>
        </div>

        <div className="checks">
          <label className="form-control">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols((val) => !val)}
            />
            <h6>Symbols</h6>
          </label>
        </div>
      </div>
      {/* //atvaizduojami 10 paskutiniai passwordai is localStorage */}
      <h3>10 Last Passwords:</h3>
      <div className="list">
        {list.slice(-10).map((value) => (
          <li>{value}</li>
        ))}
      </div>
    </div>
  );
};
export default PasswordGenerator;
