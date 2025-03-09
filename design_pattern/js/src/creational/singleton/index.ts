import SingleTon from "./SingleTon";

export default () => {
    console.log("--- started ---");
    const data : SingleTon = SingleTon.getInstance();
}