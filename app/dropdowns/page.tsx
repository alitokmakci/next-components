import Button from "@ui/components/Button";
import Container from "@ui/components/Container";
import Dropdown, {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "@ui/components/Dropdown";
import React from "react";

export default function Page() {
  return (
    <Container>
      <Dropdown>
        <DropdownToggle>
          <Button>Dropdown Button</Button>
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Action 2</DropdownItem>
          <DropdownItem>Action 3</DropdownItem>
          <DropdownItem>Action 4</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Container>
  );
}
