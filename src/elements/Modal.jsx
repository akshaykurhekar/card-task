import React from "react";

const Modal = ({ show, cancel, save,children, }) => {
  //const [showModal, setShowModal] = React.useState(false);
  return show ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative md:w-auto my-6 mx-auto max-w-6xl">
          {/*content*/}
          <div className="border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl text-gray-700 font-semibold">{"Generate card"}</h3>
              <div className="flex space-x-4" >
                <button className=" px-6 py-2 btn-default" onClick={cancel}>
                  Cancel
                </button>
                <button className="px-6 py-2 btn-default" onClick={save}>
                  Save
                </button>
              </div>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              {children}
            </div>            
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : null;
};

export default Modal;
