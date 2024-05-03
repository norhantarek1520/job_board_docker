import React, { useState } from "react";
// import classes from './Recommendation.css';
import axios from 'axios';

function Recommendation() {
  const [message, setMessage] = useState('');
  const [messageCalculated, setMessageCalculated] = useState({
    messageLength: " ",
  });

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    axios.post('http://localhost:6004/api/recommend', { message })
      .then((response) => {
        setMessage('');
        setMessageCalculated({
          messageLength: response.data.messageLength,
        });
      })
      .catch((error) => {
        console.error(error);
        window.alert('Server problem. Please try again later.');
      });
  };

  const handleOpenLink = () => {
    window.open(messageCalculated.messageLength, '_blank');
  };

  return (
    <div>

   {/* <!-- bradcam_area  --> */}
   <div className="bradcam_area bradcam_bg_1">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="bradcam_text">
                        <h3>Recommendation page </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  {/* <!--/ bradcam_area  --> */}

    <div style={{  textAlign: 'center' ,padding: "8rem",border: "1px dashed black",margin: "8rem",flex: '1',}} >
      <div >
        <span>RECOMMEND :</span>
        <h4>Help to Buid Your CV, Picture, Salary and Skills to Get Your Jop:</h4>
        <p></p>
        <textarea
          id="paragraphBox"
          value={message}
          onChange={handleMessageChange}
          style={{
            padding:"15px",
            textAlign: 'center',
            height: '80px',
            width: '250px',
            fontSize: '16px',
          }}
        />
        <p></p>
        <button style={{
          backgroundColor: '#4CAF50', border: 'none',
          color: 'white',
          padding: '15px 32px',
          textAlign: 'left',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '4px 2px',
          cursor: 'pointer',
          borderRadius: '12px'
        }}
          onClick={handleSend}>Recommend</button>
        <button style={{
          backgroundColor: 'red', border: 'none',
          color: 'white',
          padding: '15px 32px',
          textAlign: 'right',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '4px 2px',
          cursor: 'pointer',
          borderRadius: '12px'
        }}
          onClick={handleOpenLink}>Open Link</button>
        <p></p>
        <label>Visit website to know more information  : {messageCalculated.messageLength}</label>
      </div>
    </div>
    </div>
   
  );
}

export default Recommendation;