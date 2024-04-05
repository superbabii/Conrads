import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation, Trans } from 'next-i18next';
import React, { useEffect } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
// import Contactusform from './Contactus';
import Box from '@mui/material/Box';
import { Menu, MenuItem, MenuProps } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';

import { styled, alpha } from '@mui/material/styles';

const StyledMenu = styled((props: MenuProps & { open?: boolean }) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '0px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

const SearchTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#fff',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'transparent',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'transparent',
        },
        '&:hover fieldset': {
            borderColor: 'transparent',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#323639',
        },
    },
});

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About Us', href: '/about-us', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Products', href: '/products', current: false },
    { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {

    const router = useRouter();

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
        setSearchQuery('');
    };

    const handleLanguageSelect = (newLocale: string) => {
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: newLocale })
        handleClose();
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl_search(event.currentTarget);
    };

    const handleSearch = () => {
        console.log('Searching for:', searchQuery);
        handleClose(); // Close the menu after search
        setSearchQuery('');
    };

    const handleSearchKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && searchQuery !== '') {
            handleSearch();
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        const debounce = (fn: Function) => {
            let frame: number;
            return (...params: any[]) => {
                if (frame) {
                    cancelAnimationFrame(frame);
                }
                frame = requestAnimationFrame(() => {
                    fn(...params);
                });
            }
        };

        const storeScroll = () => {
            document.documentElement.dataset.scroll = window.scrollY.toString();
        }

        document.addEventListener('scroll', debounce(storeScroll), { passive: true });

        storeScroll();
    }, [])

    const { t } = useTranslation('header')
    return (
        <Disclosure as="nav" className="navbar">
            <div className="mx-auto max-w-7xl p-3 md:p-2 lg:px-3">
                <div className="relative flex h-12 sm:h-20 items-center">
                    <div className="flex flex-1 items-center justify-between">

                        {/* LOGO */}

                        <div className="flex flex-shrink-0 items-center">
                            <div className='block lg:hidden pr-3'>
                                <Bars3Icon className="block h-10 w-10 text-white" aria-hidden="true" onClick={() => setIsOpen(true)} />
                            </div>
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
                                        {t(item.name)}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                <IconButton
                                    onClick={handleAccountClick}
                                    size="small"
                                    sx={{
                                        ml: 2,
                                        '&:hover': {
                                            bgcolor: 'rgba(39, 40, 43, 0.7)',
                                        },
                                    }}
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
                                    elevation: 2,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 8px 4px rgba(0,0,0,0.5))',
                                        mt: 1,
                                        backgroundColor: 'rgba(39, 40, 43, 0.9)',
                                        color: 'white',
                                    },
                                }}
                                BackdropProps={{
                                    sx: { backdropFilter: 'blur(8px)' }, // Add blur effect to the backdrop
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <Link href={"/dashboard"}>
                                    <MenuItem onClick={handleClose} sx={{
                                        '&:hover': {
                                            textDecoration: "underline",
                                            color: "white",
                                        },
                                    }}>
                                        {t('My Account')}
                                    </MenuItem>
                                </Link>
                                <Divider variant="middle" component="li" style={{ borderBottom: "1px solid #323639" }} />
                                <Link href={"/signup"}>
                                    <MenuItem onClick={handleClose} sx={{
                                        '&:hover': {
                                            textDecoration: "underline",
                                            color: "white",
                                        },
                                    }}>
                                        {t('Create Account')}
                                    </MenuItem>
                                </Link>
                            </Menu>
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                <IconButton
                                    onClick={handlelanguageClick}
                                    size="small"
                                    sx={{
                                        ml: 2,
                                        '&:hover': {
                                            bgcolor: 'rgba(39, 40, 43, 0.7)',
                                        },
                                    }}
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
                                    elevation: 2,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 8px 4px rgba(0,0,0,0.5))',
                                        mt: 1,
                                        backgroundColor: 'rgba(39, 40, 43, 0.9)',
                                        color: 'white',
                                    },
                                }}
                                BackdropProps={{
                                    sx: { backdropFilter: 'blur(8px)' }, // Add blur effect to the backdrop
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={() => handleLanguageSelect('en')} sx={{
                                    '&:hover': {
                                        textDecoration: "underline",
                                        color: "white",
                                    },
                                }}>
                                    English
                                </MenuItem>
                                <MenuItem onClick={() => handleLanguageSelect('de')} sx={{
                                    '&:hover': {
                                        textDecoration: "underline",
                                        color: "white",
                                    },
                                }}>
                                    Deutsch
                                </MenuItem>
                            </Menu>
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{
                                        ml: 2,
                                        '&:hover': {
                                            bgcolor: 'rgba(39, 40, 43, 0.7)',
                                        },
                                    }}
                                    aria-controls={anchorEl_search ? 'search-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={anchorEl_search ? 'true' : undefined}
                                >
                                    <SearchIcon style={{ color: 'white' }} />
                                </IconButton>
                            </Box>
                            <StyledMenu
                                anchorEl={anchorEl_search}
                                id="search-menu"
                                open={Boolean(anchorEl_search)}
                                onClose={handleClose}
                                style={{ padding: '0px !important' }}
                                PaperProps={{
                                    elevation: 2,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 8px 4px rgba(0,0,0,0.5))',
                                        mt: 1,
                                        backgroundColor: 'rgba(39, 40, 43, 0.9)',
                                        color: 'white',
                                        padding: '0px !important',
                                        borderRadius: '4px',
                                    },
                                }}
                                BackdropProps={{
                                    sx: { backdropFilter: 'blur(8px)' },
                                }}
                            >
                                <SearchTextField
                                    label={t("Search")}
                                    value={searchQuery}
                                    id="custom-css-outlined-input"
                                    onChange={handleInputChange}
                                    onKeyPress={handleSearchKeyPress}
                                    fullWidth
                                    InputProps={{
                                        style: {
                                            color: 'white',
                                        },
                                    }}
                                    InputLabelProps={{
                                        style: {
                                            color: 'white',
                                        },
                                    }}
                                />
                            </StyledMenu>

                        </div>
                    </div>

                    {/* DRAWER LINKS DATA */}

                    <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                        <Drawerdata />
                    </Drawer>
                </div>
            </div>
        </Disclosure>
    )
}

export default Header;
