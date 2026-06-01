const SCROLL_OFFSET = 80;

export const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    window.scrollTo({
        top: target.offsetTop - SCROLL_OFFSET,
        behavior: 'smooth',
    });
};
