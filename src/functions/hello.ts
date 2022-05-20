import { APIGatewayAuthorizerHandler } from "aws-lambda";

export const handler: APIGatewayAuthorizerHandler = async (event) => {
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Hello world",
    }),
  };
};
