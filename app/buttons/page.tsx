import Button from "@ui/components/Button";
import ButtonGroup from "@ui/components/ButtonGroup";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col items-center p-16 space-y-6">
      <h1 className="mx-auto">Buttons</h1>

      <h2 className="mx-auto">Colors:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="info">Info</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
        <Button color="dark">Dark</Button>
      </div>

      <h2 className="mx-auto">Flat:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Button flat color="primary">
          Primary
        </Button>
        <Button flat color="secondary">
          Secondary
        </Button>
        <Button flat color="success">
          Success
        </Button>
        <Button flat color="info">
          Info
        </Button>
        <Button flat color="warning">
          Warning
        </Button>
        <Button flat color="error">
          Error
        </Button>
        <Button flat color="dark">
          Dark
        </Button>
      </div>

      <h2 className="mx-auto">Bordered:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Button bordered color="primary">
          Primary
        </Button>
        <Button bordered color="secondary">
          Secondary
        </Button>
        <Button bordered color="success">
          Success
        </Button>
        <Button bordered color="info">
          Info
        </Button>
        <Button bordered color="warning">
          Warning
        </Button>
        <Button bordered color="error">
          Error
        </Button>
        <Button bordered color="dark">
          Dark
        </Button>
      </div>

      <h2 className="mx-auto">Square:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Button square color="primary">
          Primary
        </Button>
        <Button square color="secondary">
          Secondary
        </Button>
        <Button square color="success">
          Success
        </Button>
        <Button square color="info">
          Info
        </Button>
        <Button square color="warning">
          Warning
        </Button>
        <Button square color="error">
          Error
        </Button>
        <Button square color="dark">
          Dark
        </Button>
      </div>

      <h2 className="mx-auto">Pill:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Button pill color="primary">
          Primary
        </Button>
        <Button pill color="secondary">
          Secondary
        </Button>
        <Button pill color="success">
          Success
        </Button>
        <Button pill color="info">
          Info
        </Button>
        <Button pill color="warning">
          Warning
        </Button>
        <Button pill color="error">
          Error
        </Button>
        <Button pill color="dark">
          Dark
        </Button>
      </div>

      <h2 className="mx-auto">Sizes:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Button size="xs">xs</Button>
        <Button size="sm">sm</Button>
        <Button>md</Button>
        <Button size="lg">lg</Button>
        <Button size="xl">xl</Button>
      </div>

      <h2 className="mx-auto">Block:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Button block>xs</Button>
      </div>

      <h2 className="mx-auto">Loading:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Button loading />
      </div>

      <h2 className="mx-auto">Disabled:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Button color="primary" disabled>
          Disabled Primary Button
        </Button>
      </div>

      <h2 className="mx-auto">Button Group:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <ButtonGroup>
          <Button>First button</Button>
          <Button>Second button</Button>
          <Button>Third button</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
