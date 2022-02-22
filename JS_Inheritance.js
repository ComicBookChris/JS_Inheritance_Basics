/******************************************************************
 * * Inheritance with classes
 */

/**
 * The issue with the code below is that you have code repeating itself. Which is
 * almost always a red flag. Everytime you are repeating code, as a programmer
 * there are probably better ways to accomplish it. This is a basic example, with 
 * just one line of code to return. Other complicated problems can contian 100s of lines
 * of code.
 * 
 * Another issue arises in the fact that code must be duplicated for every object that needs
 * its object to return "Talking".
 * 
 * Yet another con in this method below, is that if there is a bug, the fix is not just in one 
 * location.
 */
const me = {
    talk() {
        return 'Talking";'
    }
}

me.talk();

const you = {
    talk() {
        return "Talking";
    }
}

 /*
 * note: Inheritance is used to reduce code deplication.
 * Typically associated with classes
 */
class Component {
    constructor() {}
    doAnotherBasicThing() {}
    doBasicThing() {}
}

class InteractiveComponent extends Component {
    constructor() {}
    doExtraCoolThing() {}
}

/********************************************************************
 * * By creating inheritance, not only is clutter reduced, 
 * the size of the code is also reduced to something that is easy to work
 * with, yet it still effects all the many parts it must.
 * 
 * note: me is of type Person, which contains a property called
 * _proto_: object
 * Opening the _proto_: object, you will see there are some properties associated
 * with it. constructor with class Person is in there, and so is the talk: f talk() 
 * which is the talk function that has been written below. 
 */
class Person {
    talk() {
        return 'Talking';
    }
}
/**Point is, me doesnt directly have the talk function on it. me is an instance of the Person class.  */
const me = new Person();
const you = new Person();

me.talk();  // "Talking"
you.talk(); // "Talking"


/**
 * 
 */
const them = new Person();
/**We can add me.age = 12 */
me.age = 12
/** the outcome will be Person {age: 12}
 *                                  age:12
 *                                  _proto_:object
 * note: notice how the talk does not show up. 
 * This is because the talk is on the prototype
 * the _proto_:object
 *****************************************************************/