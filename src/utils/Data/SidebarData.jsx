import { HiOutlineBuildingLibrary, HiOutlineChatBubbleLeftRight, HiOutlineHome, HiOutlineMoon, HiOutlineSun, HiUserGroup } from 'react-icons/hi2';
import { IoLibraryOutline } from 'react-icons/io5';
import { FaRegUser,FaChalkboardTeacher } from 'react-icons/fa'

export const menuItems = [
    {
        icon: <HiOutlineHome />,
        title: "Dashboard",
        link: '/dashboard',
        type: 'item'
    },
    {
        icon: <FaRegUser />,
        title: "Users",
        link: '/users',
        type: 'item'
    },
];

export const checkActiveMenu = (link, activePath) => {
    if (link === activePath)
        return 'text-indigo-600 bg-indigo-200';
    return 'text-gray-400'
}

export const modeItems = [
    { icon: <HiOutlineSun />, title: 'Light' },
    { icon: <HiOutlineMoon />, title: 'Dark' }
]