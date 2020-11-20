// import React from "react";
// import "../Design/Design.css"; 
// import Draggable from "react-draggable"

// export default function Design() {
//     const fetch = require('node-fetch');

//     (async () => {
//         const response = await fetch('https://trefle.io/api/v1/plants?token=Vfe4EOlm7UFekDua6gadyrwdwQBMC-Y_bLQEUkREGjM');
//         const json = await response.json();
//         console.log(json);
//       })();
      

//     return <div className="Design">
//                 <DraggableCard text="Drag" bgColor="#FF9300" />
//                 <DraggableCard text="Drop" bgColor="#00A2FF" />
//             </div>
// }

// const DraggableCard = ({text, bgColor}) => {
//     return (
//         <Draggable>
//             <Card style={{width: "40%", backgroundColor: bgColor, color: "white"}}>
//             <Button variant="text">Plant</Button>
//             <Typography variant="h6">{text}</Typography>
//             </Card>
//         </Draggable>
//     );
// }