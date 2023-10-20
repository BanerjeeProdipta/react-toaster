import React, { useState, useEffect } from "react";
import "./Toast.css";

interface ToastProps {
  message: string;
  duration?: number;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  return visible ? (
    <div className="toast">
      <div className="toast-content">
        <p>{message}</p>
      </div>
    </div>
  ) : null;
};

export default Toast;
