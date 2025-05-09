
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Baby, GraduationCap, Heart, Palmtree, MapPin, Search, Users } from "lucide-react";

type GroupData = {
  id: number;
  name: string;
  type: string;
  location: string;
  members: number;
  description: string;
  image: string;
};

const GroupCard = ({ group }: { group: GroupData }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "new-parent":
        return <Baby className="h-5 w-5" />;
      case "college-student":
        return <GraduationCap className="h-5 w-5" />;
      case "recent-divorce":
        return <Heart className="h-5 w-5" />;
      case "retirement":
        return <Palmtree className="h-5 w-5" />;
      case "new-to-city":
        return <MapPin className="h-5 w-5" />;
      default:
        return <Users className="h-5 w-5" />;
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-video relative bg-gradient-to-r from-purple-200 to-purple-100">
        {/* This would be an actual image in a real app */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-purple-700 text-2xl font-bold">{group.name.charAt(0)}</span>
        </div>
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{group.name}</h3>
          <span className="flex items-center text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
            {getIcon(group.type)}
            <span className="ml-1">{group.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
          </span>
        </div>
        <div className="text-sm text-muted-foreground mb-2 flex items-center">
          <MapPin className="h-3.5 w-3.5 mr-1" />
          {group.location}
        </div>
        <div className="text-sm text-muted-foreground mb-3 flex items-center">
          <Users className="h-3.5 w-3.5 mr-1" />
          {group.members} members
        </div>
        <p className="text-sm line-clamp-2 mb-4">{group.description}</p>
        <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50">
          View Group
        </Button>
      </CardContent>
    </Card>
  );
};

const Groups = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedType, setSelectedType] = React.useState<string[]>([]);
  
  // Sample groups data
  const groups: GroupData[] = [
    {
      id: 1,
      name: "New Parent Support Circle",
      type: "new-parent",
      location: "San Francisco, CA",
      members: 48,
      description: "A supportive community for new parents to share experiences, advice, and form friendships during this life-changing transition.",
      image: "new-parents.jpg"
    },
    {
      id: 2,
      name: "Freshman Connect",
      type: "college-student",
      location: "Boston, MA",
      members: 124,
      description: "Helping first-year students navigate campus life, academics, and social connections during their college transition.",
      image: "college.jpg"
    },
    {
      id: 3,
      name: "Divorce Recovery Network",
      type: "recent-divorce",
      location: "Chicago, IL",
      members: 36,
      description: "A safe space for people going through divorce to find emotional support, practical advice, and new social connections.",
      image: "divorce.jpg"
    },
    {
      id: 4,
      name: "Retirement Enthusiasts",
      type: "retirement",
      location: "Phoenix, AZ",
      members: 72,
      description: "Exploring the opportunities of retirement together through social activities, learning, and sharing this new chapter of life.",
      image: "retirement.jpg"
    },
    {
      id: 5,
      name: "Seattle Newcomers",
      type: "new-to-city",
      location: "Seattle, WA",
      members: 93,
      description: "Helping those new to Seattle discover the city, make friends, and quickly feel at home in their new environment.",
      image: "city.jpg"
    },
    {
      id: 6,
      name: "Twin Cities Young Parents",
      type: "new-parent",
      location: "Minneapolis, MN",
      members: 54,
      description: "Connecting young parents in the Twin Cities area for playdates, parent discussions, and mutual support.",
      image: "young-parents.jpg"
    },
    {
      id: 7,
      name: "Graduate Student Alliance",
      type: "college-student",
      location: "Austin, TX",
      members: 67,
      description: "Supporting graduate students through the unique challenges of advanced education and research.",
      image: "grad-students.jpg"
    },
    {
      id: 8,
      name: "New Chapter After Divorce",
      type: "recent-divorce",
      location: "Denver, CO",
      members: 29,
      description: "Focus on personal growth and new beginnings after divorce through social activities and mutual support.",
      image: "new-chapter.jpg"
    },
  ];
  
  const filteredGroups = groups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         group.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType.length === 0 || selectedType.includes(group.type);
    
    return matchesSearch && matchesType;
  });

  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">Find Your Support Group</h1>
            <p className="text-xl text-muted-foreground">
              Connect with others going through similar life transitions
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-10 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search groups by name or description..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
            
            <div className="flex justify-center">
              <ToggleGroup 
                type="multiple"
                className="justify-center flex-wrap"
                value={selectedType}
                onValueChange={setSelectedType}
              >
                <ToggleGroupItem value="new-parent" aria-label="Toggle new parent">
                  <Baby className="mr-2 h-4 w-4" />
                  New Parent
                </ToggleGroupItem>
                <ToggleGroupItem value="college-student" aria-label="Toggle college student">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  College Student
                </ToggleGroupItem>
                <ToggleGroupItem value="recent-divorce" aria-label="Toggle recent divorce">
                  <Heart className="mr-2 h-4 w-4" />
                  Recent Divorce
                </ToggleGroupItem>
                <ToggleGroupItem value="retirement" aria-label="Toggle retirement">
                  <Palmtree className="mr-2 h-4 w-4" />
                  Retirement
                </ToggleGroupItem>
                <ToggleGroupItem value="new-to-city" aria-label="Toggle new to city">
                  <MapPin className="mr-2 h-4 w-4" />
                  New to City
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
          
          {/* Groups Grid */}
          {filteredGroups.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGroups.map((group) => (
                <GroupCard key={group.id} group={group} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-lg text-muted-foreground">No groups found matching your criteria.</p>
              <Button variant="link" className="mt-2 text-purple-600" onClick={() => {setSearchTerm(''); setSelectedType([])}}>
                Clear filters
              </Button>
            </div>
          )}
          
          {/* Create Group CTA */}
          <div className="mt-16 text-center p-8 bg-purple-50 rounded-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-3">Don't see what you're looking for?</h2>
            <p className="text-muted-foreground mb-6">
              Create your own group and connect with others going through similar life transitions.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Users className="mr-2 h-4 w-4" />
              Create a Group
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Groups;
