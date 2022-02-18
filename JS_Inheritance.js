/**note: Inheritance is used to reduce code deplication.
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

/**By creating inheritance, not only is clutter reduced, 
 * the size of codeis reduced to something that is easy to work
 * with, yet it still effects all the many parts it must.
 * 
 * note: me is of type Person, which contains a property called
 * _proto_: object
 * opening th e_proto_: object, there are some properties associated
 * with it. constructor with class Person is in there, and so is the talk: f talk() 
 * which is the talk function that has been written below. 
 * 
 */
class Person {
    talk() {
        return 'Talking';
    }
}
/**Point is, me doesnt directly have the talk function on it. me is an instance of the Person class.  */
const me = new Person();
const you = new Person();
const them = new Person();
/**We can add me.age = 12 */
me.age = 12
/** the outcome will be Person {age: 12}
 *                                  are:12
 *                                  _proto_:object
 * note: notice how the talk does not show up. 
 * This is because the talk is on the prototype
 * the _proto_:object
 */