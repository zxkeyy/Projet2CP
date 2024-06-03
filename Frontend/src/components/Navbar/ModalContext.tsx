import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isOpen: boolean;
  onOpen: (content: any) => void;
  onClose: () => void;
  modalContent: any;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<any>(null);

  const onOpen = (content: any) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const onClose = () => {
    setModalContent(null);
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, onOpen, onClose, modalContent }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
