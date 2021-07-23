const HomeOption = ({ title, data }) => {
  return (
    <div>
      <label>{title}</label>

      <select id='pesos'>
        {data
          ? data.map((item) => <option key={item}>{item}</option>)
          : console.log('no funcion')}
      </select>
    </div>
  );
};

export default HomeOption;
