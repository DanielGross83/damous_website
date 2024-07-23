import React from 'react';
import styled from 'styled-components';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import ResultSection from './ResultSection';
import ReviewSection from './ReviewSection';
import Header from './Header';
import Footer from './Footer';

// Main container for the case study page
const PageContainer = styled.div`
    position: relative;
    width: 1280px;
    height: 2368px;
    background: #000000;
    color: #F0F0F0;
    font-family: 'Poppins', sans-serif;
`;

// Component for reusable banner with dynamic top positioning
const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: ${props => props.top};  // Dynamically set top position
    left: 485px;
    width: 171px;
    height: 34px;
    background: linear-gradient(90deg, #131B30 0%, #161F39 100%);
    border-radius: 20px;
    color: #918383;
    padding: 12px 15px;
`;

function CaseStudyPage() {
    return (
        <PageContainer>
            <Header />
            <Banner top="208px">The Problem</Banner>
            <ProblemSection />
            <Banner top="648px">The Solution</Banner>
            <SolutionSection />
            <Banner top="1074px">The Result</Banner>
            <ResultSection />
            <Banner top="1465px">The Review</Banner>
            <ReviewSection />
            <Footer />
        </PageContainer>
    );
}

export default CaseStudyPage;
