import React from 'react';

const AscDesc = ({ ChangeForm }) => {
  return (
    <div>
      <button name="asc" onClick={ChangeForm}>Asc</button>
      <button name="desc" onClick={ChangeForm}>Desc</button>
    </div>
  );
};

export default AscDesc;