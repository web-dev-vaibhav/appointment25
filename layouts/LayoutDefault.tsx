import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      {children}
    </div>
  );
}