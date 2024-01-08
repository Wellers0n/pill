const Header = () => {
    return (
      <header>
        <nav className="bg-white border-gray-800 px-4 lg:px-6 py-2.5 dark:bg-white w-screen">
          <div className="flex flex-wrap justify-start items-center w-full">
            <a href="https://www.linkedin.com/company/pillfarma/" target="_blank" className="flex items-center">
              <img
                src="/pill-logo.png"
                className="h-6 sm:h-9"
                alt="Pill Logo"
              />
              <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-gray-800">
              Farmácia Digital
              </span>
            </a>
          </div>
        </nav>
      </header>
    )
  }
  
  export default Header
  