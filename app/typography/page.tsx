import Container from "@ui/components/Container";
import Section from "@ui/components/Section";
import Title from "@ui/components/Typography/Title";
import React from "react";
import Subtitle from "@ui/components/Typography/Subtitle";

export default function Page() {
  return (
    <Section>
      <Container>
        <Title>This is a default title</Title>
        <Title color="primary">This is a primary title</Title>
        <Title color="secondary">This is a secondary title</Title>
        <Title color="success">This is a success title</Title>
        <Title color="warning">This is a warning title</Title>
        <Title color="error">This is a error title</Title>
        <Title color="info">This is a info title</Title>
        <Title color="dark">This is a dark title</Title>
        <Title className="bg-dark" color="white">
          This is a white title
        </Title>
      </Container>

      <Container>
        <Subtitle>This is a default title</Subtitle>
        <Subtitle color="primary">This is a primary title</Subtitle>
        <Subtitle color="secondary">This is a secondary title</Subtitle>
        <Subtitle color="success">This is a success title</Subtitle>
        <Subtitle color="warning">This is a warning title</Subtitle>
        <Subtitle color="error">This is a error title</Subtitle>
        <Subtitle color="info">This is a info title</Subtitle>
        <Subtitle color="dark">This is a dark title</Subtitle>
        <Subtitle className="bg-dark" color="white">
          This is a white title
        </Subtitle>
      </Container>
    </Section>
  );
}
