


import { Modal } from 'flowbite-react';

const ModalPopUp=({openModal,setOpenModal})=> {
 
  return (
    <>
      <Modal show={openModal} size="lg"  className="custom-modal"  onClose={() => setOpenModal(false)} popup>
        <Modal.Header >
            <h1 className='ml-3 my-2 text-2xl font-semibold'>Final Points:</h1>
        </Modal.Header>
        <Modal.Body >
          <div className="text-center flex flex-col p-4">
            <div className='flex justify-between'>
                <p className='font-medium text-base'>Your bonus points:</p>
                <p className='font-medium text-base'>60</p>
            </div>
            <div className='flex justify-between'>
                <p className='font-medium text-base'>Incentive Percentage:</p>
                <p className='font-medium text-base'>80%</p>
            </div>
            <div className='border border-solid border-[#000] mt-6 mb-2'/>
            <div className='flex justify-between'>
            <p className='font-medium text-base'>Your final points: &nbsp; &nbsp; (60*80%)</p>
                <p className='font-medium text-base'>48p</p>
            </div>
           
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPopUp