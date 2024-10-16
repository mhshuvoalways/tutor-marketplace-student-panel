import { InView } from "@/app/components/common/motion-primitives/core/in-view";

const MotionPrimitiveComponent = ({ children }) => {
  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 50, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      viewOptions={{ margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </InView>
  );
};

export default MotionPrimitiveComponent;
