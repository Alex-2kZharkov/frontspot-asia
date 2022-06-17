import {createApi} from "@reduxjs/toolkit/query";

const getBaseQuery() = () => {}
export const { useGetCatFacts } = createApi({
        reducerPath: 'catApi',
        baseQuery: getBaseQuery(),
        endpoints: (builder) => ({
            getCatFacts: builder.mutation<CatInterface[], void>({
            query: () => ({
                url: 'https://cat-fact-herokuapp.com/facts',
            })
        })
    })
});
export const GoodDependencyInversionComponent = () => {
    const [fact, setFact] = useState('');
    const {data: cats} = useGetCatFacts();
    return (
        <div className="App">
            <input value={fact} onChange={(e) => setFact(e.target.value)}/>
            {cats.map((fact) => (
                <CatFact fact={fact}/>
            ))}
        </div>
    );
};
