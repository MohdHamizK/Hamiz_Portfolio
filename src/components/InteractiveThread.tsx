import './InteractiveThread.css';
import React, { useEffect } from 'react';

interface InteractiveThreadProps {
  buttonId: string;
  onClickAction: () => void;
}

const InteractiveThread: React.FC<InteractiveThreadProps> = ({ buttonId, onClickAction }) => {
  useEffect(() => {
  const canvas = document.getElementById('threadCanvas') as HTMLCanvasElement | null;

  if (!canvas) {
    console.warn("Canvas element not found");
    return;
  }

  const ctx = canvas.getContext('2d');

  if (!ctx) {
    console.warn("Unable to get canvas context");
    return;
  }

  const targetButton = document.getElementById(buttonId) as HTMLElement | null;
  const tooltip = document.getElementById('tooltip') as HTMLElement | null;

  if (!targetButton || !tooltip) {
    console.warn("Required elements not found. Thread will not run.");
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  let btnLeft: number, btnRight: number, btnTop: number, btnBottom: number;
  let btnCenterX: number, btnCenterY: number;
  let dashOffset = 0;

  function updateButtonPosition() {
    const rect = targetButton.getBoundingClientRect();
    btnLeft = rect.left;
    btnRight = rect.right;
    btnTop = rect.top;
    btnBottom = rect.bottom;
    btnCenterX = (btnLeft + btnRight) / 2;
    btnCenterY = (btnTop + btnBottom) / 2;
  }

  updateButtonPosition();
  window.addEventListener('resize', updateButtonPosition);

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  targetButton.addEventListener('click', (e) => {
  onClickAction();
  });

  function drawThread() {
    if (!ctx || !targetButton) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const dx = mouseX - btnCenterX;
    const dy = mouseY - btnCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Glow effect
    if (distance < 150) {
      targetButton.classList.add('glow');
    } else {
      targetButton.classList.remove('glow');
    }

    // Tooltip
    if (distance < 100) {
      tooltip.style.left = `${btnCenterX - 130}px`;
      tooltip.style.top = `${btnCenterY - 40}px`;
      tooltip.classList.add('show');
    } else {
      tooltip.classList.remove('show');
    }

    // Cursor inside button bounds
    const insideButton =
      mouseX > btnLeft &&
      mouseX < btnRight &&
      mouseY > btnTop &&
      mouseY < btnBottom;

    if (insideButton) {
      targetButton.style.transform = 'scale(1.1)';
      targetButton.style.backgroundColor = '#0056b3';
    } else {
      targetButton.style.transform = 'scale(1)';
      targetButton.style.backgroundColor = '#007BFF';
    }

    if (distance > 40) {
      // Always point to the center of the button
      const rect = targetButton.getBoundingClientRect();
      const btnCenterX = (rect.left + rect.right) / 2;
      const btnCenterY = (rect.top + rect.bottom) / 2;

      const endX = btnCenterX;
      const endY = btnCenterY;

      // Line start slightly behind cursor
      const gap = 20;
      const angleToCenter = Math.atan2(endY - mouseY, endX - mouseX);

      const startX = mouseX + Math.cos(angleToCenter) * gap;
      const startY = mouseY + Math.sin(angleToCenter) * gap;

      // Dynamic curve control point
      const cpX = (startX + endX) / 2 + Math.sin(Date.now() / 500) * 40;
      const cpY = (startY + endY) / 2;

      // Draw curved line
      dashOffset -= 1;
      ctx.setLineDash([10, 10]);
      ctx.lineDashOffset = dashOffset;

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.quadraticCurveTo(cpX, cpY, endX, endY);
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw arrowhead aligned with the curve
      const tangentX = endX - cpX;
      const tangentY = endY - cpY;
      const tangentAngle = Math.atan2(tangentY, tangentX);

      const headlen = 10;
      const angleOffset = Math.PI / 7;

      ctx.beginPath();
      ctx.moveTo(endX, endY);
      ctx.lineTo(
        endX + headlen * Math.cos(tangentAngle + Math.PI + angleOffset),
        endY + headlen * Math.sin(tangentAngle + Math.PI + angleOffset)
      );
      ctx.lineTo(
        endX + headlen * Math.cos(tangentAngle + Math.PI - angleOffset),
        endY + headlen * Math.sin(tangentAngle + Math.PI - angleOffset)
      );
      ctx.closePath();
      ctx.fillStyle = '#333';
      ctx.fill();
    }
  }

  function loop() {
    drawThread();
    requestAnimationFrame(loop);
  }

  loop();

  // Cleanup event listeners
  return () => {
    window.removeEventListener('resize', updateButtonPosition);
    window.removeEventListener('resize', resizeCanvas);
    targetButton.removeEventListener('click', onClickAction);
  };
}, [buttonId, onClickAction]);

  return null

  // return (
  //   <>
  //     <canvas id="threadCanvas" style={{ position: 'fixed', top: 0, left: 0, zIndex: 999 }}></canvas>
  //     <div id="tooltip" className="tooltip">Click!</div>
  //   </>
  // );
};

export default InteractiveThread;