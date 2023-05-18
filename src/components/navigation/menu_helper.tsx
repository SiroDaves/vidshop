import { useRouter } from 'next/router'
import { ReactNode, useState, useEffect, useRef } from 'react'
import { FaPlus, FaUserCircle, FaSignOutAlt, FaInbox, FaShoppingCart } from 'react-icons/fa'

import { useAuth } from '@/context/AuthContext'

interface BadgeIconProps {
    icon: ReactNode;
    badgeContent?: number;
    onClick: () => void;
}

interface MenuItemProps {
    icon: ReactNode;
    title?: string;
    onClick: () => void;
}

export const BadgeIcon = ({ icon, onClick, badgeContent }: BadgeIconProps) => {
    return (
        <button onClick={onClick}
            className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-sky-500 rounded-full hover:bg-blue-800 focus:ring-4 dark:hover:bg-blue-700 border-2 border-white mx-1 p-1">
            {icon}
            {badgeContent && (<div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -right-2">{badgeContent}</div>
            )}
        </button>
    );
};


export const MenuItem = ({ icon, onClick, title }: MenuItemProps) => {
    return (
        <div className="py-1" role="none" onClick={onClick}>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0"> {title} </a>
        </div>
    );
};

export const UserDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { logoutUser } = useAuth()
    const router = useRouter()

    function goToProfile() {
        router.push('/profile')
    }    

    function goToLogout() {
        logoutUser()
        router.push('/')
    }    

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">

            <BadgeIcon
                icon={<FaUserCircle className="text-2xl text-white" />}
                onClick={toggleDropdown}
            />
            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                    <MenuItem icon='' title='My Profile' onClick={goToProfile} />
                    <MenuItem icon='' title='Log Out' onClick={goToLogout} />
                </div>
            )}
        </div>
    );
};