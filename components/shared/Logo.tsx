import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (

        <Link href="/" className="flex items-center ">
            <div className="px-3  w-auto  flex items-center justify-center">
                <Image
                    src="/logo.jpeg"
                    alt="Logo"
                    width={60}
                    height={60}
                    className='w-30 h-15 '
                />
            </div>
        </Link>
    );
};

export default Logo;