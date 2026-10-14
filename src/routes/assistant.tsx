import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/site/Layout";
import { EmailTool, PlannerTool, ResearchTool } from "@/components/site/Tools";
import { ChatPanel } from "@/components/site/Chat";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Impact } from "@/components/site/Impact";
import { meta } from "@/lib/meta";

export const Route = createFileRoute("/assistant")({
  head: () => meta("AI Assistant Hub", "AI email generator, day planner, research assistant and chatbot for Sihle Kula visitors and staff."),
  component: Hub,
});

function Hub() {
  return (
    <>
      <PageHeader title="AI Assistant Hub" sub="Productivity tools for visitors and staff. Always review AI output before use." />
      <Section>
        <Tabs defaultValue="chat">
          <TabsList className="flex h-auto flex-wrap">
            <TabsTrigger value="chat">Chatbot</TabsTrigger>
            <TabsTrigger value="email">Email Generator</TabsTrigger>
            <TabsTrigger value="plan">Task Planner</TabsTrigger>
            <TabsTrigger value="research">Research Assistant</TabsTrigger>
          </TabsList>
          <div className="mt-6 rounded-2xl bg-card p-6 shadow-soft">
            <TabsContent value="chat"><ChatPanel tall /></TabsContent>
            <TabsContent value="email"><EmailTool /></TabsContent>
            <TabsContent value="plan"><PlannerTool /></TabsContent>
            <TabsContent value="research"><ResearchTool /></TabsContent>
          </div>
        </Tabs>
        <p className="mt-4 text-sm text-muted-foreground">See the <Link to="/prompts" className="text-accent underline">Prompt Library</Link> and our <Link to="/responsible-ai" className="text-accent underline">Responsible AI policy</Link>.</p>
      </Section>
      <Impact />
    </>
  );
}
