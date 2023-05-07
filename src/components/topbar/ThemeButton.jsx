import React, { useState } from "react";
import ThemeModal from "../modals/ThemeModal";
import useColor from "../../useColor";

function ThemeButton() {
  const [showThemeModal, setShowThemeModal] = useState(false);
  const { color, themeBlue, themeYellow, themeRed, themeColor } = useColor();

  return (
    <>
      <div
        onClick={() => setShowThemeModal(true)}
        className="flex absolute left-[1250px] top-[17px] items-center justify-center h-11 w-11 border border-[#868686] rounded-full cursor-pointer"
      >
        <div className={`h-9 w-9 rounded-full bg-[#39BADF]`} />
      </div>
      {showThemeModal && (
        <ThemeModal
          open={showThemeModal}
          onClose={() => setShowThemeModal(false)}
        />
      )}
    </>
  );
}

export default ThemeButton;
