const Header = () => {
    return (
      <footer className="lg:fixed lg:bottom-0 w-full">
        <nav className="bg-white border-gray-800 px-6 lg:px-8 py-2.5 dark:bg-white w-full">
          <div className="flex flex-wrap justify-end items-center w-full">
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
      </footer>
    )
  }
  
  export default Header
  