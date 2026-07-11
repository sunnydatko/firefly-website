import FireflyLoader from "./components/FireflyLoader";

export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#050308",
        zIndex: 9999,
      }}
    >
      <FireflyLoader />
    </div>
  );
}
