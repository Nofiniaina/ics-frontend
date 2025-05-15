export interface User {
    _id: string;
    username: string;
    password: string;
    email: string;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;   
}