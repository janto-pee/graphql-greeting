import { ApolloServer, gql } from "apollo-server";
import { readFile } from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath} from 'url'
import { resolvers } from "./resolvers/resolvers.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const typeDefs = await readFile(path.join(__dirname, "schemas", "schema.graphql"), "utf8")

// gql`
//     type Query {
//         greeting: String
//     }
// `

// const resolvers = {
//     Query: {
//         greeting: () => 'Hello guys'
//     }
// }

const server = new ApolloServer({typeDefs, resolvers})
const serverInfo = await server.listen({port: 9000})
console.log(`server listening on ${serverInfo.url}`)