#!/bin/bash

echo "🚀 Portfolio MERN Stack - Quick Setup Script"
echo "=============================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo ""

# Backend setup
echo "📦 Setting up backend..."
cd server
npm install
cp .env.example .env
echo "✅ Backend dependencies installed"
echo "⚠️  Don't forget to configure your .env file!"
echo ""

# Frontend setup
echo "📦 Setting up frontend..."
cd ../client
npm install
echo "✅ Frontend dependencies installed"
echo ""

echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Configure server/.env with your MongoDB URI and email credentials"
echo "2. Start MongoDB (if running locally)"
echo "3. Run backend: cd server && npm run dev"
echo "4. Run frontend: cd client && npm start"
echo ""
echo "Happy coding! 💻"
