import React from "react";
import { useForm } from 'react-hook-form'
export default function App() {
    const { register, handleSubmit, } = useForm()
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstname')} />
            <input type="text" {...register('surname')} />
            <input type="date"{...register('date of birth')} />
            <select  {...register('gender')} >
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <input className="btn" type="submit" />
        </form>
    )
}
