import { useParams } from "react-router-dom";

const Status = () => {
    const { code } = useParams()

    return (
        <div>
            <h1>This page isn't ready yet. Code {code}</h1>
        </div>
    )
}

export default Status;