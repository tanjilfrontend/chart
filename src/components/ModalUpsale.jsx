


import { Modal } from 'flowbite-react';

const ModalUpsale=({openModal,setOpenModal})=> {
 
  return (
    <>
      <Modal show={openModal} size="lg"  className="custom-modal"  onClose={() => setOpenModal(false)} popup>
        <Modal.Header >
            <h1 className='ml-3 my-2 text-lg font-medium'>Upsale/cross sale points</h1>
        </Modal.Header>
        <Modal.Body >
          <div className="text-center flex flex-col p-4">
            <div className='flex justify-between'>
                <p className='font-medium text-sm'>Upsale/cross sale:</p>
                <p className='text-base font-semibold'>$1201</p>
            </div>
            <div className='flex justify-between'>
                <p className='font-medium text-sm'>Incentive:</p>
                <p className='text-base font-semibold'>5%</p>
            </div>
            <div className='border border-solid border-[#000] mt-6 mb-2'/>
            <div className='flex justify-between'>
            <p className='font-medium text-base'>Upsale/cross sale points: &nbsp; &nbsp; (1201*5%)</p>
                <p className='font-medium text-base'>60.05</p>
            </div>
           
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalUpsale