// contextShare.js
import React, { createContext, useState } from 'react';

export const SubmenuContext = createContext();
export const ActiveComponent = createContext();
export const SubmenuStatusContext = createContext();


function ContextShare({ children }) {
  const [menu, setMenu] = useState(null);
  const [component, setComponent] = useState(null);
  const [submenuStatus,setSubMenuStatus] = useState(false)

  return (
    <SubmenuContext.Provider value={{ menu, setMenu }}>
      <ActiveComponent.Provider value={{ component, setComponent }}>
        <SubmenuStatusContext.Provider value={{submenuStatus,setSubMenuStatus}}>
        {children}
        </SubmenuStatusContext.Provider>
      </ActiveComponent.Provider>
    </SubmenuContext.Provider>
  );
}

export default ContextShare;
