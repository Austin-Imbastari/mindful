import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo.png";

function Navbar() {
    return (
        <>
            <Nav>
                <Header>
                    <Link className='link' href='/'>
                        <Image src={logo} alt='logo' width={250} height={65} />
                    </Link>
                </Header>
                <UL>
                    <li>
                        <Link className='link' href='/about'>
                            <h1>About Us</h1>
                        </Link>
                    </li>

                    <li>
                        <Link className='link' href='/features'>
                            <h1>Features</h1>
                        </Link>
                    </li>
                    <li>
                        <Link className='link' href='/pricing'>
                            <h1>Pricing</h1>
                        </Link>
                    </li>
                </UL>
                <ButtonContainer>
                    <Link href='/login'>
                        <span>Login</span>
                    </Link>
                    <Link href='/signup'>
                        <span className='btn-nav'>Sign Up</span>
                    </Link>
                </ButtonContainer>
            </Nav>
        </>
    );
}

const Nav = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid rgba(0, 0, 0, 0.05);

    h1 {
        color: #000;
        font-weight: 400;
    }

    .link {
        text-decoration: none;
    }
`;

const Header = styled.div`
    margin-left: 50px;
`;

const UL = styled.ul`
    /* border: 1px solid red; */
    display: flex;
    list-style: none;

    li {
        text-decoration: none;
        padding: 0px 30px;
        font-size: 9px;
    }
`;

const ButtonContainer = styled.div`
    margin-right: 50px;

    .btn-nav {
        border: 1px solid rgba(0, 0, 0, 0.1);
        background: #d3fccb;
        padding: 1rem 2rem;
        border-radius: 10px;
        font-size: 1rem;
        font-weight: 700;
    }

    span {
        color: #000;
        padding: 0px 20px;
        font-size: 1rem;
        text-decoration: none;
        font-weight: 600;
        font-size: 1rem;
    }
`;

export default Navbar;
