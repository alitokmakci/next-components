import Container from "@ui/components/Container";
import Section from "@ui/components/Section";
import React from "react";
import Switch from "@ui/components/Form/Switch";
import Subtitle from "@ui/components/Typography/Subtitle";

export default function Page() {
  return (
    <Section>
      <Container>
        <Subtitle>Default Switch</Subtitle>
        <div>
          <Switch></Switch>
        </div>
        <div>
          <Switch color="secondary"></Switch>
        </div>
        <div>
          <Switch color="success"></Switch>
        </div>
        <div>
          <Switch color="warning"></Switch>
        </div>
        <div>
          <Switch color="error"></Switch>
        </div>
        <div>
          <Switch color="info"></Switch>
        </div>
        <div>
          <Switch color="dark"></Switch>
        </div>
      </Container>

      <Container>
        <Subtitle>Square Switch</Subtitle>
        <div>
          <Switch square></Switch>
        </div>
        <div>
          <Switch square color="secondary"></Switch>
        </div>
        <div>
          <Switch square color="success"></Switch>
        </div>
        <div>
          <Switch square color="warning"></Switch>
        </div>
        <div>
          <Switch square color="error"></Switch>
        </div>
        <div>
          <Switch square color="info"></Switch>
        </div>
        <div>
          <Switch square color="dark"></Switch>
        </div>
      </Container>

      <Container>
        <Subtitle>Sizes</Subtitle>
        <div>
          <Switch size="xs"></Switch>
        </div>
        <div>
          <Switch size="sm"></Switch>
        </div>
        <div>
          <Switch></Switch>
        </div>
        <div>
          <Switch size="lg"></Switch>
        </div>
        <div>
          <Switch size="xl"></Switch>
        </div>
      </Container>
    </Section>
  );
}
