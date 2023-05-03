"use client";
import Container from "@ui/components/Container";
import FormItem from "@ui/components/Form/FormItem";
import Input from "@ui/components/Form/Input";
import Label from "@ui/components/Form/Label";
import Column from "@ui/components/Grid/Column";
import Row from "@ui/components/Grid/Row";
import React, { useState } from "react";

export default function Page() {
  const [number, setNumber] = useState<string>();
  const [validationError, setValidationError] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center p-16 space-y-6 bg-gray-100">
      <Container>
        <h1 className="mx-auto mb-6">Inputs</h1>

        <Row>
          <Column span={3}>
            <FormItem label="Normal:">
              <Input />
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem>
              <Label>No Outline:</Label>
              <Input noOutline />
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem label="Pill:">
              <Input pill />
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem required label="Flat:">
              <Input flat noOutline />
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem label="Disabled:">
              <Input disabled value="Readonly input" />
            </FormItem>
          </Column>
          <Column span={3}>
            <FormItem error label="Error:">
              <Input />
            </FormItem>
          </Column>

          <Column span={3}>
            <FormItem error={validationError} label="Input Validation:">
              <Input
                type="number"
                validator={(value) => {
                  return Number(value) > 100;
                }}
                onValidated={setNumber}
                onValidationEvent={setValidationError}
              />
            </FormItem>
            <span>
              {validationError
                ? "There is an error"
                : " The value is:" + number}
            </span>
          </Column>
        </Row>
      </Container>
    </div>
  );
}
