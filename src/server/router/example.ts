import { createRouter } from "./context";
import { z } from "zod";

export const exampleRouter = createRouter()
    .query("hello", {
        input: z
            .object({
                text: z.string().nullish(),
            })
            .nullish(),
        resolve({ input }) {
            return {
                greeting: `Hello ${input?.text ?? "world"}`,
            };
        },
    })
    .mutation("file", {
        input: z
            .object({
                fileUrl: z.string(),
                number: z.number(),
            }),
        async resolve({input, ctx}) {
            // const fileUrl = await ctx.prisma
            console.log(input.fileUrl, "Backend fileURl")
            return {fileUrl: `This is Backend: ${input.fileUrl}`}
        }
    })
    .query("getAll", {
        async resolve({ ctx }) {
            // return await ctx.prisma.example.findMany();
        },
    });
