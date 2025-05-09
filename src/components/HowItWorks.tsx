
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Transition",
      description: "Select the life transition you're currently experiencing."
    },
    {
      number: "02",
      title: "Find Local Groups",
      description: "Discover support groups and events in your area."
    },
    {
      number: "03",
      title: "Connect In Person",
      description: "Meet face-to-face with others who understand your journey."
    },
    {
      number: "04",
      title: "Build Relationships",
      description: "Form meaningful connections that help you navigate your transition."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform makes it easy to find real-world connections during life's transitions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-purple-600 font-bold text-4xl mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
