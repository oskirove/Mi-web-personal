import React from 'react'
import MyAvatar from './MyAvatar'

function Header() {
    return (
        <header className="top-0 z-50">
            <nav className="flex items-center mx-auto">
                <div className="flex-1 flex items-center justify-between space-x-4">
                    <p className="text-xl font-bold">oskirove.</p>
                    <MyAvatar />
                </div>
            </nav>
        </header>
    )
}

export default Header