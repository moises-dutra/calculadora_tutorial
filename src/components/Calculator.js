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
    const input = e.target.value;
    const regex = /^([0-9]{1,})?(\.)?([0-9]{1,})?$/;

    if (input.match(regex)) {
      setValor1(input);
    }
  };

  const handleFloatValor1 = () => {
    //quando perde o foco
    // The conditional prevents parseFloat(null) = NaN (when the user deletes the input)
    setValor1(parseFloat(valor1) || "");
  };

  const handleChangeValor2 = (e) => {
    const input = e.target.value;
    const regex = /^([0-9]{1,})?(\.)?([0-9]{1,})?$/;

    if (input.match(regex)) {
      setValor2(input);
    }
  };

  const handleFloatValor2 = () => {
    //quando perde o foco
    // The conditional prevents parseFloat(null) = NaN (when the user deletes the input)
    setValor2(parseFloat(valor2) || "");
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
              onChange={(e) => handleChangeValor1(e)}
              onBlur={handleFloatValor1}
              value={valor1}
            />
          </div>
          <div className={styles.grid_item.item2}>
            <input
              className={styles.input}
              type="text"
              id="num2"
              onChange={(e) => handleChangeValor2(e)}
              onBlur={handleFloatValor2}
              value={valor2}
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
