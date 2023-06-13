import Container from "@ui/components/Container";
import Section from "@ui/components/Section";
import Title from "@ui/components/Typography/Title";
import React from "react";
import Subtitle from "@ui/components/Typography/Subtitle";
import Paragraph from "@ui/components/Typography/Paragraph";
import Text from "@ui/components/Typography/Text";

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
        <Subtitle>This is a default subtitle</Subtitle>
        <Subtitle color="primary">This is a primary subtitle</Subtitle>
        <Subtitle color="secondary">This is a secondary subtitle</Subtitle>
        <Subtitle color="success">This is a success subtitle</Subtitle>
        <Subtitle color="warning">This is a warning subtitle</Subtitle>
        <Subtitle color="error">This is a error subtitle</Subtitle>
        <Subtitle color="info">This is a info subtitle</Subtitle>
        <Subtitle color="dark">This is a dark subtitle</Subtitle>
        <Subtitle className="bg-dark" color="white">
          This is a white subtitle
        </Subtitle>
      </Container>

      <Container>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          veniam.
        </Paragraph>
        <Paragraph color="primary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          veniam.
        </Paragraph>
        <Paragraph color="secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          veniam.
        </Paragraph>
        <Paragraph color="success">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          veniam.
        </Paragraph>
        <Paragraph color="warning">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          veniam.
        </Paragraph>
        <Paragraph color="error">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          veniam.
        </Paragraph>
        <Paragraph color="info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          veniam.
        </Paragraph>
        <Paragraph color="dark">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          veniam.
        </Paragraph>
        <Paragraph className="bg-dark" color="white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          veniam.
        </Paragraph>
      </Container>

      <Container>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          veniam.
        </Text>
        <Text color="primary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          veniam.
        </Text>
        <Text color="secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          veniam.
        </Text>
        <Text color="success">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          veniam.
        </Text>
        <Text color="warning">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          veniam.
        </Text>
        <Text color="error">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          veniam.
        </Text>
        <Text color="info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          veniam.
        </Text>
        <Text color="dark">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          veniam.
        </Text>
        <Text className="bg-dark" color="white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          veniam.
        </Text>
      </Container>
    </Section>
  );
}
