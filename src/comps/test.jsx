import { useEffect, useState } from 'react';
import './test.css';

function Liststu(){
    const students = ['MANAL','SAMAD','WALID','HAKIMI','MEHDI'];
    // students = [];

    const n1 = 'BAKR';

    if(students.length === 0)
        return <><h1>HELLO SIR {n1}</h1><p>NO STUDENTS YET SIR {n1}</p></>;
    return <>
    <h1>HELLO SIR {n1} THIS YOUR STUDENTS LIST</h1>
        <ul>
            {students.map((student)=>(<li  className={'cls'} onClick={() => console.log('this is',student)} key={student}>{student}</li>))}
        </ul>
    </>;
}

export default Liststu;