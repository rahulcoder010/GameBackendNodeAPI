class GameUtils {
  generateUniqueBigInt() {
    const timestamp = BigInt(Date.now());
    const randomPart = BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
    const uniqueBigInt = (timestamp << BigInt(20)) | randomPart;

    return uniqueBigInt;
  }
}

module.exports = GameUtils;