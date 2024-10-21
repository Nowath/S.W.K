import React from "react";
import { motion } from "framer-motion";

function PriButton({ props }) {
    return (
        <div>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    duration: 3,
                }}
                className="px-10 py-3 rounded-2xl bg-green-400"
            >
                {props}
            </motion.button>
        </div>
    );
}

export default PriButton;
