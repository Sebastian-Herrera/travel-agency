import HomeOption from '../HomeOption/HomeOption';

const HomeForm = () => {
  const data = ['cop', 'usd'];

  return (
    <form>
      <HomeOption title='from' data={data} />
      <HomeOption title='to' />
      <HomeOption title='departure' />
      <HomeOption title='return' />
      <HomeOption title='cabin' />
      <HomeOption title='passengers' />
    </form>
  );
};

export default HomeForm;
