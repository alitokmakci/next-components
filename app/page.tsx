import Title from "@ui/components/Typography/Title";
import Navbar from "@ui/components/Navbar";
import Section from "@ui/components/Section";
import Container from "@ui/components/Container";
import Dropdown, {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "@ui/components/Dropdown";
import TextButton from "@ui/components/TextButton";

export default function Home() {
  return (
    <main>
      <Navbar>
        <Navbar.Left>
          <Navbar.Logo href="/">Next UI Components</Navbar.Logo>
        </Navbar.Left>

        <Navbar.Center>
          <Navbar.Item>Home Page</Navbar.Item>
          <Navbar.Item>Road Map</Navbar.Item>
          <Navbar.Item>Elements</Navbar.Item>
          <Dropdown>
            <DropdownToggle>
              <Navbar.Item>Components</Navbar.Item>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Test 1</DropdownItem>
              <DropdownItem>Test 2</DropdownItem>
              <DropdownItem>Test 3</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Navbar.Center>

        <Navbar.Right>
          <TextButton size="xl">
            <i className="ri-github-fill text-text" />
          </TextButton>
        </Navbar.Right>
      </Navbar>
      <Section>
        <Container>
          <Title color="primary">
            You&apos;ll see a lot of beautiful things here soon
          </Title>
        </Container>
      </Section>
    </main>
  );
}
