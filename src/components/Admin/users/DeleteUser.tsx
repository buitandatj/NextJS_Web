'use client'
import { deleteUser, instance } from "@/api/Api";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from 'react';
import { AiFillDelete } from 'react-icons/ai'

const DeleteUser = (props: { userId: string | number }) => {
    const router = useRouter();
    const userId = props.userId
    const handleDelete = async (userId: string | number | any) => {
        const userConfirmed = confirm(
            "Are you sure you want to delete this user?"
        );
        if (userConfirmed) {
            try {
                await deleteUser(userId);
                router.refresh()
            } catch (error) {
                console.log("delete User error", error);
            }
        }
    }
    return (
        <button onClick={() => handleDelete(userId)}>
            <AiFillDelete />
        </button>
    );
};

export default DeleteUser;