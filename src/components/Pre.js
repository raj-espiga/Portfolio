import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Pre(props) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(248, 250, 252, 0.2)",
        zIndex: 999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        opacity: props.load ? 1 : 0,
        visibility: props.load ? "visible" : "hidden",
        transition: props.load ? "none" : "opacity 0.4s ease-out, visibility 0.4s ease-out"
      }}
    >
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col className="text-center">
            <div style={{ position: "relative", display: "inline-block" }}>
              {/* Rotating arcs animation */}
              <div
                style={{
                  position: "relative",
                  width: "70px",
                  height: "70px"
                }}
              >
                {/* Arc 1 - Top right */}
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    border: "3px solid transparent",
                    borderTop: "3px solid #2563eb",
                    borderRight: "3px solid #2563eb",
                    borderRadius: "50%",
                    animation: "arcRotate1 4s ease-in-out infinite"
                  }}
                />
                
                {/* Arc 2 - Bottom right */}
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    border: "3px solid transparent",
                    borderBottom: "3px solid #3b82f6",
                    borderRight: "3px solid #3b82f6",
                    borderRadius: "50%",
                    animation: "arcRotate2 3.5s ease-in-out infinite reverse"
                  }}
                />
                
                {/* Arc 3 - Bottom left */}
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    border: "3px solid transparent",
                    borderBottom: "3px solid #60a5fa",
                    borderLeft: "3px solid #60a5fa",
                    borderRadius: "50%",
                    animation: "arcRotate3 3s ease-in-out infinite"
                  }}
                />
                
                {/* Arc 4 - Top left */}
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    border: "3px solid transparent",
                    borderTop: "3px solid #93c5fd",
                    borderLeft: "3px solid #93c5fd",
                    borderRadius: "50%",
                    animation: "arcRotate4 4.5s ease-in-out infinite reverse"
                  }}
                />
                
                {/* Center core */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "14px",
                    height: "14px",
                    background: "radial-gradient(circle, #2563eb 0%, #3b82f6 100%)",
                    borderRadius: "50%",
                    boxShadow: "0 0 20px rgba(37, 99, 235, 0.4)",
                    animation: "coreSpin 5s ease-in-out infinite"
                  }}
                />
                
                {/* Inner rotating ring */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "35px",
                    height: "35px",
                    border: "2px solid rgba(37, 99, 235, 0.2)",
                    borderRadius: "50%",
                    borderTop: "2px solid rgba(37, 99, 235, 0.6)",
                    animation: "innerRingRotate 2s ease-in-out infinite"
                  }}
                />
                
                {/* Outer guide ring */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "60px",
                    height: "60px",
                    border: "1px solid rgba(37, 99, 235, 0.1)",
                    borderRadius: "50%",
                    animation: "guideRotate 7s ease-in-out infinite reverse"
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Rotating arcs animations */}
      <style jsx>{`
        @keyframes arcRotate1 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes arcRotate2 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes arcRotate3 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes arcRotate4 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes coreSpin {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        @keyframes innerRingRotate {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        @keyframes guideRotate {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Pre;
