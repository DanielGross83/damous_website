import Header from './Header'; // Ensure paths are correct based on your project structure
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import ResultSection from './ResultSection';
import ReviewSection from './ReviewSection';
import Footer from './Footer';

const CaseStudyPage = () => {
    return (
        <div className="case-study-page">
            <Header />
            <ProblemSection />
            <SolutionSection />
            <ResultSection />
            <ReviewSection />
            <Footer />
        </div>
    );
}

export default CaseStudyPage;
