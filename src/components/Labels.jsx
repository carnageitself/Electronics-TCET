import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);
  return (
    <>
      <p className="text-gray-800 font-bold mt-10 font-title">Labels</p>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="items-center mt-3 flex form-checkbox h-5 w-5 rounded focus:ring-0 cursor-pointer relative"
        style={{ backgroundColor: lbl, borderColor: lbl}}
        htmlFor={`checkbox-${idx}`}
        >
          <input
            type="checkbox"
            checked={checked}
            onChange={() =>
              updateLabel({ label: lbl, checked: !checked })
            }
           
            className={`hidden`}
            id={`checkbox-${idx}`}
          />
          <span className={`ml-7 capitalize text-lg`} style={{color: `${lbl}`}}>{lbl}</span>
        </label>
      ))}
    </>
  );
}
