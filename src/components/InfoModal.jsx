import React from "react";

const InfoModalContext = React.createContext();

const InfoModal = ({ contextHolder }) => {
  return (
    <InfoModalContext.Provider value="Light">
      {contextHolder}
    </InfoModalContext.Provider>
  );
};

export default InfoModal;
