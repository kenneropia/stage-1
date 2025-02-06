# Number Classification API

A RESTful API that returns mathematical properties and fun facts about numbers.

## Features

- Number classification (prime, perfect, Armstrong)
- Properties detection (odd/even, Armstrong)
- Digit sum calculation
- Fun facts from Numbers API

## Requirements

- Node.js
- TypeScript
- npm or yarn

## Installation

```bash
git clone https://github.com/kenneropia/stage-1
cd stage-1
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
npm start
```

## API Documentation

### Classify Number

Get mathematical properties of a number.

- **URL**: `https://stage-1-aol6.onrender.com/api/classify-number`
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
    "number": "alphabet",
    "error": true
}
```

 
