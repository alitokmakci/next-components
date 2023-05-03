"use client";
import React from "react";
import Container from "@ui/components/Container";
import Button from "@ui/components/Button";
import Modal from "@ui/components/Modal";

export default function Page() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div className="h-screen bg-primary">
        <Container>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

          <Modal active={isOpen} onHide={() => setIsOpen(false)}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              consequatur temporibus explicabo? Similique inventore odit dicta
              commodi repudiandae, eligendi non nam quae, animi, laboriosam
              corporis dolorem harum veritatis reprehenderit. Rerum asperiores
              quos necessitatibus maiores praesentium laudantium. Aspernatur
              illo atque eum eos pariatur in earum repellendus odio eligendi sit
              culpa ullam necessitatibus rerum, doloribus aliquid quis.
            </p>
          </Modal>
        </Container>
      </div>
      <div className="h-screen bg-success"></div>
    </div>
  );
}
