
import React from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Baby, GraduationCap, Heart, Palmtree, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TransitionSection = ({ 
  title, 
  description, 
  icon, 
  challenges, 
  resources 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  challenges: string[]; 
  resources: Array<{ title: string; description: string }> 
}) => (
  <div className="space-y-8">
    <div className="flex flex-col md:flex-row gap-6 items-center">
      <div className="bg-purple-100 p-6 rounded-full">
        {icon}
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
    
    <div>
      <h3 className="text-xl font-semibold mb-4">Common Challenges</h3>
      <ul className="space-y-2 list-disc pl-6">
        {challenges.map((challenge, index) => (
          <li key={index} className="text-muted-foreground">{challenge}</li>
        ))}
      </ul>
    </div>
    
    <div>
      <h3 className="text-xl font-semibold mb-4">Helpful Resources</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resources.map((resource, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-1">{resource.title}</h4>
              <p className="text-sm text-muted-foreground">{resource.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    
    <div className="flex justify-center pt-4">
      <Button className="bg-purple-600 hover:bg-purple-700">
        Find {title} Groups Near You
      </Button>
    </div>
  </div>
);

const Transitions = () => {
  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">Life Transitions</h1>
            <p className="text-xl text-muted-foreground">
              Explore resources and support for various life transitions
            </p>
          </div>
          
          <Tabs defaultValue="new-parent" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="new-parent">New Parent</TabsTrigger>
              <TabsTrigger value="college-student">College Student</TabsTrigger>
              <TabsTrigger value="recent-divorce">Recent Divorce</TabsTrigger>
              <TabsTrigger value="retirement">Retirement</TabsTrigger>
              <TabsTrigger value="new-to-city">New to City</TabsTrigger>
            </TabsList>
            
            <TabsContent value="new-parent" className="pt-6">
              <TransitionSection
                title="New Parent"
                description="Navigating the challenging yet rewarding journey of parenthood with support from others who understand."
                icon={<Baby className="h-12 w-12 text-purple-600" />}
                challenges={[
                  "Adjusting to sleep deprivation and new routines",
                  "Managing postpartum physical and emotional changes",
                  "Balancing career and parenting responsibilities",
                  "Navigating relationship changes with your partner",
                  "Dealing with unsolicited advice and parenting pressures"
                ]}
                resources={[
                  {
                    title: "New Parents Support Groups",
                    description: "Weekly meetups with other parents of infants to share experiences and advice."
                  },
                  {
                    title: "Parent-Baby Activities",
                    description: "Structured activities designed for parents to bond with their babies while connecting with others."
                  },
                  {
                    title: "Parenting Workshops",
                    description: "Expert-led sessions on infant care, development, and parenting strategies."
                  },
                  {
                    title: "Parent Mentorship Program",
                    description: "Get paired with an experienced parent who can provide guidance and support."
                  }
                ]}
              />
            </TabsContent>
            
            <TabsContent value="college-student" className="pt-6">
              <TransitionSection
                title="College Student"
                description="Embarking on your academic journey while building independence and forming new social connections."
                icon={<GraduationCap className="h-12 w-12 text-purple-600" />}
                challenges={[
                  "Managing academic expectations and workload",
                  "Living independently for the first time",
                  "Building new social networks and friendships",
                  "Balancing studies, work, and social life",
                  "Dealing with homesickness and adapting to a new environment"
                ]}
                resources={[
                  {
                    title: "Freshman Connect Groups",
                    description: "Weekly meetups organized by major or interests to help new students form connections."
                  },
                  {
                    title: "Study Circles",
                    description: "Collaborative study groups that combine academic support with social connection."
                  },
                  {
                    title: "College Life Workshops",
                    description: "Sessions covering essential skills from time management to cooking on a budget."
                  },
                  {
                    title: "Peer Mentorship Program",
                    description: "Connect with upperclassmen who can provide guidance on navigating college life."
                  }
                ]}
              />
            </TabsContent>
            
            <TabsContent value="recent-divorce" className="pt-6">
              <TransitionSection
                title="Recent Divorce"
                description="Rebuilding your life and identity after divorce with support from those who understand the journey."
                icon={<Heart className="h-12 w-12 text-purple-600" />}
                challenges={[
                  "Processing grief and emotional healing",
                  "Establishing financial independence",
                  "Co-parenting effectively (if applicable)",
                  "Rebuilding social networks and support systems",
                  "Rediscovering personal identity and future goals"
                ]}
                resources={[
                  {
                    title: "Divorce Recovery Groups",
                    description: "Supportive gatherings focused on emotional healing and moving forward after divorce."
                  },
                  {
                    title: "Single Parents Circle",
                    description: "Special support for those navigating parenthood after divorce."
                  },
                  {
                    title: "New Beginnings Workshops",
                    description: "Practical sessions on financial planning, dating after divorce, and building confidence."
                  },
                  {
                    title: "Social Events for Divorced Individuals",
                    description: "Low-pressure social gatherings to build new friendships in a supportive environment."
                  }
                ]}
              />
            </TabsContent>
            
            <TabsContent value="retirement" className="pt-6">
              <TransitionSection
                title="Retirement"
                description="Embracing this new chapter of life with purpose, community, and exploration."
                icon={<Palmtree className="h-12 w-12 text-purple-600" />}
                challenges={[
                  "Adjusting to a new daily routine without work structure",
                  "Finding purpose and meaningful activities",
                  "Managing financial changes",
                  "Maintaining social connections beyond the workplace",
                  "Addressing health and wellness needs"
                ]}
                resources={[
                  {
                    title: "Retirement Transition Groups",
                    description: "Connect with others newly retired to share experiences and advice."
                  },
                  {
                    title: "Encore Career Exploration",
                    description: "Workshops for those interested in part-time work, consulting, or volunteering."
                  },
                  {
                    title: "Active Retirement Social Clubs",
                    description: "Groups organized around activities like hiking, book discussions, travel, and more."
                  },
                  {
                    title: "Retirement Planning Workshops",
                    description: "Practical sessions on financial management, healthcare planning, and lifestyle adjustments."
                  }
                ]}
              />
            </TabsContent>
            
            <TabsContent value="new-to-city" className="pt-6">
              <TransitionSection
                title="New to the City"
                description="Finding your place and building community in your new location with fellow newcomers."
                icon={<MapPin className="h-12 w-12 text-purple-600" />}
                challenges={[
                  "Getting oriented to new neighborhoods and services",
                  "Building a social network from scratch",
                  "Finding community and belonging",
                  "Establishing new routines and favorite spots",
                  "Missing familiar places and people from your previous home"
                ]}
                resources={[
                  {
                    title: "Newcomers Welcome Groups",
                    description: "Regular meetups designed specifically to help newcomers connect with each other and locals."
                  },
                  {
                    title: "Neighborhood Introduction Tours",
                    description: "Guided tours to help you discover local highlights, services, and hidden gems."
                  },
                  {
                    title: "Interest-Based Meetups",
                    description: "Groups organized around hobbies and interests to help you meet like-minded people."
                  },
                  {
                    title: "City Transition Workshops",
                    description: "Practical information on local resources, transportation, housing, and more."
                  }
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Transitions;
