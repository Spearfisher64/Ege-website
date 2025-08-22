const Header = () => {
    return (
        <header className="flex justify-between items-center p-6 md:p-10">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">Ege Olgun</h1>
            <nav>
                <ul className="flex space-x-8 text-gray-300">
                    <li><a href="#home" className="hover:text-primary transition">Home</a></li>
                    <li><a href="#skills" className="hover:text-primary transition">Skills</a></li>
                    <li><a href="#projects" className="hover:text-primary transition">Projects</a></li>
                    <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header