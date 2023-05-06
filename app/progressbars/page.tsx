import Container from "@ui/components/Container";
import Column from "@ui/components/Grid/Column";
import Row from "@ui/components/Grid/Row";
import ProgressBar from "@ui/components/ProgressBar";
import React from "react";

export default function Page() {
  return (
    <Container>
      <Row>
        <Column span={12}>
          <ProgressBar percentage={20} />
        </Column>
        <Column span={12}>
          <ProgressBar color="secondary" percentage={30} />
        </Column>
        <Column span={12}>
          <ProgressBar color="success" percentage={40} />
        </Column>
        <Column span={12}>
          <ProgressBar color="warning" percentage={50} />
        </Column>
        <Column span={12}>
          <ProgressBar color="info" percentage={60} />
        </Column>
        <Column span={12}>
          <ProgressBar size="lg" color="error" percentage={70} />
        </Column>
        <Column span={12}>
          <ProgressBar size="xl" color="dark" percentage={80} />
        </Column>
      </Row>
    </Container>
  );
}
