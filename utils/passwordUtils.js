import byscrypt from "bcryptjs";

export const hashPassword = async (password) => {
    const salt = await byscrypt.genSalt(10);
    const hashedPassword = await byscrypt.hash(password, salt);
    return hashedPassword;
}

export const comparePasswords = async (password, hashedPassword) => {
    const isMatch = await byscrypt.compare(password, hashedPassword);
    return isMatch;
}