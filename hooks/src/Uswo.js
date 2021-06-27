import React ,{useState}from 'react'

function Uswo() {
    console.log('render');
    const [msgobj, setMsgobj] = useState({message: ''});
    const handelchange = (e) =>{
        let obj = {...msgobj, message:e.target.value}
        console.log(obj);
        setMsgobj(obj);
    }
    return (
        <>
        <input value={msgobj.message} onChange={handelchange} type="text" placeholder="Type here"></input>
        <p>{msgobj.message}</p>
        </>
    )
}

export default Uswo
