const DisplayUserName = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}! </h1>
    </div>
  );
};

const App = () => {
  const user = {
    personalInfo: {
      name: "josh",
      age: 23,
    },
    physicalFeatures: {
      hairColor: "blone",
      heightInC: 175,
    },
  };

  return (
    <div>
      <DisplayUserName name={user.personalInfo.name} />
    </div>
  );
};
