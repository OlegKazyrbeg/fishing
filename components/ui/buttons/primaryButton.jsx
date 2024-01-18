import './primaryButton.scss'

const PrimaryButton = ({ children }) => {
    return ( 
        <button className="primary-button">{children}</button>
     );
}
 
export default PrimaryButton;