import HomeOption from '../HomeOption/HomeOption';
import { useState } from 'react';

// https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/CO/COP/es-CO/BOG-sky/LHR-sky/anytime

const HomeForm = ({ getDatosApi }) => {
  const [datos, setDatos] = useState({});

  const pais = ['USD', 'CO'];
  const moneda = ['USD', 'COP'];
  const origen = ['es-CO', 'usd'];
  const from = ['BOG-sky', 'usd'];
  const to = ['LHR-sky', 'usd'];
  const tiempo = ['anytime', 'usd'];

  const sendData = (e) => {
    e.preventDefault();
    // console.log();
    getDatosApi(datos);
  };

  const getDato = (title, item) => {
    setDatos({
      ...datos,
      [title]: item,
    });
  };

  const datos_api = [
    { title: 'from', data: pais },
    { title: 'to', data: moneda },
    { title: 'departure', data: origen },
    { title: 'return', data: from },
    { title: 'cabin', data: to },
    { title: 'passengers', data: tiempo },
  ];

  return (
    <form onSubmit={sendData}>
      {datos_api
        ? datos_api.map((item) => (
            <HomeOption
              key={item.title}
              title={item.title}
              data={item.data}
              getDato={getDato}
            />
          ))
        : null}
      <button type='submit'>Enviar</button>
    </form>
  );
};

export default HomeForm;
