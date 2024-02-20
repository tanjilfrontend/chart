


import { Modal } from 'flowbite-react';

const ModalIncentive=({openModal,setOpenModal})=> {
 
  return (
    <>
      <Modal show={openModal} size="lg"  className="custom-modal"  onClose={() => setOpenModal(false)} popup>
        <Modal.Header >
            <h1 className='ml-3 my-2 text-lg font-medium'>Your actual incentive points:</h1>
        </Modal.Header>
        <Modal.Body >
          <div className="text-center flex flex-col p-4">
            <div className='flex justify-between'>
                <p className='font-medium text-sm'>Your obtained points:</p>
                <p className='text-base font-semibold'>500</p>
            </div>
            <div className='flex justify-between'>
                <p className='font-medium text-sm'>Incentive points:</p>
                <p className='text-base font-semibold'>80%</p>
            </div>
            <div className='border border-solid border-[#000] mt-6 mb-2'/>
            <div className='flex justify-between'>
            <p className='font-medium text-base'>Your actual incentive points: &nbsp; &nbsp; 500*80%</p>
                <p className='font-medium text-base'>400</p>
            </div>
           
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalIncentive