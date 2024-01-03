import PropTypes from 'prop-types';
import { useState } from 'react';

const countHits = (WrappedComponent, power) => {
    const CountHits = ({ reduceHandler, ...props}) => {

        const [hits, setHits] = useState(0);

        const addOne = () => {
            setHits(hits +1);
            const compName = WrappedComponent.name;
            reduceHandler(compName, power)
        }

        return <WrappedComponent addOneHit={addOne} hocState={{hits}} {...props} /> 
    }

    CountHits.propTypes = {
        reduceHandler: PropTypes.func.isRequired
    }

    return CountHits;
}

export default countHits;