import Column from "@ui/components/Grid/Column";
import Container from "@ui/components/Container";
import Row from "@ui/components/Grid/Row";
import React from "react";

export default function Page() {
  return (
    <Container>
      <Row>
        <Column span={1} sm={2} md={3} lg={4} xl={5}>
          <div className="bg-primary">
            This is an example column has columnWidth property
          </div>
        </Column>
        <Column span={11}>
          <div className="bg-primary">This is an example column</div>
        </Column>
        <Column>
          <div className="bg-primary">This is an example column</div>
        </Column>
        <Column>
          <div className="bg-primary">This is an example column</div>
        </Column>
        <Column>
          <div className="bg-primary">This is an example column</div>
        </Column>
        <Column>
          <div className="bg-primary">This is an example column</div>
        </Column>
        <Column>
          <div className="bg-primary">This is an example column</div>
        </Column>
        <Column>
          <div className="bg-primary">This is an example column</div>
        </Column>
        <Column>
          <div className="bg-primary">This is an example column</div>
        </Column>
        <Column>
          <div className="bg-primary">This is an example column</div>
        </Column>
        <Column>
          <div className="bg-primary">This is an example column</div>
        </Column>
        <Column offset={2}>
          <div className="bg-primary">
            This is an example column with offset 2
          </div>
        </Column>
        <Column>
          <div className="bg-primary">This is an example column</div>
        </Column>
        <Column>
          <div className="bg-primary">This is an example column</div>
        </Column>
      </Row>
    </Container>
  );
}
