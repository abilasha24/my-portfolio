
import './FloatingDiamond.css';

const diamonds = [
  { id: 1, top: '15%', left: '12%', delay: '0s', size: 12 },
  { id: 2, top: '28%', left: '85%', delay: '1s', size: 16 },
  { id: 3, top: '48%', left: '8%', delay: '2s', size: 10 },
  { id: 4, top: '65%', left: '90%', delay: '0.5s', size: 14 },
  { id: 5, top: '82%', left: '25%', delay: '1.5s', size: 11 },
  { id: 6, top: '18%', left: '65%', delay: '2.5s', size: 13 },
  { id: 7, top: '75%', left: '70%', delay: '3s', size: 17 },
  { id: 8, top: '42%', left: '48%', delay: '1.2s', size: 9 },
];

export default function FloatingDiamond() {
  return (
    <div className="floating-diamonds" aria-hidden="true">
      {diamonds.map((diamond) => (
        <span
          key={diamond.id}
          className="floating-diamond"
          style={{
            top: diamond.top,
            left: diamond.left,
            animationDelay: diamond.delay,
            width: diamond.size,
            height: diamond.size,
          }}
        />
      ))}
    </div>
  );
}
