import Singleton  from './src/singleton'

const singleton1 = Singleton.getInstance('11');
console.log(singleton1.prop1);

const singleton2 = Singleton.getInstance('222');
console.log(singleton2.prop1);