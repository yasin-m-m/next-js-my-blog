const { default: Link } = require("next/link");

import React from 'react'

const Header = () => {
  return (
    <div>
    <header className="bg-white shadow-lg">
    <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/"><h1 className="text-2xl">Blog</h1></Link>
        <nav className="space-x-4">
            <Link href="/" className="text-blue-500">Home</Link>
            <Link href="/about" className="text-blue-500">About</Link>
            <Link href="/contact" className="text-blue-500">Contact</Link>
        </nav>
    </div>
</header>
</div>
  )
}

export default Header