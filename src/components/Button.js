import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
    return (
        <div>
            <button className='btn' style={{ backgroundColor: color }}>{text}</button>
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
