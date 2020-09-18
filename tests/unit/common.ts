import { Validation } from "@/interfaces/validation";

expect.extend({
  toBeInvalid(received: Validation | any) {
    if (received.valid) {
      return {
        message: () => "A validação passou, mas uma falha era esperada",
        pass: false,
      };
    } else {
      return { message: () => received.message, pass: true };
    }
  },
  toBeValid(received: Validation | any) {
    if (!received.valid) {
      return {
        message: () =>
          "A validação falhou, mas deveria ser válida. " + received.message,
        pass: false,
      };
    } else {
      return { message: () => received.message, pass: true };
    }
  },
});

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeValid(): R;
      toBeInvalid(): R;
    }
  }
}