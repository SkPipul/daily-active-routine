import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <div className='text-container'>
                <h1>Important Question and answer</h1>
                <div>
                    <h3>1. How does React works?</h3>
                    <p><strong>Ans:</strong> React is a JavaScript library developed by Facebook which, among other things, was used to build  <br /> Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike.</p>
                </div>
                <div>
                    <h3>2. Difference between props and state</h3>
                    <p><strong>Ans:</strong> Props are used to pass data from one component to another. The state is a local data storage that is local to the component only <br /> and cannot be passed to other components. The this. setState property is used to update the state values in the component</p>
                </div>
                <div>
                    <h3>3. How does useEffect work?</h3>
                    <p><strong>Ans:</strong> The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. <br /> For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects</p>
                </div>
            </div>
        </div>
    );
};

export default Question;