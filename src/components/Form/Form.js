import { useState } from 'react';
import './Form.css';

const Form = (props) => {
    const [value, setValue] = useState("")

    return (
        <form className='form' onSubmit={e => {
            e.preventDefault();
            props.putTodo(value);
            setValue('');;
        }}>
            <input type="text"
                placeholder='Add text...'
                className='input'
                value={value}
                onChange={e => setValue(e.target.value)} />
                <button className='btn' onChange={e => setValue(e.target.value)}>Add</button>
        </form>
    );
}

export default Form;