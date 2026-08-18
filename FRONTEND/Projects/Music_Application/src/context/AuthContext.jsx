import { createContext, useState } from "react";

export const AuthContextData = createContext()

export const AuthContext = ({children})=>{

    const registerUser = (newUser)=>{
        const users = JSON.parse(localStorage.getItem('users')) || []

        const alreadyExists = users.find((user)=>{
            return user.email === newUser.email
        })

        if(alreadyExists){
            return {success: false, message: 'User already exists'}
        }

        const updateUser = [...users, newUser]

        localStorage.setItem('users', JSON.stringify(updateUser))

        return {success: true, message: 'User registered successfully'}
    }

    return <AuthContextData.Provider value = {{registerUser}}>{children}</AuthContextData.Provider>
}