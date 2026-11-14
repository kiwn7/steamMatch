import { useState, useEffect } from "react";

function useDebounce(valor, demora = 400) {
  const [valorRetrasado, setValorRetrasado] = useState(valor);
  useEffect(() => {
    const timer = setTimeout(() => setValorRetrasado(valor), demora);
    return () => clearTimeout(timer);
  }, [valor, demora]);
  return valorRetrasado;
}

export default useDebounce;
