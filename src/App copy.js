// This file is used to test the Heading and Section components
// Change the import statements so that the components are imported from the correct file

import { Heading } from "./Heading";
import { Section } from "./Section";

function App() {
  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
      </Section>
      <Section level={3}>
        <Heading>Sub-heading</Heading>
        <Heading>Sub-heading</Heading>
        <Heading>Sub-heading</Heading>
      </Section>
      <Section level={4}>
        <Heading>Sub-sub-heading</Heading>
        <Heading>Sub-sub-heading</Heading>
        <Heading>Sub-sub-heading</Heading>
      </Section>
      <Section level={5}>
        <Heading>Sub-sub-sub-heading</Heading>
        <Heading>Sub-sub-sub-heading</Heading>
        <Heading>Sub-sub-sub-heading</Heading>
      </Section>
      <Section level={6}>
        <Heading>Sub-sub-sub-sub-heading</Heading>
        <Heading>Sub-sub-sub-sub-heading</Heading>
        <Heading>Sub-sub-sub-sub-heading</Heading>
      </Section>
    </Section>
  );
}

export default App;
