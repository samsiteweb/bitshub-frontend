
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Breadcrumbs from "../components/Breadcrumbs";
 
const FAQ = () => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (

    <div className='container column justify-content-center w-full md:w-[90%] items-center mb-32'>
             <Breadcrumbs page="FAQ" />
           
             <h1 className='text-4xl  text-gray-800 capitalize mb-4'>F.A.Q</h1>
              <div className='max-w-md mb-10'>
                 <p className=''>Can’t find the answer you’re looking for? We’ve shared some
 of your most frequently asked questions to help you out!</p>
             </div>
             <h1 className="text-2xl font-medium text-gray-800 mb-5">Shipping Information</h1>
             <div className='bg-slate-50 rounded-md border border-slate-300 px-5'>
                 
                    
                    <Fragment>
                      <div>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          <h2 className="text-lg font-normal">A Town Hall Different From Bala Blu</h2>
        </AccordionHeader>
        <AccordionBody className="leading-6 py-4 px-5 font-thin border-2 border-indigo-200 border-b-indigo-500 ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          <h2 className="text-lg font-normal">A Town Hall Different From Bala Blu</h2>
        </AccordionHeader>
        <AccordionBody className="leading-6 py-4 px-5 font-thin border-2 border-indigo-200 border-b-indigo-500 ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          <h2 className="text-lg font-normal">A Town Hall Different From Bala Blu</h2>
        </AccordionHeader>
        <AccordionBody className="leading-6 py-4 px-5 font-thin border-2 border-indigo-200 border-b-indigo-500 ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          <h2 className="text-lg font-normal">A Town Hall Different From Bala Blu</h2>
        </AccordionHeader>
        <AccordionBody className="leading-6 py-4 px-5 font-thin border-2 border-indigo-200 border-b-indigo-500 ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      </div>
    </Fragment>
    

     
               
               
            </div>
            <h1 className="text-2xl font-medium text-gray-800 mb-5 mt-10">Orders And Returns</h1>
    <div className='bg-slate-50 rounded-md border border-slate-300 px-5'>
            <Fragment>
                      
      <Accordion open={open === 5}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          <h2 className="text-lg font-normal">A Town Hall Different From Bala Blu</h2>
        </AccordionHeader>
        <AccordionBody className="leading-6 py-4 px-5 font-thin border-2 border-indigo-200 border-b-indigo-500 ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6}>
        <AccordionHeader onClick={() => handleOpen(6)}>
          <h2 className="text-lg font-normal">A Town Hall Different From Bala Blu</h2>
        </AccordionHeader>
        <AccordionBody className="leading-6 py-4 px-5 font-thin border-2 border-indigo-200 border-b-indigo-500 ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7}>
        <AccordionHeader onClick={() => handleOpen(7)}>
          <h2 className="text-lg font-normal">A Town Hall Different From Bala Blu</h2>
        </AccordionHeader>
        <AccordionBody className="leading-6 py-4 px-5 font-thin border-2 border-indigo-200 border-b-indigo-500 ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8}>
        <AccordionHeader onClick={() => handleOpen(8)}>
          <h2 className="text-lg font-normal">A Town Hall Different From Bala Blu</h2>
        </AccordionHeader>
        <AccordionBody className="leading-6 py-4 px-5 font-thin border-2 border-indigo-200 border-b-indigo-500 ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      
    </Fragment>
    </div>

    <h1 className="text-2xl font-medium text-gray-800 mb-5 mt-10">Payments</h1>
    <div className='bg-slate-50 rounded-md border border-slate-300 px-5'>
            <Fragment>
                      
      <Accordion open={open === 9}>
        <AccordionHeader onClick={() => handleOpen(9)}>
          <h2 className="text-lg font-normal">A Town Hall Different From Bala Blu</h2>
        </AccordionHeader>
        <AccordionBody className="leading-6 py-4 px-5 font-thin border-2 border-indigo-200 border-b-indigo-500 ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 10}>
        <AccordionHeader onClick={() => handleOpen(10)}>
          <h2 className="text-lg font-normal">A Town Hall Different From Bala Blu</h2>
        </AccordionHeader>
        <AccordionBody className="leading-6 py-4 px-5 font-thin border-2 border-indigo-200 border-b-indigo-500 ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 11}>
        <AccordionHeader onClick={() => handleOpen(11)}>
          <h2 className="text-lg font-normal">A Town Hall Different From Bala Blu</h2>
        </AccordionHeader>
        <AccordionBody className="leading-6 py-4 px-5 font-thin border-2 border-indigo-200 border-b-indigo-500 ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 12}>
        <AccordionHeader onClick={() => handleOpen(12)}>
          <h2 className="text-lg font-normal">A Town Hall Different From Bala Blu</h2>
        </AccordionHeader>
        <AccordionBody className="leading-6 py-4 px-5 font-thin border-2 border-indigo-200 border-b-indigo-500 ">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      
    </Fragment>
    </div>
        </div>


  )
}
export default FAQ;

