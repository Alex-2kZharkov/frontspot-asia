export const DisplayUserName = (props) => {
  return (
    <div>
      <h1>Hello, {props.user.name}! </h1>
    </div>
  );
};

const user1 = {
  name: "josh",
  age: 23,
  hairColor: "blonde",
  heightInCm: 175,
};

const user2 = {
  personalInfo: {
    name: "josh",
    age: 23,
  },
  physicalFeatures: {
    hairColor: "blone",
    heightInC: 175,
  },
};
