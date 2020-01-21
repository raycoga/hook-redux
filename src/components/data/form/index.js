import React, { useState, useCallback } from 'react';

/* redux-hook */
import { useSelector, useDispatch } from 'react-redux'


const Index = () => {
    /* ----------------------------------VARIABLES REDUX------------------- */
    /* Se debera de importar el dispatch para poder ejecutar funciones sobre el redux */
    const dispatch = useDispatch();
    const { strings } = useSelector(state => state)/* Aca se llama al state de Redux */

    /* Funciones */
    const submitFormOne = useCallback(values => dispatch({ type: 'SUBMIT_FORM', values }), [dispatch]);/* Esta es una funcion */

    /* ----------------------------------VARIABLES REDUX -------------------*/

    const [values, setvalues] = useState({
        data: ''
    })



    const handleChange = (e) => {
        setvalues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault()
        submitFormOne(values)
        setvalues({ ...values, data: '' })
    }

    return (
        <form onSubmit={onSubmit}>
            <h1>Write your post</h1>
            <input type="text" name='data' required value={values.data} placeholder='add something' onChange={e => handleChange(e)} />
            <button>submit</button>
        </form>
    );
};


export default Index;