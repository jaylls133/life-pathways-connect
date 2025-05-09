
import { 
  GraduationCap, 
  Baby, 
  Heart, 
  Palmtree, 
  MapPin,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface TransitionCategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TransitionCategory = ({ icon, title, description }: TransitionCategoryProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6 text-center">
        <div className="mx-auto mb-4 bg-purple-100 w-16 h-16 flex items-center justify-center rounded-full text-purple-600">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button variant="outline" size="sm" className="group">
          Explore 
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

const TransitionCategories = () => {
  const categories = [
    {
      icon: <Baby className="h-8 w-8" />,
      title: "New Parent",
      description: "Connect with other parents navigating this exciting new chapter."
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "College Student",
      description: "Meet fellow students adjusting to campus life and academics."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Recent Divorce",
      description: "Find support from others who understand this challenging transition."
    },
    {
      icon: <Palmtree className="h-8 w-8" />,
      title: "Retirement",
      description: "Explore this new phase of life with peers sharing the journey."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "New to the City",
      description: "Get connected with locals and fellow newcomers in your area."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Find Your Life Transition</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the transition you're experiencing to connect with others on the same journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <TransitionCategory
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransitionCategories;
