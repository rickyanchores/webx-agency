import React from 'react';

const Grid = () => {
  return (
    <div className="Grid w-screen m-auto flex flex-col justify-center items-center">
        <div className="grid-container m-auto grid grid-cols-1 gap-10 p-10  md:grid-cols-2">
          <div className="box bg-neutral-800">Box 1</div>
          <div className="box bg-neutral-800">Box 2</div>
          <div className="box bg-neutral-800">Box 3</div>
          <div className="box bg-neutral-800">Box 4</div>
        </div>
    </div>
  );
};

export default Grid;
