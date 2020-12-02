function *range(from, to) {
  while (from <= to) {
    let start = yield from
    from++
}
    }

    for (var r of range(5, 10)) {
        console.log( r );
    }
