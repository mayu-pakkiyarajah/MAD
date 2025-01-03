import React, { createContext, useContext, useState } from 'react';

type ClickContextType = {
  clickCount: number;
  incrementCount: () => void;
};

const ClickContext = createContext<ClickContextType | null>(null);

export function useClickCount() {
  const context = useContext(ClickContext);
  if (!context) {
    throw new Error('useClickCount must be used within a ClickProvider');
  }
  return context;
}

export function ClickProvider({ children }: { children: React.ReactNode }) {
  const [clickCount, setClickCount] = useState(0);

  const incrementCount = () => {
    setClickCount((prev) => prev + 1);
  };

  const value = {
    clickCount,
    incrementCount,
  };

  return (
    <ClickContext.Provider value={value}>
      {children}
    </ClickContext.Provider>
  );
}