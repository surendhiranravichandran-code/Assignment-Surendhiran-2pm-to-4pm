function DataCheck() {
  const data = [];

  return (
    <div className="container">
      <h2>Conditional Rendering</h2>

      {data.length === 0 && (
        <p style={{ color: "red", textAlign: "center" }}>
          No data available
        </p>
      )}
    </div>
  );
}

export default DataCheck;
