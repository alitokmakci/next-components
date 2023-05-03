"use client";
import Container from "@ui/components/Container";
import Checkbox from "@ui/components/Form/Checkbox";
import FormItem from "@ui/components/Form/FormItem";
import Label from "@ui/components/Form/Label";
import Column from "@ui/components/Grid/Column";
import Row from "@ui/components/Grid/Row";
import React from "react";

export default function Page() {
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <Container className="mt-6">
        <h1 className="mb-6">Colors:</h1>
        <Row>
          <Column span={3}>
            <FormItem>
              <Checkbox
                value="1"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                color="primary"
              >
                Primary Checkbox
              </Checkbox>
              <Label>Result: {checked ? "Checked" : "Not Checked"}</Label>
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem>
              <Checkbox value="1" color="secondary">
                Secondary Checkbox
              </Checkbox>
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem>
              <Checkbox value="1" color="success">
                Success Checkbox
              </Checkbox>
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem>
              <Checkbox value="1" color="warning">
                Warning Checkbox
              </Checkbox>
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem>
              <Checkbox value="1" color="error">
                Error Checkbox
              </Checkbox>
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem>
              <Checkbox value="1" color="info">
                Info Ceckbox
              </Checkbox>
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem>
              <Checkbox value="1" color="dark">
                Dark Checkbox
              </Checkbox>
            </FormItem>
          </Column>

          <Column span={3}>
            <FormItem>
              <Checkbox circle value="1" color="primary">
                Primary Circle Checkbox
              </Checkbox>
            </FormItem>
          </Column>
        </Row>
      </Container>

      <Container className="mt-6">
        <h1 className="mb-6">Flat:</h1>
        <Row>
          <Column span={3}>
            <FormItem>
              <Checkbox value="1" flat color="primary">
                Primary Checkbox
              </Checkbox>
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem>
              <Checkbox flat value="1" color="secondary">
                Secondary Checkbox
              </Checkbox>
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem>
              <Checkbox flat value="1" color="success">
                Success Checkbox
              </Checkbox>
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem>
              <Checkbox flat value="1" color="warning">
                Warning Checkbox
              </Checkbox>
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem>
              <Checkbox flat value="1" color="error">
                Error Checkbox
              </Checkbox>
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem>
              <Checkbox flat value="1" color="info">
                Info Ceckbox
              </Checkbox>
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem>
              <Checkbox flat value="1" color="dark">
                Dark Checkbox
              </Checkbox>
            </FormItem>
          </Column>

          <Column span={3}>
            <FormItem>
              <Checkbox circle flat value="1" color="primary">
                Primary Circle Checkbox
              </Checkbox>
            </FormItem>
          </Column>
        </Row>
      </Container>

      <Container className="mt-6">
        <h1 className="mb-6">Bordered:</h1>
        <Row>
          <Column span={3}>
            <FormItem>
              <Checkbox value="1" bordered color="primary">
                Primary Checkbox
              </Checkbox>
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem>
              <Checkbox bordered value="1" color="secondary">
                Secondary Checkbox
              </Checkbox>
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem>
              <Checkbox bordered value="1" color="success">
                Success Checkbox
              </Checkbox>
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem>
              <Checkbox bordered value="1" color="warning">
                Warning Checkbox
              </Checkbox>
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem>
              <Checkbox bordered value="1" color="error">
                Error Checkbox
              </Checkbox>
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem>
              <Checkbox bordered value="1" color="info">
                Info Ceckbox
              </Checkbox>
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem>
              <Checkbox bordered value="1" color="dark">
                Dark Checkbox
              </Checkbox>
            </FormItem>
          </Column>

          <Column span={3}>
            <FormItem>
              <Checkbox bordered circle value="1" color="primary">
                Primary Circle Checkbox
              </Checkbox>
            </FormItem>
          </Column>
        </Row>
      </Container>
    </>
  );
}
