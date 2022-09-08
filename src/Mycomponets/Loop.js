import React from 'react';
import { useState } from 'react';
import './Loop.css'
function Loop() {

    const [userInput, getUserInput] = useState(
        {
            userSign: '',
            userRow: ""
        }
    );
    const [result, setResult] = useState([]);

    const handleChange = (e) => {
        getUserInput(
            {
                ...userInput,
                [e.target.name]: e.target.value
            }
        )
    };

    const handleSubmit = (e) => {

        let tempStr = '';
        let temparr = [];
        const { userSign, userRow } = userInput;
        const strToNum = Number(userRow);

        if (!isNaN(strToNum)) {
            for (let i = 0; i <= strToNum; i++) {
                for (let j = i; j <= i; j++) {
                    tempStr += userSign + ' '
                }
                temparr.push(tempStr)
                setResult(temparr);
            }
            getUserInput({userSign:'',userRow:''});
        
        } else {
            alert('your pattern row must be Number');
            getUserInput({userSign:'',userRow:''});
        }

    }
    return (
        <React.Fragment>
            <div className='Input_block'>
              <h4>Start Row count Game

              Here you can create your pattern
              </h4>

            
                <div>
                    <input type='text' placeholder='Your Sign' name='userSign' onChange={handleChange} value={userInput.userSign} />
                </div>
                <div>
                    <input type='text' placeholder='How much Time you repeat' name='userRow' onChange={handleChange} value={userInput.userRow} />
                </div>
                <div>
              <button type='button' onClick={handleSubmit}>submit</button>
                </div>
  
            </div>
           

            <div>
                <h4>Your pattern</h4>
                <div>
                    {result.length > 0 ? result.map((ele,index) => <div key={`${index}`}>{ele}</div>) : <div>Nothing to Show</div>}
                </div>

            </div>
        </React.Fragment>
    )
};
export default Loop