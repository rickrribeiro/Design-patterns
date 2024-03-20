# 1. Review
## 1.1 Four pilars of OOP
<br>

### | 1.1.1 Abstraction 
is a model of a real-world object or phenomenon, limited to a specific context, which represents all details relevant to this context with high accuracy and omits all the rest.
<br><br>

### | 1.1.2 Encapsulation 
is the ability of an object to hide parts of its state and behaviors from other objects exposing only a limted interface to the rest of the program
<br><br>

### | 1.1.3 Inheritance 
is the ability to build new classes on top of exist-
ing ones. The main benefit of inheritance is code reuse. If you
want to create a class that’s slightly different from an existing
one, there’s no need to duplicate code. Instead, you extend the
existing class and put the extra functionality into a resulting
subclass, which inherits fields and methods of the superclass.
<br><br>

### | 1.1.4 polymorphism 
is the ability of an object
to “pretend” to be something else, usually a class it extends or
an interface it implements. In our example, the dogs and cats
in the bag were pretending to be generic animals.
<br><br>

# 2. Software Design Principles
## 2.1 Features of a good design
1. Code Reuse
2. Extensibility

## 2.2 Design Principles
### | 2.2.1 Encapsulate What Varies
Identify the aspects of your application that vary and
separate them from what stays the same.
The main goal of this principle is to minimize the effect caused
by changes.

### | 2.2.2 Program to an Interface, not an Implementation
Program to an interface, not an implementation. Depend
on abstractions, not on concrete classes.

### | 2.2.3 Favor Composition Over Inheritance
There’s an alternative to inheritance called composition.
Whereas inheritance represents the “is a” relationship between
classes (a car is a transport), composition represents the “has
a” relationship (a car has an engine).

<br>

## 2.3 SOLID principles 
(remember to do KISS, DRY, YAGNI)
### | 2.3.1  <b><span style="font-size:larger;color:red;">S</span></b>ingle Responsibility Principle
A class should have just one reason to change. <br>
Try to make every class responsible for a single part of the
functionality provided by the software, and make that respon-
sibility entirely encapsulated.
### | 2.3.1  <b><span style="font-size:larger;color:red;">O</span></b>pen/Closed Principle
Classes should be open for extension but closed for
modification.<br>
The main idea of this principle is to keep existing code from
breaking when you implement new features. If a class is already developed, tested, reviewed, and included in some framework or otherwise used in an app, trying to mess with its code is risky. Instead of changing the code of the class directly, you can create a subclass and override parts of the original class that you want to behave differently. You’ll achieve your goal but also won’t break any existing clients of the original class.
### | 2.3.1  <b><span style="font-size:larger;color:red;">L</span></b>iskov Substitution Principle
When extending a class, remember that you should be
able to pass objects of the subclass in place of objects of
the parent class without breaking the client code.<br>
This means that the subclass should remain compatible with
the behavior of the superclass. When overriding a method,
extend the base behavior rather than replacing it with some-
thing else entirely.<br>
- Parameter types in a method of a subclass should match or be
more abstract than parameter types in the method of the super-
class.
- The return type in a method of a subclass should match or be
a subtype of the return type in the method of the superclass.
- A method in a subclass shouldn’t throw types of exceptions
which the base method isn’t expected to throw.
- A subclass shouldn’t strengthen pre-conditions.   
- A subclass shouldn’t weaken post-conditions.
- Invariants of a superclass must be preserved.
- A subclass shouldn’t change values of private fields of the
superclass.
### | 2.3.1  <b><span style="font-size:larger;color:red;">I</span></b>nterface Segregation Principle
Clients shouldn’t be forced to depend on methods they
do not use.<br>
Try to make your interfaces narrow enough that client classes
don’t have to implement behaviors they don’t need.
### | 2.3.1  <b><span style="font-size:larger;color:red;">D</span></b>ependency Inversion Principle
High-level classes shouldn’t depend on low-level class-
es. Both should depend on abstractions. Abstractions
shouldn’t depend on details. Details should depend on
abstractions.

<br>

# 3. Design Patterns
## 3.2 Creational Patterns
Creational patterns provide object creation mechanisms that
increase flexibility and reuse of existing code.
### | 3.2.1 Factory Method
Factory Method is a creational design pattern that provides
an interface for creating objects in a superclass, but allows
subclasses to alter the type of objects that will be created.

### | 3.2.2 Abstract Factory
Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

### | 3.2.3 Builder
Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

### | 3.2.4 Prototype
Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

### | 3.2.5 Singleton
Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance



## 3.3 Structural Patterns
Structural patterns explain how to assemble objects and class-
es into larger structures, while keeping the structures flexible
and efficient.

### | 3.3.1 Adapter
Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.

### | 3.3.2 Bridge
Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.

### | 3.3.3 Composite
is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects

### | 3.3.4 Decorator (Wrapper)
Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

### | 3.3.5 Facade
Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes

### | 3.3.6 FlyWeight
Flyweight is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.

### | 3.3.6 Proxy
Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object


## 3.4 Behavioral Patterns
Behavioral patterns take care of effective communication and the assignment of responsibilities between objects.


### | 3.4.1 Chain of Responsability
Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

### | 3.4.2 Command
Command is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you parameterize methods with different requests, delay or queue a request’s execution, and support undoable operations
- Use the Command pattern when you want to queue operations, schedule their execution, or execute them remotely. When you want to implement reversible operations

### | 3.4.3 Iterator
Iterator is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).

### | 3.4.4 Mediator
Mediator is a behavioral design pattern that lets you reduce
chaotic dependencies between objects. The pattern restricts
direct communications between the objects and forces them to
collaborate only via a mediator object.

### | 3.4.5 Memento
Memento is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation
### | 3.4.6 Observer
Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.
### | 3.4.7 State
State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class
### | 3.4.8 Strategy
Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable. Use the pattern when your class has a massive conditional operator that switches between different variants of the samealgorithm
### | 3.4.9 Template Method
Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure
### | 3.4.10 Visitor
Visitor is a behavioral design pattern that lets you separate algorithms from the objects on which they operate.
