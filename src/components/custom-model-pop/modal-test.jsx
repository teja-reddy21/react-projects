import { useState } from "react"
import Modal from "./modal"
import './modal.css'

export default function ModalTest(){
    const [showModalpopup,setShowModalPopup]=useState(false)

function handletoggleModelPopup(){
    setShowModalPopup(!showModalpopup)
}
function onClose(){
    setShowModalPopup(false)
}
return <div>
    <button onClick={handletoggleModelPopup}>Open Modal Popup</button>
    {
      showModalpopup &&
       <Modal 
       id={"custom-id"}
       header={<div>Customized Header</div>}
       footer={<div>Customized Footer</div>}
      onClose={onClose} body={<div>Customized body</div>}/>
    }
</div>
}