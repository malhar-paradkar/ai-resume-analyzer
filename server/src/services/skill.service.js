import { Skills } from "../utils/skillDictionary.js";

export const extractSkills = (text) => {
    const lowerText = text.toLowerCase();

    const foundSkills = Skills.filter(skill => lowerText.includes(skill));

    return foundSkills;
};