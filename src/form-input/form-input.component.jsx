import "../form-input/form-input.styles.scss"
import "../form-input/button.styles.scss"

const FormInput = ({label, ...otherProps}) =>{
    return(
        <div className="group">
        <input className="form-input" {...otherProps}/>
        {label && (
            <label className={`${otherProps.value.length ? 'shrink':''} form-input-label`}>{label}</label>
        )}
        
        
        </div>
    )
}


export default FormInput;