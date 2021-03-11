import React, { useState, useEffect } from 'react';
import TechItem from './TechItem';

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch('/techs'); // Fetch logs from backend (returns promise so we use await)
    const data = await res.json(); // Format response as json (necessary with fetch)

    setTechs(data);
    setLoading(false);
  };

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs.map((tech) => {
              return <TechItem key={tech.id} tech={tech} />;
            })}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
