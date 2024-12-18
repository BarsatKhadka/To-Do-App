import {create} from 'zustand'


export interface useUserType{
    username: string;
    email: string;
    setUsername : (username: string) => void;
    setEmail : (email:string)=> void;
}
export const useUserStore =  create<useUserType>(
    (set) =>({
        username: "hello",
        email : "",
        setUsername: (username: string) => set(() => ({username})),
        setEmail: (email: string) => set(() => ({email}) )

    })
);