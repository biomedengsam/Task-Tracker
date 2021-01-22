import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <div>
            <button className='btn' style={{ backgroundColor: color }} onClick={onClick}>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'blue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}
export default Button
