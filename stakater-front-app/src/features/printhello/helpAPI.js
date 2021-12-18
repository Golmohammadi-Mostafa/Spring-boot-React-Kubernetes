// A mock function to mimic making an async request for data
export async function fethHello() {
  return await fetch("http://localhost:8080/printHello");
}
