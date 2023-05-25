import { Puff } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Puff
      height="80"
      width="80"
      radius={1}
      color="#49091a"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
