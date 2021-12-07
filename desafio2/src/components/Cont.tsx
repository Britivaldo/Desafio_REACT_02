import { useState} from 'react';


function Cont (){
    const [ num, setNum ] = useState(0);

    return (
        <div>
            <h1>{num}</h1>
            <button onClick = { e => setNum(num+1)}> + 1 </button>
            <button onClick = { e => setNum(num+10)}> + 10 </button>
            <button onClick = { e => setNum(num+100)}> + 100 </button>
            <button onClick = { e => setNum(num-1)}> + 1 </button>
            <button onClick = { e => setNum(num-10)}> - 10 </button>
            <button onClick = { e => setNum(num-10)}> - 100 </button>

        </div>
    );
}

export default Cont;