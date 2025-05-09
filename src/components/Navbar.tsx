
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-purple-600">
              Life Pathways Connect
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium">
              Home
            </Link>
            <Link to="/transitions" className="text-gray-700 hover:text-purple-600 font-medium">
              Transitions
            </Link>
            <Link to="/groups" className="text-gray-700 hover:text-purple-600 font-medium">
              Groups
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 font-medium">
              About
            </Link>
          </div>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50" asChild>
              <Link to="/login">Log In</Link>
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/transitions" 
                className="text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Transitions
              </Link>
              <Link 
                to="/groups" 
                className="text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Groups
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 w-full" asChild>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>Log In</Link>
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 w-full" asChild>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
