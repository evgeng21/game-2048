export default function Chip({ chipState }) {
  return (
    <div
      className="chip"
      style={{
        ...chipState.position,
        backgroundColor: `rgb(${256 - Math.log2(chipState.title) * 25},
         256,
         ${256 - Math.log2(chipState.title) * 25})`,
      }}
    >
      <h1>{chipState.title}</h1>
    </div>
  );
}
