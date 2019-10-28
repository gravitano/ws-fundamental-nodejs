// error
function firstAsync() {
    let promise = Promise.resolve(10);
    let result = await promise; // Syntax error
}

async function sequence() {
    await promise1(50); // Wait 50ms…
    await promise2(50); // …then wait another 50ms.
    return "done!";
}
  
  