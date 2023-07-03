import Title from "@ui/components/Typography/Title";
import Navbar from "@ui/components/Navbar";
import Section from "@ui/components/Section";
import Container from "@ui/components/Container";

export default function Home() {
  return (
    <main>
      <Navbar>
        <Navbar.Logo href="/">Logo</Navbar.Logo>
      </Navbar>
      <Section>
        <Container>
          <Title color="primary">
            You&apos;ll see a lot of beautiful things here soon
          </Title>
        </Container>
      </Section>
    </main>
  );
}
