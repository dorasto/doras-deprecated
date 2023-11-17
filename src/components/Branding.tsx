import { AnimatePresence, motion } from "framer-motion";

const Branding = () => {
    const variants = {
        hover: { rotate: -40 },
        initial: { rotate: 0 }
    };

    return (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div className="group relative duration-300 active:scale-95 my-4">
                <a href="/">
                    <span className="flex items-center px-4 font-semibold text-[#1F1F1F] duration-300 bg-surface-100 py-1 rounded-badge gap-2">
                        <div className="group-hover:-rotate-0 rotate-45 transition-all">
                            <img src="/icon.svg" className="w-6 h-6" />
                        </div>
                        <span className="font-bold text-2xl doras-logo">doras.to</span>
                    </span>
                </a>
            </div>
            {/* GRADIENT */}
        </motion.div>
    );
};

export default Branding;
