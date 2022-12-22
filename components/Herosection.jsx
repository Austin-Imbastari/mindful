import React from "react";
import styled from "styled-components";
import Image from "next/image";
import heroimage from "/public/images/heroimg.png";

function Herosection() {
    return (
        <HeroContainer>
            <MainContainer>
                <HeadingContainer>
                    <h1>
                        Create{" "}
                        <span className='description-color'>
                            Product
                            <br /> Descriptions
                        </span>
                        <br /> with AI!
                    </h1>
                    <p>Crush the Competition & Guarantee Your Income. Get the #1 Research Tool Today!</p>
                    <ButtonContainer>
                        <button className='btn-start'>Start Now</button>
                        <button>Explore our Plans</button>
                    </ButtonContainer>
                </HeadingContainer>
                <ImageContainer>
                    <Image src={heroimage} alt='logo' width={600} height={500} />
                </ImageContainer>
            </MainContainer>
        </HeroContainer>
    );
}

const HeroContainer = styled.div`
    /* border: 1px solid red; */
    padding-top: 3rem;
`;

const MainContainer = styled.div`
    /* border: 1px solid green; */
    margin: 0 300px;
    height: 100%;
    display: flex;
`;

const HeadingContainer = styled.div`
    /* border: 2px solid purple; */
    flex: 1;

    .description-color {
        color: #ccc0fd;
    }

    h1 {
        font-size: 50px;
        line-height: 75px;
    }

    p {
        font-size: 1.1rem;
        margin-top: 2rem;
    }
`;

const ButtonContainer = styled.div`
    margin-top: 3rem;

    button {
        border: none;
        border-radius: 32px;
        background-color: #000;
        padding: 14px 30px;
        color: #fff;
        margin-right: 1.5rem;
        filter: drop-shadow(0px 13px 13.5px rgba(137, 119, 230, 0.21));
        cursor: pointer;
        font-weight: bold;
        font-size: 1rem;
    }
`;

const ImageContainer = styled.div`
    /* border: 1px solid red; */
`;
export default Herosection;
