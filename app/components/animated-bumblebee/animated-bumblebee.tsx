import { motion } from 'framer-motion';

const AnimatedBumblebee = () => {
  return (
    <div style={{ position: 'relative', width: '25px', height: '25px' }}>
      <img
        src="/bee-body.png"
        alt="Bumblebee Body"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}
      />
      <motion.img
        src="/right-wing.png"
        alt="Left Wing"
        style={{ position: 'absolute', top: '7px', left: '10px', width: '100%' }}
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 0.2 }}
      />
      <motion.img
        src="/left-wing.png"
        alt="Right Wing"
        style={{ position: 'absolute', top: '11px', right: '10px', width: '50%' }}
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, -20, 20, 0] }}
        transition={{ repeat: Infinity, duration: 0.2 }}
      />
    </div>
  );
};

export default AnimatedBumblebee;
