export const calculateMatch = (resumeSkills, jobSkills) => {
    const matchedSkills = resumeSkills.filter(skill => jobSkills.includes(skill));

    const missingSkills = jobSkills.filter(skill => !resumeSkills.includes(skill));

    const score = jobSkills.length === 0 ? 0 : Math.round((matchedSkills.length / jobSkills.length) * 100);

    return { score, matchedSkills, missingSkills };
};