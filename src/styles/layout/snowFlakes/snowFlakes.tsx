import './snowFlakes.css';

const SnowFlakes = () => {
  const Snowflake = () => {
    return <div className="snowflake"></div>;
  };

  const makeSnowflakes = Array.from({ length: 10 }, (_, index) => (
    <Snowflake key={index} />
  ));
  return <div className="background">{makeSnowflakes}</div>;
};

export default SnowFlakes;
