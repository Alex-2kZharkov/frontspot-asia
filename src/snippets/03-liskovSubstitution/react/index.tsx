interface CatFact {
    facts: string[];
    color: string;
}

const CatFactA = ({facts, color}: CatFact) => {
    return <></>;
};

const CatFactB = ({facts, color}: CatFact) => {
    return <></>;
};

export default () => {
    const catFactData: CatFact = {
        facts: ["Test 1", "Test 2", "Test 3"],
        color: "red",
    };

    return (
        <div>
            {catFactData.facts.length ? (
                <CatFactA {...catFactData} />
            ) : (
                <div>
                    <CatFactB {...catFactData} />
                    <div>No facts</div>
                </div>
            )}
        </div>
    );
};
