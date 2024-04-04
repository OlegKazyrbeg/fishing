import './primaryButton.scss'

const PrimaryButton = ({ children, onClick }) => {
    return ( 
        <button onClick={onClick} type='button' className="primary-button">{children}</button>
     );
}
 
export default PrimaryButton;