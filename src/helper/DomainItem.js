import React from 'react'
export default function DomainItem({image,name}) {
  return (
    <div className='DetailItem'>
      <div style={{backgroundImage : `url(${image})` ,backgroundSize:`cover`}}>
        <h1>{name}</h1>
      </div>
    </div>
  );
}
