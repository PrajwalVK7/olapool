import React from 'react'
import Badge from 'react-bootstrap/Badge';

function ProfileIcon() {
  return (
    <>
     <div className='flex justify-center gap-10 align-middle px-2 py-2 border h-auto border-gray-400 rounded'>
                <div style={{ position: 'relative', width: 'fit-content' }}>
                    <img src="https://kccitallahassee.com/wp-content/uploads/sample-profile.jpg" className="img-fluid" style={{ width: '80px', borderRadius: '50%' }} alt="" />
                    <Badge className="position-absolute bottom-0 end-0 mb-1 me-1" style={{ borderRadius: '50%' }}>3</Badge>
                </div>
                <div className='ms'>
                    <h3 className='text-lg'>Miya Hashim</h3>
                    <h4 className='text-base'>Verfication Level : 3</h4>
                    <h6>Ernakulam, India</h6>
                </div>
            </div>
    </>
  )
}

export default ProfileIcon