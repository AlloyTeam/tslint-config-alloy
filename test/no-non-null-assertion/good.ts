interface Bar2 {
    baz: string;
}

function foo2(bar: Bar2 | null) {
    if (bar === null) {
        return '';
    }
    return bar.baz;
}
