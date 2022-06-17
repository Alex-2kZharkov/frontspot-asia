const App = () => {
  const user1 = {
    name: "josh",
    age: 23,
    hairColor: "blonde",
    heightInCm: 175,
    physicalFeatures: {
      hairColor: "blone",
      heightInC: 175,
    },
  };
  return (
    <div>
      <DisplayUserName name={user.name} />
    </div>
  );
};
const DisplayUserName = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}! </h1>
    </div>
  );
};
