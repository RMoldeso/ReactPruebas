import useForm from "../Hooks/useForm.js";
const FormLoginWithHook = ({titleForm}) => {
    const {formData, handleChange} = useForm({
        username: '',
        email: ''
    });

    const handleSubmit = (e) => {
        event.preventDefault();
        console.log('datos del formulario', formData); 
    };


    return (
        <>
             <h3>{titleForm}</h3>
        <form onSubmit = {handleSubmit}> 
            
            <div>
                <label>

                    Username:
                    <input 
                    type="text" 
                    name="username" 
                    value= {formData.username} 
                    onChange={handleChange}
                    required
                    />

                </label>
            
            </div>

            <div>
                <label>

                    Email:
                    <input 
                    type='email'
                    name='email' 
                    value= {formData.email}  
                    onChange={handleChange}
                    required
                    />

                </label>
            
            </div>
            <button type="submit">Enviar</button>

        </form>

        </>
    );


};

export default FormLoginWithHook;
