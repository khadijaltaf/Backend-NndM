import bcrypt from 'bcrypt'

export const hashPassword =  async(password) =>{
    try {
        const sRounds = 10;
        const hashedPwd = await bcrypt.hash(password, sRounds);
        return hashedPwd
    } catch (error) {
        console.log(error)
    }
}

export const comparePassword = async (password, hashedPwd) =>{
    return bcrypt.compare(password, hashedPwd);
}