"use client";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";

interface ModalProviderProps {}

const ModalProvider: React.FC<ModalProviderProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Modal
        title='Test title'
        description='Test Decription'
        onChange={() => {}}
        isOpen={true}
      >
        Modal
      </Modal>
    </>
  );
};

export default ModalProvider;
