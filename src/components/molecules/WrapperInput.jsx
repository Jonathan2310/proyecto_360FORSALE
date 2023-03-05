import Input from "../atoms/Input";
import Label from "../atoms/Label";
import '../../assets/styles/wrapperInput.css';

function WrapperInput( {msn, type, placeholder} ) {
    return ( 
        <div className="wrapper_input">
            <Label msn={msn} ></Label>
            <Input type={type} placeholder={placeholder} />
        </div>
    );
}

export default WrapperInput;