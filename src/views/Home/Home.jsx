import HomeForm from './HomeForm/HomeForm';
import { useState } from 'react';

const HomePage = () => {
  const [datosApi, setDatosApi] = useState({});

  const getDatosApi = (api) => {
    setDatosApi({ api });
    console.log(api);
  };

  return (
    <section>
      <HomeForm getDatosApi={getDatosApi} />
      {/* <h1>lorem</h1>
      <h2>lorem</h2>
      <h3>lorem</h3>
      <h4>lorem</h4>
      <p>lorem</p> */}
    </section>
  );
};

export default HomePage;
