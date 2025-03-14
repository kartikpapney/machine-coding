import RateLimiter from "./RateLimiter"

export default () => {
    const limiter = RateLimiter((str: string) => console.log(str), 1);
    limiter("hello");
    limiter("hi")
}