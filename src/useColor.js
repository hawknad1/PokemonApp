import { useState } from "react";

const useColor = () => {
  const [themeRed, setThemeRed] = useState("");
  const [themeBlue, setThemeBlue] = useState("");
  const [themeYellow, setThemeYellow] = useState("");
  const [color, setColor] = useState(false);
  const [themeColor, setThemeColor] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleColor = (color) => {
    setColor(true);
    if (color) {
      setThemeColor(color);
    }
  };

  const handleThemeRed = () => {
    setColor(true);
    setThemeRed("#E85382");
  };

  const handleThemeBlue = () => {
    setColor(true);
    setThemeBlue("#39BADF");
  };

  const handleThemeYellow = () => {
    setColor(true);
    setThemeYellow("#E1A725");
  };

  return {
    themeBlue,
    themeYellow,
    themeRed,
    color,
    handleThemeBlue,
    handleThemeRed,
    handleThemeYellow,
    handleColor,
    themeColor,
    handleShowModal,
    showModal,
  };
};

export default useColor;
