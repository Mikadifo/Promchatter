import crypto from 'crypto';

const { secret_key, secret_iv, encryption_method, hashing_method } = {
    secret_key: process.env.REACT_APP_SECRET_KEY,
    secret_iv: process.env.REACT_APP_SECRET_IV,
    encryption_method: process.env.REACT_APP_ENCRYPTION_METHOD,
    hashing_method: process.env.REACT_APP_HASHING_METHOD,
};

const encrypt = (password) => {
    const cipher = crypto.createCipheriv(
        encryption_method,
        secret_key,
        secret_iv,
    );

    return Buffer.from(
        cipher.update(password, 'utf8', 'hex') + cipher.final('hex'),
    ).toString('utf8');
};

const getHash = (data) => {
    return Buffer.from(
        crypto.createHash(hashing_method).update(data).digest('hex'),
    ).toString('utf8');
};

export { encrypt, getHash };
