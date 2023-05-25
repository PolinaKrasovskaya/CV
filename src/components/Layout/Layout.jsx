import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Nav, Link, Wrapper } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <Wrapper>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/experience">Work experience</Link>
        <Link to="/education">Education history</Link>
        {/* <Link to="/skills">Skills</Link> */}
        {/* <Link to="/contacts">Contacts</Link>
        <Link to="/languages">Languages</Link> */}
      </Nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster />
    </Wrapper>
  );
};
