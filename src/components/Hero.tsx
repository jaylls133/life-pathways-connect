
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Connect with Others Going Through Similar Life Changes
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Build meaningful connections with people who understand exactly what you're experiencing.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Find Your Transition Group
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
