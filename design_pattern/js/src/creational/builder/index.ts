import User from "./User";

export default () => {
    const user = new User();
    user.setName("Kartik").setAge(10).printUser();
};
