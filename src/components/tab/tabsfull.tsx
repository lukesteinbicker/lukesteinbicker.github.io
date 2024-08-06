import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../card"
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "./tab"
  import {
      ScrollArea, ScrollBar
  } from "../scrollable"
import { useEffect, useState } from "react";

interface Item {
    id: number;
    title: string;
    description: string;
    content: string;
  }

export default function TabsFull () {

    const [educationentries, seteducationentries] = useState<Item[]>([])
    const [experienceentries, setexperienceentries] = useState<Item[]>([])
    const [projectsentries, setprojectsentries] = useState<Item[]>([])

    useEffect(() => {
        fetch('/education.json')
          .then((response) => response.json())
          .then((data) => seteducationentries(data))
          .catch((error) => console.error('Error fetching education data:', error));

        fetch('/experience.json')
          .then((response) => response.json())
          .then((data) => setexperienceentries(data))
          .catch((error) => console.error('Error fetching experience data:', error));

        fetch('/projects.json')
          .then((response) => response.json())
          .then((data) => setprojectsentries(data))
          .catch((error) => console.error('Error fetching projects data:', error));
        
      }, []);
      
return (
<Tabs defaultValue="about">
						<TabsList className="w-full">
						  <TabsTrigger value="about">About</TabsTrigger>
						  <TabsTrigger value="education">Education</TabsTrigger>
						  <TabsTrigger value="experience">Experience</TabsTrigger>
						  <TabsTrigger value="projects">Projects</TabsTrigger>
						</TabsList>
						<TabsContent value="about">
						<ScrollArea className="fade-bottom flex-grow px-4 h-96">
							
						</ScrollArea>
						</TabsContent>
						<TabsContent value="education">
						<ScrollArea className="fade-bottom flex-grow px-4 h-96">
                            <ul>
							    {educationentries.map((entry) => (
                                <li key={entry.id} className="mt-4">
								<Card>
								<CardHeader>
								<CardTitle className="bg-clip-text text-transparent bg-gradient-to-b from-popover-foreground to-gray-600">{entry.title}</CardTitle>
								<CardDescription>
								{entry.description}
								</CardDescription>
								</CardHeader>
								<CardContent className="space-y-2">
								{entry.content}
								</CardContent>
								</Card>
                                </li>
								))}
                            </ul>
						</ScrollArea>
						</TabsContent>
						<TabsContent value="experience">
						<ScrollArea className="fade-bottom flex-grow px-4 h-96">
                            <ul>
								{experienceentries.map((entry) => (
                                <li key={entry.id} className="mt-4">
								<Card>
								<CardHeader>
								<CardTitle className="bg-clip-text text-transparent bg-gradient-to-b from-popover-foreground to-gray-600">{entry.title}</CardTitle>
								<CardDescription>
								{entry.description}
								</CardDescription>
								</CardHeader>
								<CardContent className="space-y-2">
								{entry.content}
								</CardContent>
								</Card>
                                </li>
								))}
                            </ul>
						</ScrollArea>
						</TabsContent>
						<TabsContent value="projects">
						<ScrollArea className="fade-bottom flex-grow px-4 h-96">
                            <ul>
							    {projectsentries.map((entry) => (
								<li key={entry.id} className="mt-4">
								<Card>
								<CardHeader>
								<CardTitle className="bg-clip-text text-transparent bg-gradient-to-b from-popover-foreground to-gray-600">{entry.title}</CardTitle>
								<CardDescription>
								{entry.description}
								</CardDescription>
								</CardHeader>
								<CardContent className="space-y-2">
								{entry.content}
								</CardContent>
								</Card>
								</li>
								))}
                            </ul>
						</ScrollArea>
						</TabsContent>
					</Tabs>
        )
}