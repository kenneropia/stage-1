// src/types.ts
interface NumberResponse {
  number: number;
  is_prime: boolean;
  is_perfect: boolean;
  properties: string[];
  digit_sum: number;
  fun_fact: string;
}

interface ErrorResponse {
  number: string;
  error: true;
}
