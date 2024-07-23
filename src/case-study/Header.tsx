const Header = () => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header>
            <h1>Damous Case Studies</h1>
            <nav>
                <button onClick={() => scrollToSection('problem')}>Problem</button>
                <button onClick={() => scrollToSection('solution')}>Solution</button>
                <button onClick={() => scrollToSection('result')}>Result</button>
                <button onClick={() => scrollToSection('review')}>Review</button>
            </nav>
        </header>
    );
}

export default Header;
