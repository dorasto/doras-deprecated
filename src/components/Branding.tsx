import { AnimatePresence, motion } from "framer-motion";

const Branding = () => {
    const variants = {
        hover: { rotate: -40 },
        initial: { rotate: 0 }
    };

    return (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div className="group relative duration-300 active:scale-95 mt-3">
                <a href="/">
                    <span className="flex items-center px-4 font-semibold dark:text-text-50 text-text-950 duration-300 group-hover:text-text-950 group-active:bg-surface-900/80 dark:group-hover:text-text-100 dark:group-active:bg-surface-100/80 gap-2">
                        <div className="group-hover:-rotate-0 rotate-45 transition-all">
                            <img src="/icon.svg" className="w-6 h-6 dark:hidden block" />
                            <img src="/icon.svg" className="w-6 h-6 hidden dark:block" />
                        </div>
                        <span className="font-bold text-2xl hidden md:inline-block doras-logo">doras.to</span>
                    </span>
                </a>
            </div>
            {/* GRADIENT */}
        </motion.div>
    );
};

export default Branding;
