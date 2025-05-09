
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const LocationSearch = () => {
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for events near:", location);
    // In a real app, this would trigger a search with the location
  };

  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Find Events Near You</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Enter your location to discover meetups and support groups in your area.
          </p>
          
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="text"
              placeholder="Enter your city or zip code"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-grow text-base h-12"
              required
            />
            <Button type="submit" className="h-12 px-8">
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-muted-foreground">
            <button 
              type="button" 
              className="text-purple-600 hover:underline"
              onClick={() => console.log("Use current location clicked")}
            >
              Use my current location
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationSearch;
