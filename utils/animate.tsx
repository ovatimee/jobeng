import React, {useRef, useEffect} from "react";


interface AnimateProps {
  className: string;
  children: React.ReactNode;
}


const Animate: React.FC<AnimateProps> = ({ children, className }) => {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("this");
        }
      });
    });

    io.observe(ref.current);

    return () => {
      io.disconnect();
    };
  }, [ref, className]);

  return (
    <div className={`animate ${className}`} ref={ref}>{children}</div>
  )
};


export default Animate
