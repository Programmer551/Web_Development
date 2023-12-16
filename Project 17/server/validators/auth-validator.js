const { z } = require("zod");
const signupSchema = z.object({
  name: z
    .string({ required_error: "User name is required" })
    .trim()
    .min(3, { message: "User name must be at least 3 characters" })
    .max(50, { message: "User name must less than 50 characters" }),
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
  phone: z
    .string({ required_error: "User name is required" })
    .trim()
    .min(1, { message: "Phone number must be at least 11 characters" })
    .max(11, { message: "Phone number must less than 11 characters" }),
});
module.exports = { signupSchema };
