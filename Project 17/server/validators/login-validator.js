const { z } = require("zod");
const loginSchema = z.object({
  email: z
    .string({ required_error: "Email name is required" })
    .trim()
    .min(10, { message: "Email name must be at least 10 characters" })
    .max(50, { message: "Email name must less than 50 characters" })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string({ required_error: "Password name is required" })
    .trim()
    .min(3, { message: "Password name must be at least 3 characters" })
    .max(50, { message: "Password name must less than 50 characters" }),
});
module.exports = { loginSchema };
