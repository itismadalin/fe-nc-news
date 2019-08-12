import React from "react";

const AscDesc = ({ ChangeForm }) => {
  return (
    <div>
      <button className="MultipleButtons" name="asc" onClick={ChangeForm}>
        Asc
      </button>
      <button className="MultipleButtons" name="desc" onClick={ChangeForm}>
        Desc
      </button>
    </div>
  );
};

export default AscDesc;
