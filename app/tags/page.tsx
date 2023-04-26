import Tag from "@ui/components/Tag";
import TagGroup from "@ui/components/TagGroup";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col items-center p-16 space-y-6 bg-gray-100">
      <h1 className="mx-auto">Tags</h1>

      <h2 className="mx-auto">Colors:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Tag>Primary</Tag>
        <Tag color="secondary">Secondary</Tag>
        <Tag color="success">Success</Tag>
        <Tag color="warning">Warning</Tag>
        <Tag color="error">Error</Tag>
        <Tag color="info">Info</Tag>
        <Tag color="dark">Dark</Tag>
        <Tag color="white">White</Tag>
      </div>

      <h2 className="mx-auto">Flat:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Tag flat>Primary</Tag>
        <Tag flat color="secondary">
          Secondary
        </Tag>
        <Tag flat color="success">
          Success
        </Tag>
        <Tag flat color="warning">
          Warning
        </Tag>
        <Tag flat color="error">
          Error
        </Tag>
        <Tag flat color="info">
          Info
        </Tag>
        <Tag flat color="dark">
          Dark
        </Tag>
        <Tag flat color="white">
          White
        </Tag>
      </div>

      <h2 className="mx-auto">Sizes:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Tag size="md">md tag</Tag>
        <Tag size="lg">lg tag</Tag>
        <Tag size="xl">xl tag</Tag>
      </div>

      <h2 className="mx-auto">Close Button:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Tag showClose size="md">
          md tag
        </Tag>
        <Tag showClose size="lg">
          lg tag
        </Tag>
        <Tag showClose size="xl">
          xl tag
        </Tag>
      </div>

      <h2 className="mx-auto">Grouping:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <TagGroup>
          <Tag color="dark">build:</Tag>
          <Tag color="success">success</Tag>
        </TagGroup>

        <TagGroup>
          <Tag color="dark">deploy:</Tag>
          <Tag color="error">failed</Tag>
        </TagGroup>
      </div>
    </div>
  );
}
