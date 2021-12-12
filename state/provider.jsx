// import React, { useState, createContext, useContext } from "react";

// const InterfaceStageContext = createContext();

// const Provider = ({ children }) => {
//   const [interfaceStage, setInterfaceStage] = useState(0);

//   const handleStageChange = () => {
//     setInterfaceStage((interfaceStage) => interfaceStage++);
//   };

//   const state = { interfaceStage, handleStageChange };

//   return (
//     <InterfaceStageContext.Provider value={state}>
//       {children}
//     </InterfaceStageContext.Provider>
//   );
// };

// const useStageChange = () => {
//   const { handleStageChange } = useContext(InterfaceStageContext);
//   return handleStageChange;

//   // const { interfaceStage } = useContext(InterfaceStageContext);
//   // setInterfaceStage((interfaceStage) => interfaceStage++);
// };

// module.exports = { InterfaceStageContext, useStageChange, Provider };
