import React from 'react';
import { Link } from 'react-router-dom';
import './Add3.css';

import { BsFillPersonCheckFill } from 'react-icons/bs';

export default function Add3() {
  return (
    <div>
      <h2>Add Doctor - Step 3/3</h2>
      <div className="add3Container">
        <BsFillPersonCheckFill className="add3Icon" />

        <h3>The doctor was added successfully!</h3>
        <Link to="/"><button type="button" className="add3Button">Finish</button></Link>
      </div>
    </div>
  );
}
