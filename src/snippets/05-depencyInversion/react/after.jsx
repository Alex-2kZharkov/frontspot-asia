import { useState } from "react";
import axios from "axios";

const useFetchCatFacts = async (fact) => {
  return await axios.get("https://cat-fact-herokuapp.com/facts");
};

const CatFact = (fact) => (
  <>
    <div>{fact.name}</div>
    <div>{fact.age}</div>
  </>
);

export const GoodSingleResponsibilityComponent = () => {
  const [fact, setFact] = useState("");
  const { data: cats } = useFetchCatFacts();

  const handleChange = (e) => setFact(e.target.value);

  return (
    <div className="App">
      <h1>Cat Facts</h1>
      <input value={fact} onChange={handleChange} />
      {cats.map((fact) => (
        <CatFact fact={fact} />
      ))}
    </div>
  );
};
