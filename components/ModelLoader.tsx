import { Html, useProgress } from "@react-three/drei";

const ModelLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        width: "100vw",
        height: "100vh",
        background: "#272727",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          fontSize: 14,
          color: "#B2B2B1",
          fontWeight: 200,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
    );
  }

export default ModelLoader;