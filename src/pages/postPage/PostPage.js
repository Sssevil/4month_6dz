import React, {useState} from 'react';
import {useForm} from "react-hook-form";

function PostPage() {
    const {
        handleSubmit,
        register,
        reset,
        formState: {errors}
    } = useForm()

    const [user,setUser]=useState([])

    const submit =(data)=> {
        setUser([...user, data])
        reset()
    }

    const deleteUser= (index)=>{
        const newUser = [...user.slice(0, index), ...user.slice(index + 1)]
        setUser(newUser)
    }

    return (
        <div>
            <h1>Some form</h1>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" style={errors.name && {backgroundColor:'red'}} placeholder='name' {...register('name', {required:true})}/>
                <input type="text" style={errors.username && {backgroundColor:'red'}} placeholder='username' {...register('username', {required:true})}/>
                <input type="text" style={errors.email && {backgroundColor:'red'}} placeholder='email' {...register('email', {required:true})}/>
                <input type="number" style={errors.phone && {backgroundColor:'red'}} placeholder='phone' {...register('phone', {required:true})}/>
                <input type="text"  placeholder='website' {...register('website')}/>
                <div>
                    <button type="submit">Создать</button>
                    <button type="reset" onClick={()=> setUser([])}>Очистить таблицу</button>
                </div>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>website</th>
                    </tr>
                </thead>
                <tbody>
                {
                    user.length > 0 ?
                        user.map((item,index)=>
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.website}</td>
                                <td><button onClick={()=>deleteUser(index)}>delete</button></td>
                            </tr>
                        ) :
                        <tr>
                             <td>
                                 No Users
                             </td>
                        </tr>
                }
                </tbody>
            </table>
        </div>
    );
}

export default PostPage;