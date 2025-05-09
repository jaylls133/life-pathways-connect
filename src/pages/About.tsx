
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Info } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">About Life Pathways Connect</h1>
            <p className="text-xl text-muted-foreground">
              Building meaningful connections during life's transitional moments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-t-4 border-purple-500">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Our Mission</h3>
                <p className="text-muted-foreground text-center">
                  To help people navigate life's transitions by connecting them with others who are experiencing the same changes, creating supportive communities and lasting friendships.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-purple-500">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Heart className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Our Values</h3>
                <p className="text-muted-foreground text-center">
                  We believe in genuine connections, inclusivity, empathy, and the power of shared experiences to transform challenging life transitions into opportunities for growth.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-purple-500">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Info className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Our Story</h3>
                <p className="text-muted-foreground text-center">
                  Founded in 2025, Life Pathways Connect was created after recognizing how isolating major life changes can be, and the need for meaningful in-person connections during these times.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">How We Support Your Journey</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">We Connect You With Similar Journeys</h3>
                <p className="text-muted-foreground">
                  Our platform helps you find others who are experiencing the same life transitions, whether you're becoming a new parent, starting college, going through a divorce, retiring, or moving to a new city.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">We Facilitate Meaningful Events</h3>
                <p className="text-muted-foreground">
                  From coffee meetups to support groups, our community-organized events help you build real connections with people who understand exactly what you're going through.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">We Create Supportive Communities</h3>
                <p className="text-muted-foreground">
                  Join groups specific to your life transition where you can share experiences, get advice, and form friendships that last beyond the transition period.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="italic text-lg">
                "Life changes are easier when we don't have to face them alone."
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
