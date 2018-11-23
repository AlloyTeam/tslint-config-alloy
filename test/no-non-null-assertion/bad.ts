interface Bar1 {
    baz: string;
}

function foo1(bar: Bar1 | null) {
    return bar!.baz;
}
