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
