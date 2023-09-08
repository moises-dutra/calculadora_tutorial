import { useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const somar = () => {
    setResultado(valor1 + valor2);
  };

  const subtrair = () => {
    setResultado(valor1 - valor2);
  };

  const multiplicar = () => {
    setResultado(valor1 * valor2);
  };

  const dividir = () => {
    setResultado(valor1 / valor2);
  };

  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleChangeValor1 = (e) => {
    const regex = /^[0-9\b]+$/;
    const value = parseInt(e.target.value);
    if (value === "" || regex.test(value)) {
      setValor1(value);
    }
  };

  const handleChangeValor2 = (e) => {
    const regex = /^[0-9\b]+$/;
    const value = parseInt(e.target.value);
    if (value === "" || regex.test(value)) {
      setValor2(value);
    }
  };

  return (
    <div>
      <div className={styles.center}>
        <h1 className={styles.letra_titulo}>Calculadora Visual 1.0</h1>
      </div>
      <fieldset className={styles.fieldset}>
        <legend>Minha Calculadora</legend>

        <div className={styles.grid_container}>
          <div className={styles.grid_item.item1}>
            <input
              className={styles.input}
              type="text"
              id="num1"
              // onChange={(e) => setValor1(parseInt(e.target.value))}
              onChange={(e) => handleChangeValor1(e)}
              value={valor1}
              valueAsNumber={true}
            />
          </div>
          <div className={styles.grid_item.item2}>
            <input
              className={styles.input}
              type="text"
              id="num2"
              // onChange={(e) => setValor2(parseInt(e.target.value))}
              onChange={(e) => handleChangeValor2(e)}
              value={valor2}
              valueAsNumber={true}
            />
          </div>

          <div className={styles.grid_item.item3}>
            <button className={styles.button_azul} onClick={somar}>
              ＋
            </button>
            <p></p>
            <button className={styles.button_verde} onClick={multiplicar}>
              ⨉
            </button>
          </div>
          <div className={styles.grid_item.item4}>
            <button className={styles.button_amarelo} onClick={subtrair}>
              —
            </button>
            <p></p>
            <button className={styles.button_vermelho} onClick={dividir}>
              ÷
            </button>
          </div>

          <div className={styles.grid_item.item5}>
            <label className={styles.label}>=</label>
          </div>

          <div className={styles.grid_item.item6}>
            <input
              className={styles.input2}
              type="text"
              id="resultado"
              value={resultado}
              readOnly
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Calculator;
