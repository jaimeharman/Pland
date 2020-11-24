import React from "react";
import "../Design/Design.css"; 
import axios from "axios";

export default function Design() {
    axios
  .get("https://trefle.io/api/v1/plants?token=Vfe4EOlm7UFekDua6gadyrwdwQBMC-Y_bLQEUkREGjM")
  .then(function(res) {
    console.log(res.data);
  });

    return <div>
                <p>Hello</p>
            </div>
}
