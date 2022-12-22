import React from "react";
import styled from "styled-components";

function Features() {
    return (
        <FeatureContainer>
            <MainFContainer>
                <h1>hey</h1>
            </MainFContainer>
        </FeatureContainer>
    );
}

const FeatureContainer = styled.div`
    /* border: 1px solid red; */
    padding-top: 3rem;
    background: #d7fed0;
`;

const MainFContainer = styled.div`
    /* border: 1px solid green; */
    margin: 0 300px;
    height: 100%;
    display: flex;
`;

export default Features;
