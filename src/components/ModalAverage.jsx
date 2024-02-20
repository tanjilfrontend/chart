


import { Modal } from 'flowbite-react';

const ModalAverage=({openModal,setOpenModal})=> {
 
  return (
    <>
      <Modal show={openModal} size="lg"  className="custom-modal"  onClose={() => setOpenModal(false)} popup>
        <Modal.Header >
            <h1 className='ml-3 my-2 text-2xl font-semibold'>Total incentive average:</h1>
        </Modal.Header>
        <Modal.Body >
          <div className="flex flex-col p-4">
            <div className='flex justify-between my-2'>
                <p className='font-medium text-base'>Revision Vs Task ratio:</p>
                <p className='font-medium text-base mr-2'>80%</p>
            </div>
            <div className='flex justify-between my-2'>
                <p className='font-medium text-base'>Goal achieve rate:</p>
                <p className='font-medium text-base text-red-600'>00%</p>
            </div>
            <div className='flex justify-between my-2'>
                <p className='font-medium text-base'>Negative point Vs positive point:</p>
                <p className='font-medium text-base mr-2'>100%</p>
            </div>
            <div className='flex justify-between my-2'>
                <p className='font-medium text-base'>Percentage of delayed projects:</p>
                <p className='font-medium text-base mr-2'>29%</p>
            </div>
            <div className='flex justify-between my-2'>
                <p className='font-medium text-base'>Milestone cancelation rate:</p>
                <p className='font-medium text-base mr-2'>03%</p>
            </div>
            <div className='flex justify-between my-2'>
                <p className='font-medium text-base'>Deadline miss rate:</p>
                <p className='font-medium text-base mr-2'>80%</p>
            </div>
            <div className='flex justify-between my-2'>
                <p className='font-medium text-base'>Client relation rate:</p>
                <p className='font-medium text-base mr-2'>80%</p>
            </div>
            <div className='border border-solid border-[#000] mt-6 mb-2'/>
            <div className='flex '>
            <p className='font-medium text-base'>Total incentive average: &nbsp; &nbsp; <br /> <span className=''>(80%+00%+100%+29%+03%+100%+80%+80%) /3</span></p>
                <p className='font-medium text-base text-red-600'>00</p>
            </div>
             
             <div className='mt-10'>
              <p className='font-medium text-sm'><sup className='text-red-600'>**</sup>For regular points, if you fail to maintain the minimum incentive slab for any of the criteria,your overall incentive percentage will zero</p>
             </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalAverage