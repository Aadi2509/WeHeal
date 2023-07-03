import React from 'react';
import './Card.scss';
import {RxDotFilled} from 'react-icons/rx';

const Card = ({item}) => {

  const getStatusColor = (status) => {
    if (status === 'Successful') {
      return 'green';
    } else if (status === 'Pending') {
      return 'red';
    }
    return '';
  };

  const statusColor = getStatusColor(item.status);

  return (
    <div className="card">
        <div className="left">
          <p className='name'>{item.patientname}</p>
          <div className="details">
            <p className='test'>{item.testname}</p>
            <p className='lab'>{item.labname}</p>
            <p className='booked-date'>{item.date}</p>
          </div>
        </div>
        <div className="right">
          <p className="status" style={{ color: statusColor }}><RxDotFilled/>{item.status}</p>
          <button className='btn'>Download</button>
        </div>
    </div>
  )
}

export default Card