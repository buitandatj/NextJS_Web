import React from 'react';
import { MdDoNotTouch } from 'react-icons/md'
const NotFound = () => {
    return (
        <div className="flex  justify-center align-center gap-3 text-3xl font-bold tracking-widest uppercase">
            <MdDoNotTouch />
            no right!
        </div>
    );
};

export default NotFound;