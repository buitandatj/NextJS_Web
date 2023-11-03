import { getUser } from '@/api/Api';
import UserAdmin from '@/components/Admin/users/UserAdmin';
import React from 'react';

const AdminUser = async () => {
    const users = await getUser('usersNext')    
    return (
        <div>
        <div className="w-full overflow-auto h-[900px]">
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">Id</th>
                        <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">User Name</th>
                        <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">Email</th>
                        <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">Type</th>
                        <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                </thead>
                <tbody >
                    {users?.map((item: any) => {
                        return (
                            <tr key={item.id}>
                                <UserAdmin item={item} />
                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AdminUser;