
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Life Pathways Connect</h3>
            <p className="text-gray-300">
              Connecting people through life's most significant transitions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Transitions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">New Parent</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">College Student</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Recent Divorce</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Retirement</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">New to the City</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Our Mission</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Join Our Community</h4>
            <p className="text-gray-300 mb-4">
              Stay updated with new events and groups in your area.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Sign Up Today
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 Life Pathways Connect. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
