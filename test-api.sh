#!/bin/bash

echo "🧪 Testing OS Mastery Backend API"
echo "=================================="
echo ""

BASE_URL="http://localhost:3000/api"

# Test 1: Health Check
echo "1️⃣ Testing Health Check..."
curl -s "${BASE_URL}/health" | python3 -m json.tool
echo ""
echo ""

# Test 2: Register User
echo "2️⃣ Testing User Registration..."
REGISTER_RESPONSE=$(curl -s -X POST "${BASE_URL}/auth/register" \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }')

echo "$REGISTER_RESPONSE" | python3 -m json.tool
TOKEN=$(echo "$REGISTER_RESPONSE" | python3 -c "import sys, json; print(json.load(sys.stdin).get('token', ''))")
echo ""
echo ""

# Test 3: Login User
echo "3️⃣ Testing User Login..."
LOGIN_RESPONSE=$(curl -s -X POST "${BASE_URL}/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }')

echo "$LOGIN_RESPONSE" | python3 -m json.tool
TOKEN=$(echo "$LOGIN_RESPONSE" | python3 -c "import sys, json; print(json.load(sys.stdin).get('token', ''))")
echo ""
echo ""

# Test 4: Get Current User
if [ -n "$TOKEN" ]; then
  echo "4️⃣ Testing Get Current User (Protected Route)..."
  curl -s "${BASE_URL}/auth/me" \
    -H "Authorization: Bearer ${TOKEN}" | python3 -m json.tool
  echo ""
else
  echo "❌ No token received, skipping protected route test"
fi

echo ""
echo "=================================="
echo "✅ All tests completed!"
