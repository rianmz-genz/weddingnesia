import React, { useEffect, useState } from "react";
import Button from "../Button";
import { alertStyle, buttonStyle } from "@/utils/enum";
import { FiX } from "react-icons/fi";
import { variant } from "@/utils";

export default function Alert({ style, trigger, message }) {
  const [isOpened, setIsOpened] = useState(false);
  useEffect(() => {
    setIsOpened(trigger);
  }, [trigger]);
  const alertVariants = variant(
    `border-l-4 p-4 flex justify-between items-center gap-3 fixed top-6 transition-all duration-500 ${
      isOpened ? "right-6" : "-right-full"
    }`,
    {
      style: {
        success: "bg-green-100 border-green-500 text-green-700",
        error: "bg-orange-100 border-orange-500 text-orange-700",
        info: "bg-blue-100 border-blue-500 text-blue-700",
      },
    }
  );
  return (
    <div className={alertVariants({ style })} role="alert">
      <div>
        <p className="font-bold">
          {style == alertStyle.success
            ? "Berhasil"
            : style == alertStyle.error
            ? "Gagal"
            : "Info"}
        </p>
        <p>{message}</p>
      </div>
      <Button
        type="button"
        onClick={() => setIsOpened(false)}
        style={buttonStyle.dangersmall}
      >
        <FiX />
      </Button>
    </div>
  );
}

Alert.defaultProps = {
  style: alertStyle.success,
};
