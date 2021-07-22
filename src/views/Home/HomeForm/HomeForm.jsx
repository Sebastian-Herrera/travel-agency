import HomeOption from '../HomeOption/HomeOption';

const HomeForm = () => {
  return (
    <form>
      <HomeOption title='from' />
      <HomeOption title='to' />
      <HomeOption title='departure' />
      <HomeOption title='return' />
      <HomeOption title='cabin' />
      <HomeOption title='passengers' />
    </form>
  );
};

export default HomeForm;
