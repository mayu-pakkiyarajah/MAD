import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ClickContextProps {
  clickCount: number;
  incrementClickCount: () => void;
}

const ClickContext = createContext<ClickContextProps | undefined>(undefined);

interface ClickProviderProps {
  children: ReactNode;
}

export const ClickProvider: React.FC<ClickProviderProps> = ({ children }) => {
  const [clickCount, setClickCount] = useState(0);

  const incrementClickCount = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <ClickContext.Provider value={{ clickCount, incrementClickCount }}>
      {children}
    </ClickContext.Provider>
  );
};

export const useClickStore = () => {
  const context = useContext(ClickContext);
  if (!context) {
    throw new Error('useClickStore must be used within a ClickProvider');
  }
  return context;
};