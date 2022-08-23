import { useParams } from "react-router";

const Color = (props) => {
    const params = useParams();
    if (isNaN(+params.value) == true) {
        return (
            <h1 style={{ backgroundColor: params.background, color: params.color }} > The Number is: {params.word}</ h1 >
        );
    }
    else {
        return (
            <h1 style={{ backgroundColor: params.background, color: params.color }} > The Word is: {params.word}</ h1 >
        );
    }
}
export default Color;

