import React from "react";

export default function App() {
  return (
    <div style={{
      backgroundColor: "#050505",
      color: "#f8f1d1",
      minHeight: "100vh",
      fontFamily: "serif",
      padding: "40px"
    }}>

      <h1 style={{
        fontSize: "60px",
        color: "#d4af37",
        textAlign: "center",
        marginBottom: "20px"
      }}>
        ES DIAMONDS
      </h1>

      <p style={{
        textAlign: "center",
        fontSize: "18px",
        letterSpacing: "2px",
        marginBottom: "60px"
      }}>
        GLOBAL LUXURY HOUSE
      </p>

      <h2 style={{ color: "#d4af37", marginBottom: "20px" }}>
        ES BRASS COLLECTION
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>

        <div style={{ background: "#111", padding: "20px", borderRadius: "10px" }}>
          <img src="https://via.placeholder.com/300" style={{ width: "100%" }} />
          <h3>Brass Elephant</h3>
          <p>Premium handcrafted decor piece</p>
        </div>

        <div style={{ background: "#111", padding: "20px", borderRadius: "10px" }}>
          <img src="https://via.placeholder.com/300" style={{ width: "100%" }} />
          <h3>Durga Maa Idol</h3>
          <p>Pure brass spiritual idol</p>
        </div>

        <div style={{ background: "#111", padding: "20px", borderRadius: "10px" }}>
          <img src="https://via.placeholder.com/300" style={{ width: "100%" }} />
          <h3>Kamdhenu Cow</h3>
          <p>Symbol of prosperity</p>
        </div>

      </div>

      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h2 style={{ color: "#d4af37" }}>Contact Us</h2>
        <p>+91 9111191190</p>
        <p>www.esdiamondsglobal.com</p>
      </div>

    </div>
  );
}
