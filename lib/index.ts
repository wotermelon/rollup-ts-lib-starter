export default async function test() {
  console.log(process.env.NODE_ENV)
  return Object.entries({ a: 111 })
}
