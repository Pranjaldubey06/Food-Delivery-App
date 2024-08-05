import React, { useEffect, useState } from 'react'
import { PropagateLoader } from "react-spinners"
// import { FaCheckCircle } from "react-icons/fa";
// import { MdCelebration } from "react-icons/md";


const Sucsess = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            {
                loading ? 
                <PropagateLoader /> : 
                (
                    <div>
                        {/* <FaCheckCircle className="text-green-600" size={50} /> */}
                        <h2 className='text-3xl font-semibold mb-4'>Order Successful!..</h2>
                        <p>Your order has been successfully placed.</p>
               {/* <FaCheckCircle className="text-green-600 text-center" size={50} /> */}
                      
                    </div>
                   
                )
            }
           
            
        </div>
    );
}

export default Sucsess;
