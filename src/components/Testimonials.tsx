
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  transition: string;
}

const Testimonial = ({ quote, name, role, transition }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex-grow">
          <div className="text-4xl text-purple-300 mb-4">"</div>
          <p className="text-lg mb-6 italic">{quote}</p>
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
          <p className="text-sm text-purple-600 mt-1">{transition}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "After moving to a new city, I felt isolated until I found this platform. Now I have a whole group of friends who helped me settle in.",
      name: "Michael Chen",
      role: "Software Developer",
      transition: "New to the City"
    },
    {
      quote: "Becoming a new parent was overwhelming, but connecting with other first-time parents made me feel less alone and more confident.",
      name: "Sarah Johnson",
      role: "Marketing Manager",
      transition: "New Parent"
    },
    {
      quote: "The retirement transition groups helped me find purpose and community after leaving my 30-year career. I've made amazing friends.",
      name: "Robert Miller",
      role: "Retired Teacher",
      transition: "Retirement"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real connections that have made a difference in people's lives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              transition={testimonial.transition}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
