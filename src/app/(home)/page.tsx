import { Section } from "@/components/section";
import { Banner } from "@/components/banner";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Hero } from "@/components/hero";

const SampleCard = () => (
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
);

export default function Home() {
  return (
    <>
      <Hero title="Hero Title 1" description="Hero Description 1" />

      <Section title="Section Title 1" description="Section Description 1">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <SampleCard />
          <SampleCard />
        </div>
      </Section>
      <Section title="Section Title 2" description="Section Description 2">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-6 gap-10">
          <SampleCard />
          <SampleCard />
          <SampleCard />
          <SampleCard />
          <SampleCard />
          <SampleCard />
        </div>
      </Section>
      <Section title="Section Title 3" description="Section Description 3" />
      <Banner title="Banner Title 3" description="Banner Description 3" />
      <Section title="Section Title 4" description="Section Description 4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <SampleCard />
          <SampleCard />
          <SampleCard />
        </div>
      </Section>
      <Section title="Section Title 5" description="Section Description 5">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <SampleCard />
          <SampleCard />
        </div>
      </Section>
    </>
  );
}
