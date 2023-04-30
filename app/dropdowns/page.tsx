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
          <Button>Deneme</Button>
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Container>
  );
}
