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
							<div className="py-2">
							<h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-b from-popover-foreground to-gray-600">Hello!</h1>
							</div>
							<div className="pb-2">
							<p className="text-foreground">I became interested in software development at the end of high school
								when working on GIS applications. Programming was a unique creative outlet to make things that I didn&apos;t
								already see in the world. After I graduate, I plan on contributing to a company where I can work
								on difficult problems in a fast-paced, innovative environment.
							</p>
							</div>
							<div className="mt-2 pb-2">
							<p className="text-foreground">Proficient in:
							</p>
							<ul className="text-foreground">
							<li>
								- Framer Motion, Lucia, TailwindCSS, Keras, pandas/geopandas, Playwright, Requests
							</li>
							<li>
								- NextJS/React
							</li>
							<li>
								- Typescript, Python
							</li>
							</ul>
							</div>
							<div className="mt-2 pb-2">
								<ul className="text-foreground underline">
									<li><a href="https://github.com/lukesteinbicker">GitHub</a></li>
									<li><a href="https://linkedin.com/in/luke-steinbicker">LinkedIn</a></li>
									<li><a href="https://docs.google.com/document/d/1FoRvMY4QVUbN5276vvCDHwC6V20jNy6l_XAvvIYs620">Resume</a></li>
								</ul>
							</div>
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