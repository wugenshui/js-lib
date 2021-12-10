async function testAsync() {
  return "Async:1";
}

export default function asy() {
  const result = testAsync();
  console.log(result);
}
