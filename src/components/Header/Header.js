import './Header.css';

export default function Header({ title }) {
  console.log(title)
  return (
    <>
      <h1 title="Header" className="header">{title}</h1>
    </>
  );
}