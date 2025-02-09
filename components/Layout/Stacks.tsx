import { motion } from "framer-motion"
import { CircleDot, Clock, FileCheck, FileText, Flag, Settings, Star, Target, Users } from "lucide-react"

export default function Stacks() {
  const nodes = [
    { icon: Flag, position: "center" },
    { icon: Users, position: "up" },
    { icon: FileText, position: "down" },
    { icon: Clock, position: "up" },
    { icon: Settings, position: "center", highlighted: true },
    { icon: Star, position: "center", highlighted: true },
    { icon: Target, position: "down" },
    { icon: FileCheck, position: "up" },
    { icon: CircleDot, position: "center" },
  ]

  // Animation variants for the nodes
  const nodeVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  }

  // Animation variant for the line
  const lineVariants = {
    initial: {
      scaleX: 0,
      originX: 0,
    },
    animate: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  }

  // Pulse animation for highlighted nodes
  const pulseVariants = {
    initial: {
      boxShadow: "0 0 0 0 rgba(156, 180, 164, 0.4)",
    },
    animate: {
      boxShadow: ["0 0 0 0 rgba(156, 180, 164, 0.4)", "0 0 0 10px rgba(156, 180, 164, 0)"],
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 overflow-x-auto">
      <div className="relative min-w-[768px]">
        {/* Main horizontal line */}
        <motion.div
          className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-sage-green/50 to-sage-green"
          variants={lineVariants}
          initial="initial"
          animate="animate"
        />

        {/* Timeline nodes container */}
        <div className="relative grid grid-cols-9 gap-4 py-16">
          {nodes.map((node, index) => (
            <div
              key={index}
              className={`flex justify-center ${
                node.position === "up" ? "-mt-16" : node.position === "down" ? "mt-16" : ""
              }`}
            >
              {/* Vertical connecting line */}
              <div
                className="absolute w-px bg-gray-200 h-16 left-1/2 transform -translate-x-1/2"
                style={{
                  top: node.position === "up" ? "100%" : "auto",
                  bottom: node.position === "down" ? "100%" : "auto",
                }}
              />

              <motion.div
                className={`relative w-16 h-16 rounded-lg shadow-md border cursor-pointer flex items-center justify-center
                  ${node.highlighted ? "bg-sage-green border-sage-green/20" : "bg-white border-gray-200"}`}
                variants={{
                  ...nodeVariants,
                  ...(node.highlighted ? pulseVariants : {}),
                }}
                initial="initial"
                animate="animate"
                whileHover="hover"
                custom={index}
              >
                <node.icon className={`w-6 h-6 ${node.highlighted ? "text-white" : "text-gray-600"}`} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}