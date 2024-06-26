import React from "react";
import { CSSProperties } from "react";
import { ScaleLoader } from "react-spinners";
interface CustomSpinnerProps {
  loading: boolean;
}

const CustomSpinner: React.FC<CustomSpinnerProps> = ({ loading }) => {
  const override: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
  };

  return (
    <>
      <div className="radial-center hidden lg:block"></div>
      <div className="sweet-loading">
        <ScaleLoader
          color={"#710010"}
          loading={loading}
          width={10}
          margin={5}
          cssOverride={override}
        />
      </div>
    </>
  );
};

export default CustomSpinner;
