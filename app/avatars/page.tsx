import Avatar from "@ui/components/Avatar";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col items-center p-16 space-y-6 bg-gray-100">
      <h1 className="mx-auto">Avatars</h1>

      <h2 className="mx-auto">Colors:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Avatar color="primary" letter="A"></Avatar>
        <Avatar color="secondary" letter="A"></Avatar>
        <Avatar color="success" letter="A"></Avatar>
        <Avatar color="error" letter="A"></Avatar>
        <Avatar color="info" letter="A"></Avatar>
        <Avatar color="warning" letter="A"></Avatar>
        <Avatar color="dark" letter="A"></Avatar>
        <Avatar color="white" letter="A"></Avatar>
      </div>

      <h2 className="mx-auto">Flat:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Avatar flat color="primary" letter="A"></Avatar>
        <Avatar flat color="secondary" letter="A"></Avatar>
        <Avatar flat color="success" letter="A"></Avatar>
        <Avatar flat color="error" letter="A"></Avatar>
        <Avatar flat color="info" letter="A"></Avatar>
        <Avatar flat color="warning" letter="A"></Avatar>
        <Avatar flat color="dark" letter="A"></Avatar>
      </div>

      <h2 className="mx-auto">Square:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Avatar square color="primary" letter="A"></Avatar>
        <Avatar square color="secondary" letter="A"></Avatar>
        <Avatar square color="success" letter="A"></Avatar>
        <Avatar square color="error" letter="A"></Avatar>
        <Avatar square color="info" letter="A"></Avatar>
        <Avatar square color="warning" letter="A"></Avatar>
        <Avatar square color="dark" letter="A"></Avatar>
        <Avatar square color="white" letter="A"></Avatar>
      </div>

      <h2 className="mx-auto">Circle:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Avatar circle color="primary" letter="A"></Avatar>
        <Avatar circle color="secondary" letter="A"></Avatar>
        <Avatar circle color="success" letter="A"></Avatar>
        <Avatar circle color="error" letter="A"></Avatar>
        <Avatar circle color="info" letter="A"></Avatar>
        <Avatar circle color="warning" letter="A"></Avatar>
        <Avatar circle color="dark" letter="A"></Avatar>
        <Avatar circle color="white" letter="A"></Avatar>
      </div>

      <h2 className="mx-auto">Sizes:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Avatar size="xs" color="primary" letter="A"></Avatar>
        <Avatar size="sm" color="secondary" letter="A"></Avatar>
        <Avatar size="md" color="success" letter="A"></Avatar>
        <Avatar size="lg" color="error" letter="A"></Avatar>
        <Avatar size="lg" color="info" letter="A"></Avatar>
        <Avatar size="xl" color="warning" letter="A"></Avatar>
      </div>

      <h2 className="mx-auto">Image:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Avatar size="xs" img="/avatar.avif"></Avatar>
        <Avatar size="sm" img="/avatar.avif"></Avatar>
        <Avatar size="md" img="/avatar.avif"></Avatar>
        <Avatar size="lg" img="/avatar.avif"></Avatar>
        <Avatar size="xl" img="/avatar.avif"></Avatar>
      </div>

      <h2 className="mx-auto">Avatar Badges:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Avatar dot size="xs" img="/avatar.avif"></Avatar>
        <Avatar dot size="sm" img="/avatar.avif"></Avatar>
        <Avatar dot size="md" img="/avatar.avif"></Avatar>
        <Avatar dot size="lg" img="/avatar.avif"></Avatar>
        <Avatar dot size="xl" img="/avatar.avif"></Avatar>
      </div>

      <h2 className="mx-auto">Badge Colors:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Avatar
          dotColor="primary"
          dot
          dotPosition="bottom-right"
          img="/avatar.avif"
        ></Avatar>
        <Avatar
          dotColor="secondary"
          dot
          dotPosition="bottom-right"
          img="/avatar.avif"
        ></Avatar>
        <Avatar
          dotColor="success"
          dot
          dotPosition="bottom-right"
          img="/avatar.avif"
        ></Avatar>
        <Avatar
          dotColor="warning"
          dot
          dotPosition="bottom-right"
          img="/avatar.avif"
        ></Avatar>
        <Avatar
          dotColor="error"
          dot
          dotPosition="bottom-right"
          img="/avatar.avif"
        ></Avatar>
        <Avatar
          dotColor="info"
          dot
          dotPosition="bottom-right"
          img="/avatar.avif"
        ></Avatar>
        <Avatar
          dotColor="white"
          dot
          dotPosition="bottom-right"
          img="/avatar.avif"
        ></Avatar>
        <Avatar
          dotColor="dark"
          dot
          dotPosition="bottom-right"
          img="/avatar.avif"
        ></Avatar>
      </div>

      <h2 className="mx-auto">Badge Positions:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Avatar
          dotColor="primary"
          dot
          dotPosition="top-left"
          img="/avatar.avif"
        ></Avatar>
        <Avatar
          dotColor="primary"
          dot
          dotPosition="top-right"
          img="/avatar.avif"
        ></Avatar>
        <Avatar
          dotColor="primary"
          dot
          dotPosition="bottom-left"
          img="/avatar.avif"
        ></Avatar>
        <Avatar
          dotColor="primary"
          dot
          dotPosition="bottom-right"
          img="/avatar.avif"
        ></Avatar>
      </div>

      <h2 className="mx-auto">Badge Content:</h2>

      <div className="flex items-center justify-center w-full space-x-4">
        <Avatar
          dotColor="error"
          dot
          dotPosition="bottom-right"
          dotContent="offline"
          img="/avatar.avif"
        ></Avatar>
        <Avatar
          dotColor="success"
          dot
          dotPosition="bottom-right"
          dotContent="online"
          img="/avatar.avif"
        ></Avatar>
        <Avatar
          dotColor="primary"
          dot
          dotPosition="top-right"
          dotContent="5"
          img="/avatar.avif"
        ></Avatar>
        <Avatar
          dotColor="primary"
          dot
          dotPosition="top-right"
          dotContent="99+"
          img="/avatar.avif"
        ></Avatar>
      </div>
    </div>
  );
}
