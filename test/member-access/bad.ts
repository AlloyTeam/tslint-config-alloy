// bad 没有设置类成员的可访问性
class Foo1 {
    static foo = 'foo';
    static getFoo() {
        return Foo1.foo;
    }
    constructor() {}
    bar = 'bar';
    getBar() {}
    get baz() {
        return 'baz';
    }
    set baz(value) {
        console.log(value);
    }
}
