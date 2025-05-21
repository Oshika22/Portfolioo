import React from 'react'
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center  gap-6 mt-10 h-[300px] w-full bg-gradient-to-b from-[#140152] to-[#0D00A4] rounded-t-3xl'>
              
        <motion.h4
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-3xl font-extrabold leading-tight text-white text-center"
        >
          Focused on {""}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#865DFF] to-[#00B4D8]">
            Quality
          </span>
          , Driven by {""}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#865DFF] to-[#00B4D8]">
            Passion
          </span>
        </motion.h4>
        <h3 className="text-lg text-amber-50">
            © 2025 Oshika. All rights reserved.  
          </h3>
    </div>
  )
}

export default Footer