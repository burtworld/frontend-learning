import cryptoJs from "crypto-js";

// 随机生成指定数量的16进制key（该方法非必须，也可自己指定key）

// 随机生成指定数量的16进制key(该方法非必须，也可直接指定固定key值)
const generatekey = (num) => {
  let library = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let key = "";
  for (var i = 0; i < num; i++) {
    let randomPoz = Math.floor(Math.random() * library.length);
    key += library.substring(randomPoz, randomPoz + 1);
  }
  return key;
};

/*
* message: 需要加解密的文本
key: 加解密的秘钥
iv: 偏移量，最短8位数，ecb模式不需要此参数
*/
const paKey = ["x", "b", "6", "d", "@", "c", "n", "l", "&"];
const paIv = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"];
// 加密
const encrypt = (message, key, iv) => {
  if (!key) key = paKey.join("");
  if (!iv) iv = paIv.join("");
  const keyHex = cryptoJs.enc.Utf8.parse(key); // 秘钥
  const ivHex = cryptoJs.enc.Utf8.parse(iv); // 偏移量
  const option = { iv: ivHex, mode: cryptoJs.mode.CBC, padding: cryptoJs.pad.Pkcs7 }; // Pkcs7填充方式
  const encrypted = cryptoJs.DES.encrypt(message, keyHex, option);
  return encrypted.ciphertext.toString(); //  加密出来为 hex格式密文
};

// 解密
const decrypt = (message, key, iv) => {
  if (!key) key = paKey.join("");
  if (!iv) iv = paIv.join("");
  const keyHex = cryptoJs.enc.Utf8.parse(key);
  const ivHex = cryptoJs.enc.Utf8.parse(iv);
  const decrypted = cryptoJs.DES.decrypt(
    {
      ciphertext: cryptoJs.enc.Hex.parse(message),
    },
    keyHex,
    {
      iv: ivHex,
      mode: cryptoJs.mode.CBC,
      padding: cryptoJs.pad.Pkcs7,
    }
  );
  return decrypted.toString(cryptoJs.enc.Utf8);
};

export { generatekey, encrypt, decrypt };
