import Card from "../../components/Card/Card";
import data from "../../data/data";
import "./Home.css"

const Home = () => {
    return (
        <div className="home">
            {data.map((value) => {
                return <Card image={value.url} code={value.code} title={value.title} />
            })}
        </div>
    )
}

export default Home;