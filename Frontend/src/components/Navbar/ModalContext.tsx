import { createContext, useContext, useState, ReactNode } from 'react';

// Define the types for the context
interface ModalContextType {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

// Create a context with a default value
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Create a provider to manage the modal state
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to use the modal context
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
