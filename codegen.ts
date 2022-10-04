import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://api.github.com/graphql": {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
  ],
  documents: ["src/libs/graphql/queries.ts"],
  generates: {
    "src/types/generated.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
      config: {
        skipTypename: true,
        avoidOptionals: true,
        scalars: {
          DateTime: "string",
        },
      },
    },
  },
};

export default config;
