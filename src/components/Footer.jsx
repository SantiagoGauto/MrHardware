import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import "../css/footer.css"
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
    <>
    <div className='footer-center'>
            <section className="footer-icons">
                {/*  Facebook  */}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/profile.php?id=100009622760870" role="button">
                        <i className="bi bi-facebook"></i>
                    </a>
                {/*  Twitter  */}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/Santiago_Gaut0" role="button">
                        <i className="bi bi-twitter"></i>
                    </a>
                {/*  Instagram  */}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/santiago_delgauto/" role="button">
                        <i className="bi bi-instagram"></i>
                    </a>
                {/*  LinkedIn  */}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/santiago-gauto-610094240/" role="button">
                        <i className="bi bi-linkedin"></i>
                    </a>
                {/*  Github  */}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/SantiagoGauto" role="button">
                        <i className="bi bi-github"></i>
                    </a>
            </section>
    </div>
    <MDBFooter className='footer text-center text-lg-left'>
    <div className='text-center p-3 text-footer'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <Link className="text-footer" to="/">MrHardware.com</Link>
    </div>
    </MDBFooter>
    </>
);
}