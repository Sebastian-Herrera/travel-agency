import HomeOption from '../HomeOption/HomeOption';

// https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/CO/COP/es-CO/BOG-sky/LHR-sky/anytime

const HomeForm = () => {
  const pais = ['CO', 'usd'];
  const moneda = ['COP', 'USD'];
  const origen = ['es-CO', 'usd'];
  const from = ['BOG-sky', 'usd'];
  const to = ['LHR-sky', 'usd'];
  const tiempo = ['anytime', 'usd'];

  return (
    <form>
      <HomeOption title='from' data={pais} />
      <HomeOption title='to' data={moneda} />
      <HomeOption title='departure' data={origen} />
      <HomeOption title='return' data={from} />
      <HomeOption title='cabin' data={to} />
      <HomeOption title='passengers' data={tiempo} />
    </form>
  );
};

export default HomeForm;
