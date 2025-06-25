import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (

        <Link href="/" className="flex items-center ">
            <div className="px-3  w-40 flex items-center justify-center">
                <Image
                    src="/"
                    alt="Logo"
                    width={40}
                    height={40}
                    className='w-full h-10 object-cover'
                />
            </div>
        </Link>
    );
};

export default Logo;