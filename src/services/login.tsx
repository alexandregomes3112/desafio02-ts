import { api } from "./api";

export const login = async (email: string, password: string): Promise<void> => {
    const data: any = await api
    
    console.log(`email: email\n data.email: ${data.email}`);
    if (email !== data.email) {
        return alert('Email incorreto');
    }

    alert(`Email: ${email}\nPassword: ${password}`);
}
