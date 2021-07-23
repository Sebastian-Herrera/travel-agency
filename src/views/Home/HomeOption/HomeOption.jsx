import { useEffect, useRef } from 'react';

const HomeOption = ({ title, data, getDato }) => {
  const selectRef = useRef();

  const onChange = (e) => {
    // getDato(title, item);
    // console.log('sexo');
    // console.log(title);
    getDato(title, e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    if (
      selectRef.current.value !== undefined &&
      selectRef.current.value !== ''
    ) {
    //   console.log(title, selectRef.current.value);
    // onChange(selectRef.current);
    console.log(title, selectRef.current.value);
    getDato(title, selectRef.current.value);
    }
  }, [title]);

  return (
    <div>
      <label>{title}</label>
      <select
        ref={selectRef}
        id='pesos'
        defaultValue={data[0]}
        onClick={onChange}>
        {data
          ? data.map((item, index) =>
              index === 0 ? (
                <option key={item}>{item}</option>
              ) : (
                <option key={item}>{item}</option>
              )
            )
          : console.log('no function')}
      </select>
    </div>
  );
};

export default HomeOption;
