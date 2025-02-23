import WordCollection from "./WordCollection"

export default () => {
    console.log("--- started ---")


    const list = new WordCollection(["First", "Second", "Third", "Fourth", "Fifth"]);

    console.log("--- alphabetic ---")
    const alphabeticIterator = list.getIterator("alphabetic");
    while(alphabeticIterator.hasNext()) {
        console.log(alphabeticIterator.current());
        alphabeticIterator.next()
    }
    console.log(alphabeticIterator.current());
    
    console.log("--- order ---")
    const orderIterator = list.getIterator();
    while(orderIterator.hasNext()) {
        console.log(orderIterator.current());
        orderIterator.next()
    }
    console.log(orderIterator.current());


    console.log("--- ended ---")
} 