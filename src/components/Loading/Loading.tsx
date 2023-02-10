import { motion, Variants } from 'framer-motion';
import { LoadingContainer } from './Loading.styled';

const pathVariants: Variants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      repeatType: 'reverse',
      repeat: Infinity,
    },
  },
};

const Loading = () => {
  return (
    <LoadingContainer>
      <svg
        width="50"
        height="64"
        viewBox="0 0 24 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial="initial"
          animate="animate"
          variants={pathVariants}
          d="M18 1H7L1 20.5h9.5L4 37.5 23 14h-9.5L18 1Z"
          stroke="#000"
          stroke-linejoin="round"
        />
      </svg>
    </LoadingContainer>
  );
};
export default Loading;
