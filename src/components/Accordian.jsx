import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateFirstState, updateSecondState, updateThirdState } from '../slice/accordianSlice';

const Accordian = () => {
    const accordianState = useSelector(store => store.accordian)
    const dispatch = useDispatch();

    console.log(accordianState)
    const handleFirst=()=>{
        if(accordianState.first===false){
            dispatch(updateFirstState(true))
            dispatch(updateSecondState(false))
            dispatch(updateThirdState(false))
        }
        else{
            dispatch(updateFirstState(false))
        }
        
    }
    const handleSecond=()=>{
        if(accordianState.second===false){
            dispatch(updateFirstState(false))
            dispatch(updateSecondState(true))
            dispatch(updateThirdState(false))
        }
        else{
            dispatch(updateSecondState(false))
        }
        
    }
    const handleThird=()=>{
        if(accordianState.third===false){
            dispatch(updateFirstState(false))
            dispatch(updateSecondState(false))
            dispatch(updateThirdState(true))
        }
        else{
            dispatch(updateThirdState(false))
        }
        
    }
  return (
    <div className='acc_container'>
      <div className="acc_heading" onClick={()=>handleFirst()}>
        Heading 1
      </div>
      {accordianState.first?<div className="acc_content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, voluptas repellat sit non, autem rerum aut molestiae, dolores sint tenetur quod. Hic officiis omnis ducimus aliquam repellendus ullam quia inventore, odio nesciunt est sequi, nihil, iste maxime libero? Dicta inventore temporibus atque perspiciatis asperiores sint nemo adipisci incidunt consectetur commodi pariatur dignissimos rerum provident, placeat distinctio. Aliquam soluta quis delectus aliquid fugit excepturi, quia officiis eligendi voluptatum, id commodi at consectetur, saepe asperiores nihil laudantium ad odit nam aspernatur error reiciendis itaque? Maiores sapiente, libero quam laudantium tenetur expedita eos sequi consequuntur. Consequatur rem repellat similique error magni fugit. Corrupti.
      </div>:<></>}
      <div className="acc_heading" onClick={()=>handleSecond()}>
        Heading 2
      </div>
      {accordianState.second?<div className="acc_content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, voluptas repellat sit non, autem rerum aut molestiae, dolores sint tenetur quod. Hic officiis omnis ducimus aliquam repellendus ullam quia inventore, odio nesciunt est sequi, nihil, iste maxime libero? Dicta inventore temporibus atque perspiciatis asperiores sint nemo adipisci incidunt consectetur commodi pariatur dignissimos rerum provident, placeat distinctio. Aliquam soluta quis delectus aliquid fugit excepturi, quia officiis eligendi voluptatum, id commodi at consectetur, saepe asperiores nihil laudantium ad odit nam aspernatur error reiciendis itaque? Maiores sapiente, libero quam laudantium tenetur expedita eos sequi consequuntur. Consequatur rem repellat similique error magni fugit. Corrupti.
      </div>:<></>}
      <div className="acc_heading" onClick={()=>handleThird()}>
        Heading 3
      </div>
      {accordianState.third?<div className="acc_content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, voluptas repellat sit non, autem rerum aut molestiae, dolores sint tenetur quod. Hic officiis omnis ducimus aliquam repellendus ullam quia inventore, odio nesciunt est sequi, nihil, iste maxime libero? Dicta inventore temporibus atque perspiciatis asperiores sint nemo adipisci incidunt consectetur commodi pariatur dignissimos rerum provident, placeat distinctio. Aliquam soluta quis delectus aliquid fugit excepturi, quia officiis eligendi voluptatum, id commodi at consectetur, saepe asperiores nihil laudantium ad odit nam aspernatur error reiciendis itaque? Maiores sapiente, libero quam laudantium tenetur expedita eos sequi consequuntur. Consequatur rem repellat similique error magni fugit. Corrupti.
      </div>:<></>}
    </div>
  )
}

export default Accordian
