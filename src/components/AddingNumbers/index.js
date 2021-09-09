import React from 'react';
import './index.css';
import { CheckCircleIcon } from '@heroicons/react/solid';

function Todolist() {
    return (
        <div className='todo-container'>
            <div className='box'>
                <div className='header'>
                    <div className='date'>
                        <h1>12</h1>
                        <p>jan</p>
                        <span>2016</span>
                    </div>
                    <div className='week'>
                        <h3>tuesday</h3>
                    </div>
                </div>
                <div className='body'>
                    <div className='todo'>
                        <span>Buy robux</span>
                        <CheckCircleIcon />
                    </div>
                    <div className='todo'>
                        <span>Get homework done</span>
                        <CheckCircleIcon />
                    </div>
                    <div className='todo'>
                        <span>Use google</span>
                        <CheckCircleIcon />
                    </div>
                </div>
                <div className='footer'>
                    <input type='text' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Todolist;
