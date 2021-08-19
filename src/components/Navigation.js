import React, { useState, useContext, useEffect } from 'react';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import routes from '../helpers/routes';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Mat Icons
import PeopleIcon from '@material-ui/icons/People';
import BurstModeIcon from '@material-ui/icons/BurstMode';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CreateIcon from '@material-ui/icons/Create';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const navigation = [
    { name: 'Users', href: routes.users, current: false },
    { name: 'Image Users', href: routes.photosWall, current: false },
    { name: 'My Images', href: routes.myPhotos, current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navigation = props => {

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    {open ? (
                                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                {/* Logo */}
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                    className="block lg:hidden h-8 w-auto"
                                    src="/img/logo.png"
                                    alt="Workflow"
                                    />
                                    <img
                                    className="hidden lg:block h-8 w-auto"
                                    src="/img/logoName.png"
                                    alt="Workflow"
                                    />
                                </div>
                            </div>
                            {/* Options Desktop */}
                            <div className="hidden sm:block sm:ml-6">
                                <Nav>
                                    <div className="mr-8">
                                        <Link to={routes.users}>
                                            <PeopleIcon className="text-white w-9"/>
                                        </Link>
                                    </div>
                                    <div className="mr-8">
                                        <Link to={routes.photosWall}>                        
                                            <AppsIcon className="text-white"/>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to={routes.myPhotos}>                        
                                            <BurstModeIcon className="text-white"/>
                                        </Link>
                                    </div>
                                </Nav>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            {/* Photo Profile */}
                                            <img className="h-8 w-8 rounded-full" src="/img/profile.jpg" alt=""/>
                                            <label className="text-white text-base my-auto ml-2">UserName</label>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                    >
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <NavDropdown.Item href={routes.account} >                                
                                            <PersonIcon/>My Profile
                                        </NavDropdown.Item>
                                        <NavDropdown.Item >
                                            <ExitToAppIcon/>Sign Out
                                        </NavDropdown.Item>
                                    </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block px-3 py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default Navigation;