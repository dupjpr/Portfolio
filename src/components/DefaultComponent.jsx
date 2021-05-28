import { useSelector } from "react-redux";

const DefaultComponent = () => {

    const storeData = useSelector(state => state);

    return (
        <div>
            <h1>Welcome to Cognitio Artifacts SAS</h1>
            <div>{storeData.hello}</div>
        </div>
    );
}

export default DefaultComponent;