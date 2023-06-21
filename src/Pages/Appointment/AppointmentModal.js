import React from 'react';
import Modal from 'react-modal';



const AppointmentModal = ({ treatment }) => {
    console.log(treatment)

    return (
        <div className=' '>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">This modal works with a hidden checkbox!</p>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;