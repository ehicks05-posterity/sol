import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="mx-auto max-w-screen-lg">
      <Link
        className="flex items-center gap-1 p-4 text-2xl"
        style={{ fontFamily: 'Urbanist' }}
        to={'/'}
      >
        e-sol
      </Link>
    </div>
  );
};

export default Header;
