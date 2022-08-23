import { useParams } from "react-router";

const Value = (props) => {
    const params = useParams();
    if (isNaN(+params.value) == true) {
        return (
            <h1>The word is: {params.value}</h1>
        );
    }
    else {
        return (
            <h1>The number is: {params.value}</h1>
        );
    }
}
export default Value;