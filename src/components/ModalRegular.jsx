


import { Modal } from 'flowbite-react';

const ModalRegular=({openModal,setOpenModal})=> {
 
  return (
    <>
      <Modal show={openModal} size="lg"  className="custom-modal"  onClose={() => setOpenModal(false)} popup>
        <Modal.Header >
            <h1 className='ml-3 my-2 text-2xl font-semibold'>Your Regular Points:</h1>
        </Modal.Header>
        <Modal.Body >
          <div className="text-center flex flex-col p-4">
            <div className='flex justify-between'>
                <p className='font-medium text-base'>Points:</p>
                <p className='font-medium text-base mr-2'>00</p>
            </div>
            <div className='flex justify-between'>
                <p className='font-medium text-base'>Total incentive average:</p>
                <p className='font-medium text-base text-red-600'>00%</p>
            </div>
            <div className='border border-solid border-[#000] mt-6 mb-2'/>
            <div className='flex justify-between'>
            <p className='font-medium text-base'>Your final points: &nbsp; &nbsp; <span className='text-red-600'>(00*00%)</span></p>
                <p className='font-medium text-base text-red-600'>00</p>
            </div>
             
             <div className='mt-10'>
              <p className='font-medium text-sm'><sup className='text-red-600'>**</sup>For regular points, you will be eligible for incentive only when you will have more than 100 incentive points in total</p>
             </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalRegular