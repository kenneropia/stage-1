# Number Classification API

A RESTful API that returns mathematical properties and fun facts about numbers.

## Features

- Number classification (prime, perfect, Armstrong)
- Properties detection (odd/even, Armstrong)
- Digit sum calculation
- Fun facts from Numbers API

## Requirements

- Node.js >= 14
- TypeScript >= 4.5
- npm or yarn

## Installation

```bash
git clone https://github.com/yourusername/number-classifier-api
cd number-classifier-api
npm install
```

## Configuration

Create a `.env` file:
```
PORT=3000
```

## Running the API

Development:
```bash
npm run dev
```

Production:
```bash
npm run build
npm start
```

## API Documentation

### Classify Number

Get mathematical properties of a number.

- **URL**: `/api/classify-number`
- **Method**: `GET`
- **Query Params**: `number=[integer]`

#### Success Response (200 OK)

```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number..."
}
```

#### Error Response (400 Bad Request)

```json
{
    "number": "invalid",
    "error": true
}
```

 