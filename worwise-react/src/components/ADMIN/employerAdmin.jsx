// import React from 'react';
// import Modal from 'react-modal';
// import styled from 'styled-components';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     borderRadius: '10px',
//     padding: '20px',
//     backgroundColor: '#fff',
//     boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
//   },
//   overlay: {
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
// };

// const ModalContent = styled.div`
//   padding: 20px;
//   text-align: center;
//   border-radius: 10px;
//   background-color: #fff;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   margin: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 16px;
//   background-color: #6c757d;
//   color: white;
// `;

// const View = ({ isOpen, onRequestClose, employer = {} }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       ariaHideApp={false}
//       style={customStyles}
//     >
//       <ModalContent>
//         <h2>Información de la cuenta</h2>
//         {account ? (
//           <>
//             <p><strong>No.Account:</strong> {account.noaccount}</p>
//             <p><strong>Balance:</strong> {account.balance}</p>
//             <p><strong>Type of Account:</strong> {account.typeofaccount}</p>
//             <p><strong>User:</strong> {account.user}</p>
//           </>
//         ) : (
//           <p>Loading...</p>
//         )}
//         <Button onClick={onRequestClose}>Cerrar</Button>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default ViewAccount;

//Se implemento esto jeje