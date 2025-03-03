import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Grid, Line } from '@react-three/drei';

// List of countries where Blackbox.ai is used
const countries = [
  "United States", "Canada", "United Kingdom", "Germany", "France",
  "India", "Australia", "Japan", "China", "Brazil", "South Africa",
  "Mexico", "Russia", "Italy", "Spain", "South Korea", "Singapore",
  "Netherlands", "Sweden", "Switzerland", "United Arab Emirates",
  "Saudi Arabia", "Turkey", "Indonesia", "Thailand", "Vietnam",
  "Argentina", "Chile", "Colombia", "Nigeria", "Kenya", "Egypt"
];

// Component to display country names in 3D space
function CountryNames() {
  return (
    <>
      {countries.map((country, index) => {
        // Randomize positions for a dynamic look
        const x = (Math.random() - 0.5) * 20; // Random X position (-10 to 10)
        const y = (Math.random() - 0.5) * 20; // Random Y position (-10 to 10)
        const z = (Math.random() - 0.5) * 20; // Random Z position (-10 to 10)

        return (
          <Text
            key={index}
            position={[x, y, z]}
            fontSize={0.5}
            color="cyan"
            anchorX="center"
            anchorY="middle"
            rotation={[0, 0, 0]} // Keep the text upright
            billboard // Ensure the text always faces the camera
          >
            {country}
          </Text>
        );
      })}
    </>
  );
}

// Neural Node Component
function NeuralNode({ position, color }) {
  const mesh = useRef();

  // Floating animation
  useFrame(() => {
    mesh.current.position.y = position[1] + Math.sin(Date.now() * 0.001 + position[0] * 10) * 0.1;
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.05, 16, 16]} /> {/* Very small sphere */}
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
    </mesh>
  );
}

// Neural Connection Component
function NeuralConnection({ start, end, color }) {
  return (
    <Line
      points={[start, end]} // Start and end points of the line
      color={color}
      lineWidth={0.5} // Thin lines
      dashed={false}
    />
  );
}

// Neural Network Component
function NeuralNetwork() {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);

  // Generate random nodes and connections
  useEffect(() => {
    const nodeCount = 30; // Number of nodes
    const connectionCount = 50; // Number of connections

    // Generate nodes
    const newNodes = Array.from({ length: nodeCount }, () => ({
      position: [
        (Math.random() - 0.5) * 10, // Random X position (-5 to 5)
        (Math.random() - 0.5) * 10, // Random Y position (-5 to 5)
        (Math.random() - 0.5) * 10, // Random Z position (-5 to 5)
      ],
      color: ['cyan', 'magenta', 'orange', 'lime', 'purple'][Math.floor(Math.random() * 5)], // Random color
    }));
    setNodes(newNodes);

    // Generate connections
    const newConnections = Array.from({ length: connectionCount }, () => {
      const startNode = newNodes[Math.floor(Math.random() * newNodes.length)];
      const endNode = newNodes[Math.floor(Math.random() * newNodes.length)];
      return {
        start: startNode.position,
        end: endNode.position,
        color: startNode.color, // Use the start node's color
      };
    });
    setConnections(newConnections);
  }, []);

  return (
    <>
      {/* Render Nodes */}
      {nodes.map((node, index) => (
        <NeuralNode key={index} position={node.position} color={node.color} />
      ))}

      {/* Render Connections */}
      {connections.map((connection, index) => (
        <NeuralConnection key={index} start={connection.start} end={connection.end} color={connection.color} />
      ))}
    </>
  );
}

// Main Component
function ThreeDBackground() {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: 'black' }}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Grid */}
      <Grid args={[10, 10]} cellColor="gray" sectionColor="darkgray" fadeDistance={20} />

      {/* Stars */}
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />

      {/* Country Names */}
      <CountryNames />

      {/* Neural Network */}
      <NeuralNetwork />

      {/* Camera Controls */}
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}

export default ThreeDBackground;
