import PropTypes from 'prop-types';
const CustomTable = ({hocStateObjProp, lifeValueProp}) => {
  return (
    <table className='table table-striped'>
        <thead>
            <tr>
                <th scope='col'> Coups</th>
                <th scope='col'> Vie</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{hocStateObjProp.hits}</td>
                { lifeValueProp }
            </tr>
        </tbody>
    </table>
  )
}

CustomTable.propTypes = {
    hocStateObjProp: PropTypes.shape({
        hits: PropTypes.number.isRequired
    }).isRequired,
    lifeValueProp: PropTypes.node.isRequired
}

export default CustomTable