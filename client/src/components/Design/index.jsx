import React from "react";
import "../Design/Design.css"; 
import axios from "axios";

export default function Design() {
    axios.get('/plants')
  .then(function(res) {
    console.log(res);
  });

    return <div>
                <p>Hello</p>
            </div>
}
