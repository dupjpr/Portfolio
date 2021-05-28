import { useSelector } from "react-redux";

import './defaultComponent.scss'

const DefaultComponent = () => {

    const storeData = useSelector(state => state);

    return (
        <section className='sectionHome-container'>
            <h1>Welcome to Cognitio Artifacts SAS</h1>
            <div>{storeData.hello}</div>
        </section>
    );
}

export default DefaultComponent;