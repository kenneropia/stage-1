export function isPrime(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

export function isPerfect(num: number): boolean {
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num && num !== 1;
}

export function isArmstrong(num: number): boolean {
  const digits = String(num).split("");
  const power = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(parseInt(digit), power),
    0
  );
  return sum === num;
}

export function digitSum(num: number): number {
  return String(num)
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
}

export function getProperties(num: number): string[] {
  const properties: string[] = [];

  if (isArmstrong(num)) {
    properties.push("armstrong");
  }

  properties.push(num % 2 === 0 ? "even" : "odd");
  return properties;
}
