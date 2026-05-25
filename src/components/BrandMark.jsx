import './brand-mark.css';

export function BrandMark() {
  return (
    <span className="brand-mark">
      <span className="brand-mark__badge" aria-hidden="true">SC</span>
      <span className="brand-mark__text">
        <span className="brand-mark__title">SERVIFY</span>
        <span className="brand-mark__subtitle">CAMPUS</span>
      </span>
      <span className="brand-mark__mobile" aria-hidden="true">SERVIFY CAMPUS</span>
    </span>
  );
}
