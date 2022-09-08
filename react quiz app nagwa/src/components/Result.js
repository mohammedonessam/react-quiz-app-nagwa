import React from 'react';

const Result = ({ showResult, quizs, marks, startOver}) => {
    const [playerName,setPlayerName]=React.useState('');

    const getplayerName=(value)=>{
        setPlayerName(value)
        localStorage.setItem('player name :',value)
        console.log(playerName);
    }
    return (
        <section className="bg-dark text-white" style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div onSubmit={()=>{getplayerName();}}
                             className={`text-light text-center p-5 rounded ${marks > (quizs.length * 10 / 2) ? 'bg-success' : 'bg-danger'}`}>
                            <h1 className='mb-2 fw-bold'>{marks > (quizs.length * 10 / 2) ? 'Awesome!' : 'Oops!'}</h1>
                            <h3 className='mb-3 fw-bold'>Your score is {marks} out of {quizs.length * 10}</h3>
                            <button onClick={()=>window.location.reload(false)} className='btn py-2 px-4 btn-light fw-bold d-inline'>OK</button>                            
                             <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;