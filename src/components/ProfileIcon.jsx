import React from 'react';
import Badge from 'react-bootstrap/Badge';

function ProfileIcon() {
  return (
    <>
      <div className='flex justify-center gap-10 align-middle bg-white text-black px-2 py-2 border h-auto border-gray-400 rounded sm:bg-blue-600 sm:text-white'>
        <div style={{ position: 'relative', width: 'fit-content' }}>
          <img src="https://kccitallahassee.com/wp-content/uploads/sample-profile.jpg" className="img-fluid" style={{ width: '80px', borderRadius: '50%' }} alt="" />
          <Badge className="position-absolute bottom-0 end-0 mb-1 me-1" style={{ borderRadius: '50%' }}>3</Badge>
        </div>
        <div className='ms'>
          <h3 className='text-1xl'>Miya Hashim</h3>
          <h4 className='text-base  text-green-600 text-opacity-100'>Verification Level: 3</h4>
          <h6>Ernakulam, India</h6>
        </div>
      </div>
    </>
  );
}

export default ProfileIcon;
