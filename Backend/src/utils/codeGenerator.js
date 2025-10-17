import { customAlphabet } from "nanoid";

const alphabetChars = "qwertyuasdfghjkpzxcvbnm123456789";
export const generatedCode = customAlphabet(alphabetChars,6);