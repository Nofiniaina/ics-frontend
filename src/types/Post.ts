import type { User } from "./User";

export interface Post {
    _id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}