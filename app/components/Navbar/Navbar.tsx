import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
// import Contactusform from './Contactus';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '#home-section', current: false },
    { name: 'About Us', href: '#exchange-section', current: false },
    { name: 'Features', href: '#features-section', current: false },
    { name: 'Testimols', href: '#faq-section', current: false },
    { name: 'Products', href: '#product-section', current: false },
    { name: 'Contact', href: '#contact-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    const [anchorEl_account, setAnchorEl_account] = React.useState<HTMLButtonElement | null>(null);
    const [anchorEl_language, setAnchorEl_language] = React.useState<HTMLButtonElement | null>(null);
    const [anchorEl_search, setAnchorEl_search] = React.useState<HTMLButtonElement | null>(null);
    const [searchQuery, setSearchQuery] = React.useState('');

    const open_account = Boolean(anchorEl_account);
    const open_language = Boolean(anchorEl_language);
    const handleAccountClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl_account(event.currentTarget);
    };
    const handlelanguageClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl_language(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl_account(null);
        setAnchorEl_language(null);
        setAnchorEl_search(null);
    };

    

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl_search(event.currentTarget);
    };

    const handleSearch = () => {
        // Perform search operation with searchQuery
        console.log('Searching for:', searchQuery);
        // You can add your search logic here
        handleClose(); // Close the menu after search
        setSearchQuery('');
    };

    const handleSearchKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter' && searchQuery !== '') {
            handleSearch();
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLButtonElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-2 lg:px-3">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                                <Link href="/">
                                    <img
                                        className="block h-10 w-20px lg:hidden"
                                        src={'/images/Logo/logo.png'}
                                        alt="Conrards-Logo"
                                    />
                                    <img
                                        className="hidden h-48px w-48px lg:block"
                                        src={'/images/Logo/logo.png'}
                                        alt="Conrards-Logo"
                                    />
                                </Link>
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center border-right ">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900' : 'navlinks text-white hover:text-offwhite hover-underline',
                                                'px-3 py-4 rounded-md text-md font-normal'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="hidden lg:flex items-center border-right ">
                                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                    <IconButton
                                        onClick={handleAccountClick}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={open_account ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open_account ? 'true' : undefined}
                                    >
                                        <PersonIcon style={{ color: 'white' }} />
                                    </IconButton>
                                </Box>
                                <Menu
                                    anchorEl={anchorEl_account}
                                    id="account-menu"
                                    open={open_account}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&::before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    {/* <MenuItem onClick={handleClose}>
                                        <Avatar /> Profile
                                    </MenuItem> */}
                                    <MenuItem onClick={handleClose}>
                                        My account
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleClose}>
                                        Create Account
                                    </MenuItem>
                                    {/* <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        Add another account
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem> */}
                                </Menu>
                                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                    <IconButton
                                        onClick={handlelanguageClick}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={open_language ? 'language-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open_language ? 'true' : undefined}
                                    >
                                        <LanguageIcon style={{ color: 'white' }} />
                                    </IconButton>
                                </Box>
                                <Menu
                                    anchorEl={anchorEl_language}
                                    id="language-menu"
                                    open={open_language}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&::before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        English
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        Germany
                                    </MenuItem>
                                </Menu>
                                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={anchorEl_search ? 'search-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={anchorEl_search ? 'true' : undefined}
                                    >
                                        <SearchIcon style={{ color: 'white' }} />
                                    </IconButton>
                                </Box>
                                <Menu
                                    anchorEl={anchorEl_search}
                                    id="search-menu"
                                    open={Boolean(anchorEl_search)}
                                    onClose={handleClose}
                                >
                                    <MenuItem>
                                        <TextField
                                            placeholder="Search..."
                                            value={searchQuery}
                                            onChange={handleInputChange}
                                            onKeyPress={handleSearchKeyPress}
                                            fullWidth
                                        />
                                    </MenuItem>
                                </Menu>

                            </div>
                            {/* <button className='hidden lg:flex justify-end text-xl font-semibold py-4 px-6 lg:px-12 navbutton text-white'>
                                Connect Wallet
                            </button> */}
                            {/* <Contactusform /> */}
                        </div>


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
