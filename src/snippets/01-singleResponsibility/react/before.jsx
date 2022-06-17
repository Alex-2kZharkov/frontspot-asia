import {useEffect, useState} from "react";
import axios from "axios";

export const BadSingleResponsibilityComponent = () => {
    const [fact, setFact] = useState("");
    const [cats, setCats] = useState([]);

    useEffect(() => {
        axios.get("https://cat-fact-herokuapp.com/facts").then((res) => {
            setCats(res.data[0].text);
        });
    }, []);

    return (
        <div className="App">
            <h1>Cat Facts</h1>
            <input value={fact} onChange={(e) => setFact(e.target.value)}/>
            {cats.map((fact) => (
                <>
                    <div>{fact.name}</div>
                    <div>{fact.age}</div>
                </>
            ))}
        </div>
    );
};
