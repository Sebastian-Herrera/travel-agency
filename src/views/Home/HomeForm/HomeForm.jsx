import HomeOption from '../HomeOption/HomeOption';

const HomeForm = () => {
  const data = ['cop', 'usd'];

  return (
    <form>
      <HomeOption title='from' data={data} />
      <HomeOption title='to' data={data} />
      <HomeOption title='departure' data={data} />
      <HomeOption title='return' data={data} />
      <HomeOption title='cabin' data={data} />
      <HomeOption title='passengers' data={data} />
    </form>
  );
};

export default HomeForm;
